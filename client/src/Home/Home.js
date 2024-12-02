import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./MyNavbar/MyNavbar";
import MyCarousel1 from "./MyCarousel1/MyCarousel1";
import MainCarousel from "./MainCarousel/MainCarousel";
import MyCarousel2 from "./MyCarousel2/MyCarousel2";
import CreateNew from "./CreateNew/CreaetNew";
import ScrollButton from "./ScrollButton/ScrollButton";
import React, { useState } from "react";
import CreateLocation from "./CreateLocation/CreateLocation";
import PlanText from "./PlanText/PlanText";
import LocationText from "./LocationText/LocationText";
import Footer from "./Footer/Footer";



function Home() {
  const [refreshTrigger, setRefreshTrigger] = useState(false);
  // const [refreshTrigger2, setRefreshTrigger2] = useState(false);
  return (
    <div className="Home">
      <MyNavbar />
      <MainCarousel />
      <PlanText />
      <MyCarousel1 refreshTrigger={refreshTrigger} />
      <CreateNew setRefreshTrigger={setRefreshTrigger} />
      <LocationText />
      <MyCarousel2 />
      <CreateLocation setRefreshTrigger2={setRefreshTrigger} />
      <ScrollButton />
      <Footer/>
    </div>
  );
}

export default Home;
