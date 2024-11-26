import Card from "react-bootstrap/Card";
import "./LocationText.css";

function LocationText() {
  return (
    <div className="location-text">
      <Card body>
        <h1>Hot Locations</h1>
        <p>
          Discover Lebanon, one location at a time. Savor local flavors, uncover
          hidden gems and immerse yourself in Lebanon's vibrant culture. Check
          out our top picks for the most exciting and interesting places near
          you. Every adventure has to start somewhere – why not here?
        </p>
      </Card>
    </div>
  );
}

export default LocationText;
