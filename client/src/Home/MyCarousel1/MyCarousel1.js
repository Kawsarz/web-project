import React, { useState, useEffect } from "react";
import { Button, Card, Badge, Form ,Toast} from "react-bootstrap";
import { FaHeart } from "react-icons/fa";
import { Element } from "react-scroll";

import axios from "axios";
import "./MyCarousel1.css";

// const MyCarousel1 = ({ refreshTrigger }) => {
//   const [activities, setActivities] = useState([]);
//   const [favoritedCards, setFavoritedCards] = useState([]);

//   // Fetch activities from the API
//   const fetchActivities = async () => {
//     try {
//       const response = await axios.get('http://localhost:3000/api/activities');
//       setActivities(response.data);
//       setFavoritedCards(new Array(response.data.length).fill(false)); // Initialize favorites
//     } catch (error) {
//       console.error('Error fetching activities:', error);
//     }
//   };

//   // Re-fetch activities whenever refreshTrigger changes
//   useEffect(() => {
//     fetchActivities();
//   }, [refreshTrigger]);

//   // Handle favorite toggle
//   const handleFavoriteClick = (index) => {
//     setFavoritedCards((prevState) => {
//       const updatedFavorites = [...prevState];
//       updatedFavorites[index] = !updatedFavorites[index];
//       return updatedFavorites;
//     });
//   };

//   return (
//     <div className="my-carousel">
//     <div className="card-list">
//       {activities.map((activity, index) => (
//         <Card className="card mb-4" key={activity._id}>
//           <Card.Img
//             variant="top"
//             src={activity.image ? `http://localhost:3000/${activity.image}` : '/images/default-image.png'}
//             alt={activity.title}
//           />
//           <Card.ImgOverlay>
//             <Button
//               variant={favoritedCards[index] ? 'danger' : 'outline-danger'}
//               className="heartBtn"
//               onClick={() => handleFavoriteClick(index)}
//               title="Add to favorites"
//             >
//               <FaHeart
//                 style={{
//                   fontSize: '30px',
//                   color: favoritedCards[index] ? 'red' : 'white',
//                 }}
//               />
//             </Button>
//           </Card.ImgOverlay>
//           <Card.Body >
//             <Card.Title>{activity.title}, {activity.date}</Card.Title>
//             <Card.Text>
//               <Badge bg="secondary">Description</Badge> {activity.description}
//             </Card.Text>
//             <Card.Text>
//               <Badge bg="green">Where</Badge> {activity.where} <br />
//               <Badge bg="green">Age range</Badge> {activity.age} <br />
//               <Badge bg="green">Budget</Badge> {activity.budget} <br />
//               <Badge bg="green">Participants</Badge> {activity.participants} <br />
//             </Card.Text>
//             <Button className="partbtn">Participate</Button>
//           </Card.Body>
//         </Card>
//       ))}
//       <div className="cardSeeMore">
//         <button type="button" className="btn viewmoreBTN">View More</button>
//       </div>
//       </div>
//     </div>
//   );
// };

// export default MyCarousel1;

// import React, { useState, useEffect } from 'react';
// import { Button, Card, Badge, Form } from 'react-bootstrap';
// import { FaHeart } from 'react-icons/fa';
// import axios from 'axios';
// import './MyCarousel1.css';

