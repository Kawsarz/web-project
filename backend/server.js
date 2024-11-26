// server.js
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const activitiesRoutes = require('./routes/activities');
const locationsRoutes=require ('./routes/locations');
const UserauthRoutes = require('./routes/Userauth');
const path = require('path');
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from 'public' folder

//Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/my-cv", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error(err));

//Define a simple route
app.get("/", (req, res) => {
  res.send("Hello from the server!");
});
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

//because frontend is running other than in backend port
const cors = require("cors");
app.use(cors());


//activities


// API Routes Activities
app.use('/api', activitiesRoutes);



// API Routes Location
app.use('/api', locationsRoutes);

//API User
app.use('/api', UserauthRoutes);



