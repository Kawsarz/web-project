// import React, {useState} from 'react';
// import {Button, Card ,Badge} from 'react-bootstrap';
// import { FaHeart, FaStar } from 'react-icons/fa';
// import {BsStarFill} from 'react-icons/bs';
// import './MyCarousel2.css';



// const MyCarousel1 = () => {

//     // Array of favorited state for each card, initialized to false
//     const [favoritedCards, setFavoritedCards] = useState([false, false, false, false,false,false]);

//   // Handle the favorite toggle for each card
//   // on a fait sa pour pouvoir clicker sur chaque heartbtn individuelement
//     const handleFavoriteClick = (index) => {
//         setFavoritedCards((prevState) => {
//             const newFavoritedCards = [...prevState];
//             newFavoritedCards[index] = !newFavoritedCards[index];
//             return newFavoritedCards;
//     });
//   };

//             /*-- Carousel2 --*/
//     return (<carousel className="card-list"  id="Carousel1" >
            
        
//         {/*-- Carousel2--*/}
//         <Card className="mb-4" >
//             <Card.Img variant="top" src={require("../img/chouwenlake.png")} alt="chouwenlake"/>
//             <Card.ImgOverlay>
//                 <Button variant={favoritedCards[0] ? 'danger':'outline-danger'} className="heartBtn" data-bs-toggle="tooltip" title="Add to favorites" onClick={()=>handleFavoriteClick(0)}>
//                     <FaHeart style={{fontSize:'30px', color: favoritedCards[0] ? 'red' : 'white'}}/>
//                 </Button>
//             </Card.ImgOverlay>
//             <Card.Body>
//                 <Card.Title>Chouwen Lake
//                 <div id="star-rating" >
//                     <BsStarFill style={{color:'Orange', fontSize:'25px'}}/>
//                     <FaStar className="fa fa-star" style={{color:'Orange', fontSize:'25px'}}/>
//                     <FaStar className="fa fa-star" style={{color:'Orange', fontSize:'25px'}}/>
//                     <FaStar className="fa fa-star" style={{color:'Orange', fontSize:'25px'}}/>
//                     <FaStar className="fa fa-star inactive" style={{color:'LightGray', fontSize:'25px'}}/>
//                 </div>
//                 </Card.Title>
//                 <Card.Text>
//                     <Badge bg="secondary" >Description</Badge>  Chouwen Lake is a stunning turquoise lake surrounded by lush forests, making it a popular destination for hiking and nature lovers.
//                 </Card.Text>
//                 <Card.Text className="card-body" style={{ backgroundColor:'rgb(240, 240, 240)'}}>
//                     <Badge  bg="green" style={{backgroundColor:'rgb(170, 170, 170)'}}>Location</Badge> Jabal Moussa Biosphere Reserve <br/>
//                 </Card.Text>
//                 <Button className='partbtn' >Details</Button>
//             </Card.Body>
//         </Card>

//         {/*-- Card 2 --*/}
//         <Card className="mb-4">
//             <Card.Img variant="top" src={require("../img/baalbek.png")} alt="baalbek"/>
//             <Card.ImgOverlay>
//                 <Button variant={favoritedCards[1] ? 'danger':'outline-danger'} className="heartBtn" data-bs-toggle="tooltip" title="Add to favorites" onClick={()=>handleFavoriteClick(1)}>
//                     <FaHeart style={{fontSize:'30px', color: favoritedCards[1] ? 'red' : 'white'}}/>
//                 </Button>
//             </Card.ImgOverlay>
//             <Card.Body>
//                 <Card.Title>Baalbek Citadel</Card.Title>
//                 <div id="star-rating" >
//                     <BsStarFill style={{color:'Orange', fontSize:'25px'}}/>
//                     <FaStar className="fa fa-star" style={{color:'Orange', fontSize:'25px'}}/>
//                     <FaStar className="fa fa-star" style={{color:'Orange', fontSize:'25px'}}/>
//                     <FaStar className="fa fa-star" style={{color:'Orange', fontSize:'25px'}}/>
//                     <FaStar className="fa fa-star inactive" style={{color:'LightGray', fontSize:'25px'}}/>
//                 </div>
//                 <Card.Text>
//                     <Badge bg="secondary">Description</Badge>  Situated in the City of the Sun, this Citadel is one of the most beautiful monuments in the Beak Governorate, and one of the oldest Roman ruins in Lebanon.
//                 </Card.Text>
//                 <Card.Text className="card-body" style={{ backgroundColor:'rgb(240, 240, 240)'}}>
//                     <Badge bg="green" style={{backgroundColor:'rgb(170, 170, 170)'}}>Location</Badge> Baalbek <br/>
//                 </Card.Text>
//                 <Button className='partbtn' >Details</Button>
//             </Card.Body>
//         </Card>

