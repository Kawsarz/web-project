// server.js
const express = require("express"); //we will use express.js for the backedn
const mongoose = require("mongoose"); //we will use mongoDB for the data base

const app = express(); //initialiser une application express pour l'utiliser 
const port = 3000; //we define the port we want the serveur to listen to the request 


//Importe  HTTP request
const bodyParser = require('body-parser'); //pour analyser les file .json 
const activitiesRoutes = require('./routes/activities');
const locationsRoutes=require ('./routes/locations');
const UserauthRoutes = require('./routes/Userauth');
const path = require('path'); //dans node.js pour manipuler les chemin folder/file


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



