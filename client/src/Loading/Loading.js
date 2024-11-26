// LoadingScreen.js
import {React,useState, useEffect} from 'react';
import { Spinner } from 'react-bootstrap';
import './Loading.css';

const Loading = () => {


  return (
    <div className="loading-screen">
      <Spinner animation="border" role="status" variant="primary">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      <h3>Loading...</h3>
    </div>
  );
};

export default Loading;