import React, { useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import LocationForm from "./LocationForm";
import LocationComponent from "./LocationForm";


function CreateLocation({ setRefreshTrigger2 }) {//setRefreshTrigger hyde fct la bass n3ml creat new plan d8re btzdle yeha bl carousel bala ma ana e3ml refresh
    const [showModal2, setShowModal2] = useState(false);//showModal variable ta n3rf eza form mbyne aw laa setShow modal la nhota eza true or false, useState initialise l'etat de showModal(form)
  
    const handleClose2 = () => setShowModal2(false); //pour fermer form bass naabe data w nhot create, showModal saret false
    const handleShow2= () => setShowModal2(true);//pour ouvrir form bass nkbos aa creat new plan btbyn form, showModal True
  
    return (//component tb3na shou fi b alba
      <>
        <Card className="custom">
          <Card.Body className="container text-Black my-5 p-5 text-center containercustom">
            <Card.Title>Create your Location</Card.Title>
            <Card.Text  className="cc">
            Add a new location and let's discover it!
            </Card.Text>
            <Button
              className="btn btn-success btn-block btn-lg mx-5 mt-2 mb-3 buttonshadow"
              onClick={handleShow2} //bass n3ml click aal boutton bynle l form hotele showModal true mn5elel handleShow
            >
              Create new location <FaPlus />
            </Button>
          </Card.Body>
        </Card>
  
        
        <Modal show={showModal2} //show eza shoModal true btbyn form w onHide eza kbsna bara l forme ha t3ml close lal form, bl header closeButton ta nsaker l form
        onHide={handleClose2} centered>
          <Modal.Header closeButton> 
            <Modal.Title>Create a New Location</Modal.Title> 
          </Modal.Header>
          <Modal.Body>
            <LocationForm
              onLocationCreated={() => { //bass n3ml create lal data l htynhn bl form
                setRefreshTrigger2((prev) => !prev);//3mal refresh w zida lhalak bl card tabaa carousel
                handleClose2();//sakerle l form
              }}
            />
          </Modal.Body>
        </Modal>
      </>
    );
  }
  

export default  CreateLocation;