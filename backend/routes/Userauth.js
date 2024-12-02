const express = require("express")
const BASE_URL = "http://localhost:3000";
const router = express.Router();//Objet de la librarie Express b5alina nhaded path
const User = require("../models/User")// base de donne l5tar3neha

const bcrypt = require("bcryptjs");


router.post("/login", (req, res) => {//path lhadadlo yeh lal route
    const {email, password} = req.body; // req.body contient les donnees envoyer par le client sous forme json,const{..} pour recuperer les champ mn hyda l file json
    User.findOne({email : email}) // fct pour find email b database, eza 3ml find lal email b alb database abl , eno deja creer 
    .then(user => {
        if (user) { //eza user mwjoud abl 
            
            bcrypt.compare(password, user.password, (err, isMatch) => {// pour comparais password eza sah, password l halaa htyne maa password l mwjoud data tabaa hl user l htyne kmn
                if (err) return res.status(500).json({ message: "Error comparing passwords" });//eza sar error bl comparaison renvoie ce msg

                if (isMatch) {// eza pass match    
                    res.json({ success: true, message: "Login successful" });//return hyda msg
                } else {
                    res.json({ success: false, message: "Incorrect password" });// eza no match ha yaate pass incorrect 
                }
            });
        } else {
            res.json({ success: false, message: "User not found" });//eza ma l2ena user bl database ha yb3at hyda msg 
        }
    })
    .catch(err => res.status(500).json({ success: false, message: "Server error" }));// eza sar error bl comparaison aw bl recherche tabaa user ha yaate hl mdg error 
});




router.post("/register", (req, res) => { //path lhadadlo yeh lal route
    const { name, email, password } = req.body; // req.body contient les donnees envaoyer par le client sous forme json,const{..} pour recuperer les champ mn hyda l file json
    
    // la n3ml Hash lal pass
    bcrypt.hash(password, 10, (err, hashedPassword) => { //password:l client bhoto, 10:salt(niveau de complexite), err si hash echoue and hasedPassword contient pass hashed
        if (err) return res.status(500).json({ message: "Error hashing password" }); //si il ya eu une error return se message 

        User.create({ name, email, password: hashedPassword }) // va ajouter aa mongodb, bade de donne nouveau utilisateur avec pass hasher
            .then(user => res.json(user)) //eza reussit byb3ato lal sous form json
            .catch(err => { //si il ya eu error de creation 
                console.error("Error during user creation:", err);  // afficher l'error in details 
                res.status(500).json({ success: false, message: "Registration failed", err }); //ha y3ml afficher hyda l  msg 
            });
    });
});




module.exports = router;