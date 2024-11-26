/*import logo from './logo.svg';*/
import { BrowserRouter,Route,Routes ,Navigate} from 'react-router-dom';
import { useState,useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home/Home';
import { Card } from "react-bootstrap";
import Signup from './Signup/Signup.js';
import Login from './Signup/Login';
import Loading from './Loading/Loading';




function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an API call or other loading tasks
    const timer = setTimeout(() => {
      setLoading(false); // After some time, the page will stop showing the loading screen
    }, 2000); // Simulate 2 seconds of loading time (you can adjust this)

    // Clear the timeout if the component is unmounted
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />; // Show loading screen while the page is loading
  }

  return (
    

    <BrowserRouter>
    
      <Routes>
      <Route path="/" element={<Navigate to="/register" />} />
        <Route path='/register' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/home' element={<Home />}/>
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;
