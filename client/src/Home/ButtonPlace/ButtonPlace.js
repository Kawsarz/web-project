import Button from 'react-bootstrap/Button';
import './ButtonPlace.css'

function ButtonPlace() {
  return (
    <div className="d-grid gap-2">
      <Button variant="secondary" size="lg">
        Search for more places
      </Button>
    </div>


  );
}

export default ButtonPlace;