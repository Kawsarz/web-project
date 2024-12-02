import {React} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Element } from "react-scroll";
import "./MainCarousel.css"

const MainCarousel = () => {
  return (
    <div>
      <Element name="MainCarousel">
      <Carousel>
        <Carousel.Item interval={280} >
          <img className="Carousel-img" src={require("../img/Discover.png")} alt="discover" />

        </Carousel.Item>
        <Carousel.Item interval={280}>
          <img  className="Carousel-img" src={require("../img/connect.png")} alt="discover" />

        </Carousel.Item>
        <Carousel.Item interval={280}>
          <img  className="Carousel-img" src={require("../img/Share.png")} alt="discover" />
          
        </Carousel.Item>
        <Carousel.Item interval={280}>
          <img  className="Carousel-img" src={require("../img/Experience.png")} alt="discover" />

        </Carousel.Item>
      </Carousel>
      </Element>

</div>
  );
};

export default MainCarousel;
