import React, { useState } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import { useDropzone } from "react-dropzone";
import axios from "axios";

  
const FormComponent = ({ onActivityCreated }) => { //quand on creer new plan 
  const [formData, setFormData] = useState({ //initialisation du formulaire
    title: "",
    description: "",
    date: "",
    where: "",
    age: "",
    budget: "",
    participants: "",
    favorite: false,
    image: null,
  });

  const [error, setError] = useState(null); //eza sar fi error 

  const { getRootProps, getInputProps } = useDropzone({ //st5dmna dropzone la n3ml telecharger image b alba
    accept: "image/*", //n'accept que les ficier image
    onDrop: (acceptedFiles) => { //liste des image accepter
      setFormData({ ...formData, image: acceptedFiles[0] }); //ha yhoton b fromData.image
    },
  });

  const handleChange = (e) => {//bass nzid valeur tabaa data tb3na aal formule 
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,//eza valeur lmana nhot checkbox 
    });
  };

  const handleSubmit = async (e) => {//hyde fct btsht8l mn baad ma n3ml soumit lal form
    e.preventDefault();

    const data = new FormData();
    data.append("title", formData.title);
    data.append("description", formData.description);
    data.append("date", formData.date);
    data.append("where", formData.where);
    data.append("age", formData.age);
    data.append("budget", formData.budget);
    data.append("participants", formData.participants);

    if (formData.image) {
      data.append("image", formData.image);
    }

    try {//halaa ha n3ml post , mn3te url api w data l aabynhn w mana nzidn 
      const response=await axios.post("http://localhost:3000/api/activities", data, {
        headers: { "Content-Type": "multipart/form-data" },//aam n2elo eno donne fihn file aam nzido 
      });

      console.log("Activity saved:", response.data);//bl console yaane terminal ha y3ml afficher lal donner l aam nzidn 
      onActivityCreated();//ha tbaat notify eno plan est creer 
    } catch (error) {//eza ma mshe lhal w esar fi error baatle hk
      setError("Failed to create activity. Please try again.");
      console.error("Error saving activity:", error);
    }
  };

  return (//notre component form
    <Container>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleSubmit}>
        
        <Form.Group controlId="formTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter title"
            name="title"
            value={formData.title}
            onChange={handleChange}
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
            value={formData.description}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formDate">
          <Form.Label>Date</Form.Label>
          <Form.Control
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formWhere">
          <Form.Label>Where</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter location"
            name="where"
            value={formData.where}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formAge">
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formBudget">
          <Form.Label>Budget</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formParticipants">
          <Form.Label>Participants</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter participants"
            name="participants"
            value={formData.participants}
            onChange={handleChange}
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
          {formData.image && <p>{formData.image.name}</p>}
        </Form.Group>

        <Button variant="success" type="submit">
          Save Activity
        </Button>
      </Form>
    </Container>
  );
};

export default FormComponent;

