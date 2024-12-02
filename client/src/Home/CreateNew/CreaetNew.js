import React, { useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import FormComponent from "./FormComponent";
import "./CreateNew.css";

function CreateNew({ setRefreshTrigger }) {//setRefreshTrigger hyde fct la bass n3ml creat new plan d8re btzdle yeha bl carousel bala ma ana e3ml refresh
  const [showModal, setShowModal] = useState(false);//showModal variable ta n3rf eza form mbyne aw laa setShow modal la nhota eza true or false, useState initialise l'etat de showModal(form)

  const handleClose = () => setShowModal(false); //pour fermer form bass naabe data w nhot create, showModal saret false
  const handleShow = () => setShowModal(true);//pour ouvrir form bass nkbos aa creat new plan btbyn form, showModal True

  return (//component tb3na shou fi b alba
    <>
      <Card className="custom">
        <Card.Body className="container text-Black my-5 p-5 text-center containercustom">
          <Card.Title>Create your Plan</Card.Title>
          <Card.Text  className="cc">
            Create your own plan and invite others to join the fun. Enjoy your ideal day, share unforgettable moments, and build meaningful connections.
          </Card.Text>
          <Button
            className="btn btn-success btn-block btn-lg mx-5 mt-2 mb-3 buttonshadow"
            onClick={handleShow} //bass n3ml click aal boutton bynle l form hotele showModal true mn5elel handleShow
          >
            Create new plan <FaPlus />
          </Button>
        </Card.Body>
      </Card>

      
      <Modal show={showModal} //show eza shoModal true btbyn form w onHide eza kbsna bara l forme ha t3ml close lal form, bl header closeButton ta nsaker l form
      onHide={handleClose} centered>
        <Modal.Header closeButton> 
          <Modal.Title>Create a New Plan</Modal.Title> 
        </Modal.Header>
        <Modal.Body>
          <FormComponent
            onActivityCreated={() => { //bass n3ml create lal data l htynhn bl form
              setRefreshTrigger((prev) => !prev);//3mal refresh w zida lhalak bl card tabaa carousel
              handleClose();//sakerle l form
            }}
          />
        </Modal.Body>
      </Modal>

      
    </>
  );
}

export default CreateNew;
