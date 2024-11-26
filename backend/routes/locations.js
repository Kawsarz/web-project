const express = require("express");
const Location = require("../models/locations");
const BASE_URL = "http://localhost:3000";
const upload = require("../utils/upload");
const router = express.Router();

router.get('/locations', async (req, res) => {
  const { search } = req.query; // Get the search query
  try {
    const query = search ? {
      $or: [
        { title: { $regex: search, $options: 'i' } }, // Case-insensitive search in title
        { description: { $regex: search, $options: 'i' } }, // Case-insensitive search in description
        { location: { $regex: search, $options: 'i' } }, // Case-insensitive search in location
      ]
    } : {}; // If no search query, return all locations

    const locations = await Location.find(query); // Apply the search filter if query exists
    const locationsWithUrls = locations.map((location) => ({
      ...location._doc,
      image: location.image ? `${BASE_URL}/${location.image}` : null,
    }));

    res.status(200).json(locationsWithUrls);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch locations', details: error.message });
  }
});


// POST a new location
router.post("/locations", upload.single("image"), async (req, res) => {
  const { title, description, location, stars } = req.body; // Extract fields from the request body
  const image = req.file ? `images/${req.file.filename}` : null; //req.file ha tshouf eza aatyto file eza ee ha tsame w eza laa ha thoto null (ymkn nrjaa nzabeta tsir required ejbere)

  try {
    if (!title || !description || !location) {
      // Validate required fields
      console.log("Request Body:", req.body); // Log for debugging
      console.log("Uploaded File:", req.file);
      return res
        .status(400)
        .json({ error: "Title, description and location are required." }); // Return error for missing fields
    }

    const newLocation = new Location({
      title,
      description,
      location,
      image,
      stars: stars ? Number(stars) : 0
    });

    const savedLocation = await newLocation.save(); // Save the new location to the database
    res.status(201).json(savedLocation); // Respond with the saved location
  } catch (error) {
    console.error(error); // Log the error
    res
      .status(500)
      .json({ error: "Failed to create location", details: error.message }); // Handle errors
  }
});

module.exports = router;