//         {/*-- Card 3 --*/}
//         <Card className="mb-4">
//             <Card.Img variant="top" src={require("../img/faloughalakes.png")} alt="faloughalakes"/>
//             <Card.ImgOverlay>
//             <Button variant={favoritedCards[2] ? 'danger':'outline-danger'} className="heartBtn" data-bs-toggle="tooltip" title="Add to favorites" onClick={()=>handleFavoriteClick(2)}>
//                     <FaHeart style={{fontSize:'30px', color: favoritedCards[2] ? 'red' : 'white'}}/>
//                 </Button>
//             </Card.ImgOverlay>
//             <Card.Body>
//                 <Card.Title>Falougha</Card.Title>
//                 <div id="star-rating" >
//                     <BsStarFill style={{color:'Orange', fontSize:'25px'}}/>
//                     <FaStar className="fa fa-star" style={{color:'Orange', fontSize:'25px'}}/>
//                     <FaStar className="fa fa-star" style={{color:'Orange', fontSize:'25px'}}/>
//                     <FaStar className="fa fa-star" style={{color:'Orange', fontSize:'25px'}}/>
//                     <FaStar className="fa fa-star inactive" style={{color:'LightGray', fontSize:'25px'}}/>
//                 </div>
//                 <Card.Text>
//                     <Badge bg="secondary">Description</Badge>   A beautiful village known for its water sources and green hills, dotted with a wide variety of trees and furrowed by hiking trails.
//                 </Card.Text>
//                 <Card.Text  className="card-body" style={{ backgroundColor:'rgb(240, 240, 240)'}}>
//                     <Badge bg="green" style={{backgroundColor:'rgb(170, 170, 170)'}}>location</Badge> Falougha, Mount Lebanon <br/>
//                 </Card.Text>
//                 <Button className='partbtn' >Details</Button>
//             </Card.Body>
//         </Card>

//         {/*-- Card 4 --*/}
//         <Card className="mb-4">
//             <Card.Img variant="top" src={require("../img/deirqamar.png")} alt="deirqamar"/>
//             <Card.ImgOverlay>
//             <Button variant={favoritedCards[3] ? 'danger':'outline-danger'} className="heartBtn" data-bs-toggle="tooltip" title="Add to favorites" onClick={()=>handleFavoriteClick(3)}>
//                     <FaHeart style={{fontSize:'30px', color: favoritedCards[3] ? 'red' : 'white'}}/>
//                 </Button>
//             </Card.ImgOverlay>
//             <Card.Body>
//                 <Card.Title>Deir Al Qamar</Card.Title>
//                 <div id="star-rating" >
//                     <BsStarFill style={{color:'Orange', fontSize:'25px'}}/>
//                     <FaStar className="fa fa-star" style={{color:'Orange', fontSize:'25px'}}/>
//                     <FaStar className="fa fa-star" style={{color:'Orange', fontSize:'25px'}}/>
//                     <FaStar className="fa fa-star" style={{color:'Orange', fontSize:'25px'}}/>
//                     <FaStar className="fa fa-star inactive" style={{color:'LightGray', fontSize:'25px'}}/>
//                 </div>
//                 <Card.Text>
//                     <Badge bg="secondary">Description</Badge>   Deir Al Qamar is a charming historic town in Lebanon known for its stunning architecture, vibrant cultural heritage, and picturesque setting.
//                 </Card.Text>
//                 <Card.Text  className="card-body" style={{backgroundColor:'rgb(240, 240, 240)'}}>
//                     <Badge bg="green" style={{backgroundColor:'rgb(170, 170, 170)'}}>Location</Badge> Chouf  <br/>
//                 </Card.Text>
//                 <Button className='partbtn' >Details</Button>
//             </Card.Body>
//         </Card>

//         {/*-- Card 5 --*/}
//         <Card className="mb-4">
//             <Card.Img variant="top" src={require("../img/jbeil.png")} alt="jbeil"/>
//             <Card.ImgOverlay>
//                 <Button variant={favoritedCards[4] ? 'danger':'outline-danger'} className="heartBtn" data-bs-toggle="tooltip" title="Add to favorites" onClick={()=>handleFavoriteClick(4)}>
//                     <FaHeart style={{fontSize:'30px', color: favoritedCards[4] ? 'red' : 'white'}}/>
//                 </Button>
//             </Card.ImgOverlay>
//             <Card.Body>
//                 <Card.Title>The Old Souk</Card.Title>
//                 <div id="star-rating" >
//                     <BsStarFill style={{color:'Orange', fontSize:'25px'}}/>
//                     <FaStar className="fa fa-star" style={{color:'Orange', fontSize:'25px'}}/>
//                     <FaStar className="fa fa-star" style={{color:'Orange', fontSize:'25px'}}/>
//                     <FaStar className="fa fa-star" style={{color:'Orange', fontSize:'25px'}}/>
//                     <FaStar className="fa fa-star inactive" style={{color:'LightGray', fontSize:'25px'}}/>
//                 </div>
//                 <Card.Text>
//                     <Badge bg="secondary">Description</Badge>  A historic marketplace characterized by narrow cobblestone streets, stone architecture, and a vibrant atmosphere filled with artisanal shops and cafes.
//                 </Card.Text>
//                 <Card.Text  className="card-body" style={{ backgroundColor:'rgb(240, 240, 240)'}}>
//                     <Badge bg="green" style={{backgroundColor:'rgb(170, 170, 170)'}}>Location</Badge> Byblos <br/>
//                 </Card.Text>
//                 <Button className='partbtn' >Details</Button>
//             </Card.Body>
//         </Card>


