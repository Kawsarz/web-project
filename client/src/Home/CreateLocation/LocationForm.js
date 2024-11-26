import React, { useState } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import { useDropzone } from "react-dropzone";
import axios from "axios";

  
const LocationComponent = ({ onLocationCreated }) => { //quand on creer new plan 
  const [formData2, setFormData2] = useState({ //initialisation du formulaire
    title: "",
    description: "",
    location:"",
    stars:"",
    
  });

  const [error, setError] = useState(null); //eza sar fi error 

  const { getRootProps, getInputProps } = useDropzone({ //st5dmna dropzone la n3ml telecharger image b alba
    accept: "image/*", //n'accept que les ficier image
    onDrop: (acceptedFiles) => { //liste des image accepter
      setFormData2({ ...formData2, image: acceptedFiles[0] }); //ha yhoton b fromData.image
    },
  });

  const handleChange2 = (e) => {//bass nzid valeur tabaa data tb3na aal formule 
    const { name, value, type, checked } = e.target;
    setFormData2({
      ...formData2,
      [name]: type === "checkbox" ? checked : value,//eza valeur lmana nhot checkbox 

    });
    console.log("Updated formData2:", { ...formData2, [name]: value });
  };

  const handleSubmit2 = async (e) => {//hyde fct btsht8l mn baad ma n3ml soumit lal form
    e.preventDefault();

    const data = new FormData();
    data.append("title", formData2.title);
    data.append("description", formData2.description);
    data.append("location", formData2.location);
    data.append("stars", formData2.stars);
   

    if (formData2.image) {
      data.append("image", formData2.image);
    }

    try {//halaa ha n3ml post , mn3te url api w data l aabynhn w mana nzidn 
      const response=await axios.post("http://localhost:3000/api/locations", data, {
        headers: { "Content-Type": "multipart/form-data" },//aam n2elo eno donne fihn file aam nzido 
      });

      console.log("Locations saved:", response.data);//bl console yaane terminal ha y3ml afficher lal donner l aam nzidn 
      onLocationCreated();//ha tbaat notify eno plan est creer 
    } catch (error) {//eza ma mshe lhal w esar fi error baatle hk
      setError("Failed to create location. Please try again.");
      console.error("Error saving location:", error);
      console.log("petit data",data);
      console.log("formdata2",formData2);
    }
  };

  return (//notre component form
    <Container>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleSubmit2}>
        
        <Form.Group controlId="formTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter title"
            name="title"
            value={formData2.title}
            onChange={handleChange2}
            required
          />
        </Form.Group>

        <Form.Group controlId="formDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter description"
            name="description"
            value={formData2.description}
            onChange={handleChange2}
            required
          />
        </Form.Group>

        <Form.Group controlId="formLocation">
          <Form.Label>Location</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter Location"
            name="location"
            value={formData2.location}
            onChange={handleChange2}
            required
          />
        </Form.Group>
        <Form.Group controlId="formStars">
          <Form.Label>Stars</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter number of stars"
            name="stars"
            value={formData2.stars}
            onChange={handleChange2}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Upload Image</Form.Label>
          <div
            {...getRootProps()}
            style={{
              border: "2px dashed green",
              padding: "20px",
              cursor: "pointer",
            }}
          >
            <input {...getInputProps()} />
            <p>Drag & drop an image here, or click to select one</p>
          </div>
          {formData2.image && <p>{formData2.image.name}</p>}
        </Form.Group>

        <Button variant="success" type="submit">
          Save Location
        </Button>
      </Form>
    </Container>
  );
};

export default LocationComponent;