const MyCarousel1 = ({ refreshTrigger }) => {//refreshTrigger la y3ml refresh bass yn3ml modifier aw ajout shi lhalo bala ma ana e3ml refresh ta ybyno
  const [activities, setActivities] = useState([]);//la nhot b albo liste des activities t3olna l bl api
  const [favoritedCards, setFavoritedCards] = useState([]);//hyde la favorite bass baad ma wslta bl backend
  const [searchQuery, setSearchQuery] = useState(""); //pour stocker search tabaa client w n3ml filter lal activities

  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);

  // Fetch activities from the API, ta n2dar njib l activities mn api mnst5dm get
  const fetchActivities = async (search = "") => {
    try {
      const response = await axios.get(//axios b5alena jib l activities  
        `http://localhost:3000/api/activities?search=${search}`//ha yjibn mn hyde url w yredele hene
      );
      setActivities(response.data);//hon mn hon data mn api, l eshya le radele yhn mn url
      setFavoritedCards(new Array(response.data.length).fill(false)); // Initialize favorites a false baaden mnzabeta la tmshe 
    } catch (error) {
      console.error("Error fetching activities:", error);//hon error eza ma 3ml fetching 
    }
  };

  // ha y3ml refetch bass nzid shi aw ndawer aa shi ta y2dr y3ml refresh la whdo w dd8re ybynle changement
  useEffect(() => {
    fetchActivities(searchQuery);
  }, [refreshTrigger, searchQuery]);


  const handleParticipate = async (id, currentParticipants) => {
    try {
      // Optimistic UI update: Immediately increment participants
      const updatedParticipants = currentParticipants + 1;
      setActivities((prevActivities) =>
        prevActivities.map((activity) =>
          activity._id === id
            ? { ...activity, participants: updatedParticipants }
            : activity
        )
      );

      // Send the updated participants count to the backend
      const response = await axios.post(
        `http://localhost:3000/api/activities/${id}/participate`,
        { participants: updatedParticipants }
      );

      // Show success message in the toast
      setToastMessage('You have successfully participated!');
      setShowToast(true);
    } catch (error) {
      console.error('Error participating in activity:', error);

      // If there's an error, revert the optimistic update
      setActivities((prevActivities) =>
        prevActivities.map((activity) =>
          activity._id === id
            ? { ...activity, participants: currentParticipants }
            : activity
        )
      );

      setToastMessage('Failed to participate. Please try again.');
      setShowToast(true);
    }
  };

//la ybdl valeur tabaa favorite , eza kbsna aalyha tsir true, w ta n3ml l kl card independente mn tenye aaatyneha index
  const handleFavoriteClick = (index) => {
    setFavoritedCards((prevState) => {
      const updatedFavorites = [...prevState];
      updatedFavorites[index] = !updatedFavorites[index];
      return updatedFavorites;
    });
  };

  // hyde fct ta bass n3ml search la shi bl searsh bar
  const handleSearchChange = (e) => {//handle va mettre a jour searshQuery hasab shou ktbna b search
    setSearchQuery(e.target.value);//hon ha taayet la fretchActivities l ha tdawer aal activities that match lktbne
  };

  // hl fct la nzabet shkl affichage tabaaa l date aal card
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (//carousel wl card kif shkln , hyde l component 
    <div className="my-carousel">
      <Element name="MyCarousel1">
      {/* search bar */}
  
      <div className="d-grid gap-2">
        <Form.Control
          className="form-control-lg"
          size="lg"
          type="text"
          placeholder="Search activities..."
          value={searchQuery}//ha yaayto lal fct l fo2 3mlnln definition
          onChange={handleSearchChange}
        />
      </div>


      {/* l contenue tabaa l card*/}
      <div className="card-list">
        {activities.map((activity, index) => (
          <Card className="card mb-4" key={activity._id}>
            <Card.Img
              variant="top"
              src={
                activity.image
                  ? `http://localhost:3000/${activity.image}`
                  : "/images/default-image.png"
              }
              alt={activity.title}
            />
            <Card.ImgOverlay>
              <Button
                variant={favoritedCards[index] ? "danger" : "outline-danger"}
                className="heartBtn"
                onClick={() => handleFavoriteClick(index)}
                title="Add to favorites"
              >
                <FaHeart
                  style={{
                    fontSize: "30px",
                    color: favoritedCards[index] ? "red" : "white"
                  }}
                />
              </Button>
            </Card.ImgOverlay>
            <Card.Body>
              <Card.Title>
                {activity.title}, {formatDate(activity.date)}
              </Card.Title>
              <Card.Text>
                <Badge bg="secondary">Description</Badge> {activity.description}
              </Card.Text>
              <Card.Text>
                <Badge bg="green">Where</Badge> {activity.where} <br />
                <Badge bg="green">Age range</Badge> {activity.age} <br />
                <Badge bg="green">Budget</Badge> {activity.budget} <br />
                <Badge bg="green">Participants</Badge> {activity.participants}{" "}
                <br />
              </Card.Text>
              
              
            </Card.Body>
              <button 
                type="button" 
                className="partbtn" 
                onClick={() => handleParticipate(activity._id, activity.participants)}>
                Participate
              </button>
           
            
          </Card>
        ))}
        <div className="cardSeeMore">
          <button type="button" className="btn viewmoreBTN">
            View More
          </button>
        </div>
      </div>
      <Toast
        show={showToast}
        onClose={() => setShowToast(false)}
        delay={3000}
        autohide
      >
        <Toast.Body>{toastMessage}</Toast.Body>
      </Toast>
      </Element>
    </div>
  );
};

export default MyCarousel1;