//         {/*-- Card 6 --*/}
//         <Card className="mb-4">
//             <Card.Img variant="top" src={require("../img/grotto.png")} alt="grotto"/>
//             <Card.ImgOverlay>
//             <Button variant={favoritedCards[5] ? 'danger':'outline-danger'} className="heartBtn" data-bs-toggle="tooltip" title="Add to favorites" onClick={()=>handleFavoriteClick(5)}>
//                     <FaHeart style={{fontSize:'30px', color: favoritedCards[5] ? 'red' : 'white'}}/>
//                 </Button>
//             </Card.ImgOverlay>
//             <Card.Body>
//                 <Card.Title>Jeita Grotto</Card.Title>
//                 <div id="star-rating" >
//                     <BsStarFill style={{color:'Orange', fontSize:'25px'}}/>
//                     <FaStar className="fa fa-star" style={{color:'Orange', fontSize:'25px'}}/>
//                     <FaStar className="fa fa-star" style={{color:'Orange', fontSize:'25px'}}/>
//                     <FaStar className="fa fa-star" style={{color:'Orange', fontSize:'25px'}}/>
//                     <FaStar className="fa fa-star inactive" style={{color:'LightGray', fontSize:'25px'}}/>
//                 </div>
//                 <Card.Text>
//                     <Badge bg="secondary">Description</Badge>  A complex of interconnected caves, renowned for its breathtaking stalactite and stalagmite formations, underground rivers, and impressive chambers.
//                 </Card.Text>
//                 <Card.Text  className="card-body" style={{ backgroundColor:'rgb(240, 240, 240)'}}>
//                     <Badge bg="green" style={{backgroundColor:'rgb(170, 170, 170)'}}>Loaction</Badge> Valley of the Dog River, Keserwan <br/>
//                 </Card.Text>
//                 <Button className='partbtn' >Details</Button>
//             </Card.Body>
//         </Card>


//         {/* <div className="d-grid gap-2">
//             <Button variant="secondary" size="lg">
//                 Searsh for more plans
//             </Button>
//         </div> */}

//         <div class="cardSeeMore">
//             <div class="card-body">
//               <button type="button" class="btn viewmoreBTN">View More</button>
//             </div>
//         </div>


//     </carousel>


// );
// }
// export default MyCarousel1;

import React, { useState, useEffect } from 'react';
import { Button, Card, Badge, Form } from 'react-bootstrap';
import { FaHeart } from 'react-icons/fa';
import { Element } from "react-scroll";
import axios from 'axios';
import './MyCarousel2.css';

const MyCarousel2 = () => {
  const [favoritedCards, setFavoritedCards] = useState([]);
  const [locations, setLocations] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Fetch locations data from backend
  const fetchLocations = async (query = '') => {
    try {
      const response = await axios.get(`http://localhost:3000/api/locations?search=${query}`);
      setLocations(response.data);
      setFavoritedCards(new Array(response.data.length).fill(false)); // Initialize favorites
    } catch (error) {
      console.error('Error fetching locations:', error);
    }
  };

  useEffect(() => {
    fetchLocations();
  }, []);

  // Handle the favorite toggle for each card
  const handleFavoriteClick = (index) => {
    setFavoritedCards((prevState) => {
      const newFavoritedCards = [...prevState];
      newFavoritedCards[index] = !newFavoritedCards[index];
      return newFavoritedCards;
    });
  };

  // Handle search query change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    fetchLocations(e.target.value);
  };

  return (
    <div className="my-carousel">
      <Element name="MyCarousel2">
      {/* Search Bar */}
      <div className="d-grid gap-2 mb-3">
        <Form.Control
          className="form-control-lg"
          size="lg"
          type="text"
          placeholder="Search locations..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>

      {/* Cards List */}
      <div className="card-list" id="Carousel2">
        {locations.map((location, index) => (
          <Card className="mb-4" key={location._id}>
            <Card.Img variant="top" src={location.image} alt={location.title} />
            <Card.ImgOverlay>
              <Button
                variant={favoritedCards[index] ? 'danger' : 'outline-danger'}
                className="heartBtn"
                onClick={() => handleFavoriteClick(index)}
              >
                <FaHeart style={{ fontSize: '30px', color: favoritedCards[index] ? 'red' : 'white' }} />
              </Button>
            </Card.ImgOverlay>
            <Card.Body>
              <Card.Title>{location.title}</Card.Title>
              <Card.Text>
                <Badge bg="secondary">Description</Badge> {location.description}
              </Card.Text>
              <Card.Text>
                <Badge bg="green">Location</Badge> {location.location}
              </Card.Text>
              {/* <Button className="partbtn">Details</Button> */}
            </Card.Body>
          </Card>
        ))}
        {/* <div className="cardSeeMore">
          <button type="button" className="btn viewmoreBTN">
            View More
          </button>
        </div> */}
      </div>
      </Element>
    </div>
  );
};

export default MyCarousel2;
