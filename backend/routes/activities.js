const express = require('express');
const Activity = require('../models/activities');
const BASE_URL = 'http://localhost:3000';
const upload = require('../utils/upload'); // Import the image upload logic
const router = express.Router();
const app = express();


//API: by5od data w bwasln ben frontend w backend  

//Post pour Activities (mnhot data bl database)
router.post('/activities', upload.single('image') ,async (req, res) => { //asynchronise(majbourin nhota hk ta ymsho en parallel w ma yntro baad kl whde t5ls ta tblsh) yaane mtl multithread en java
    //req(attribut de la fonction):request envoyer mn client vers server
    const { title, description,date, where, age, budget, participants, favorite } = req.body; //hydol req body kl shi fawato user bl form
    const image = req.file ? `images/${req.file.filename}` : null; //req.file ha tshouf eza aatyto file eza ee ha tsame w eza laa ha thoto null (ymkn nrjaa nzabeta tsir required ejbere)
  
    try {
      if (!title || !description || !date|| !where || !age || !budget || !participants) {//eza ma aatane whde mn ho aw aktr 
        console.log(req.body);
        console.log('Request Body:', req.body);// ta nshouf bl terminal shou aam yaate w eza fi error aw laa hydol ka test
        console.log('Uploaded File:', req.file);

        return res.status(400).json({ error: 'All fields except favorite are required.' });//ha yaatine error msg , 400
      }
      
  
      const newActivity = new Activity({ //eza kl shi tmm w fwtna kl shi ha y3mol instance jdide new w hyaatiha attribut lfwton l'user
        title,
        description,
        date,
        where,
        age: Number(age),
        budget: Number(budget),
        participants: Number(participants),
        image,
        favorite: favorite === 'true',
      });
      //response
      const savedActivity = await newActivity.save(); //parcequ'il est asynchronise fa mnhot await l2ano hon bde yeha tntor newActivity la t5ales ta e2dr e3mala save
      res.status(201).json(savedActivity); //hon braj3le reponse 201 yaane success bshakel json b albo saved data 
    } catch (error) {
      console.error('Error while creating activity',error);
      res.status(500).json({ error: 'Failed to create activity', details: error.message });//eza fi error btl3l3e status 5oo:error code w json fi b albo error w failed to create
    }
  });


  // GET pour activities(bjib data)
// router.get('/activities', async (req, res) => {//ma fi req aashn bass aam yaatine response bl get
    // try {
    //   const activities = await Activity.find(); //byntor la ydawer bl modules/activities w t3ml find w tredele kl shi mwjoud bl activities
    //   const activitiesWithUrls = activities.map((activity) => ({ //ha y3mlo table jdid mn baad ma y3ml parcours la kl hydak table activitie, yaane map pour parcourir activities
    //     ...activity._doc, //_doc b5ale mongoose yrj3le ldata l b alb avtivity
    //     image: activity.image ? `${BASE_URL}/images/${activity.image}` : null, // eza mwjoud img Append base URL to image path, w eza laa null
    //   }))
    //   res.status(200).json(activities);//eza success btredele res b alba kl le l2ehn b activities
    // } catch (error) {
    //   res.status(500).json({ error: 'Failed to fetch activities', details: error.message });//eza failed bredele error
    // }
//   });


// GET for searching activities
router.get('/activities', async (req, res) => {
  const { search } = req.query; 

  try {
    // If search query exists, perform a case-insensitive search
    let activities;
    if (search) {
      activities = await Activity.find({ //byntor la ydawer bl modules/activities w t3ml find w tredele kl shi mwjoud bl activities
        $or: [
          { title: { $regex: search, $options: 'i' } }, // Search in title
          { description: { $regex: search, $options: 'i' } }, // Search in description
          { where: { $regex: search, $options: 'i' } }, // Search in location
        ],
      });
    } 
    else {
      activities = await Activity.find(); // Return all if no search query
    }

    const activitiesWithUrls = activities.map((activity) => ({
      ...activity._doc,
      image: activity.image ? `${BASE_URL}/images/${activity.image}` : null,
    }));

    res.status(200).json(activities); // Return activities as JSON
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch activities', details: error.message });
  }
});


router.post('/activities/:id/participate', async (req, res) => {
  const activityId = req.params.id;

  try {
    // Fetch the activity by ID
    const activity = await Activity.findById(activityId);
    if (!activity) {
      return res.status(404).json({ error: 'Activity not found' });
    }

    // Add participation logic here (e.g., increase participant count)
    activity.participants += 1;
    await activity.save();

    res.status(200).json({ message: "Participation successful!", activity });
  } catch (error) {
    console.error('Error in participation route:', error);
    res.status(500).json({ error: 'Failed to participate', details: error.message });
  }
});
  
module.exports = router;
  