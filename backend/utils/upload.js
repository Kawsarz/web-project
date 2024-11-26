const multer = require('multer');//middleware, yaane wasit aashn y3ml gerer le telechargement tabaa image(hene files envoyer)
const path = require('path');//module mn node.js , il aide a construire et manipuler les path des folder et files creer , w by3mal creer lpath hasab eza b windows aw linux

//Upload b5aline n5od files aw image (hon image) mn client w b5ale server to save the image

// hyde l fct bt2elo kif w wen bdn y3mlo download l images l ha yaate hene client 
const storage = multer.diskStorage({//on a specifier l folder mahal ma ah e3ml download,cb:callback,hyde multer byntora la naate information
  destination: (req, file, cb) => {//on a specifier l folder mahal ma ah e3ml download,cb:callback,hyde multer byntora la naate information
    cb(null, 'public/images'); //cb bt2lna aamale save la hyde l image b file images lhatino b folder public , null:yaane kl shi mnih ma fi error
  },
  filename: (req, file, cb) => {//fct bt5aline same l file lbde e3malo save aatyto file taba3e w cb
    cb(null, Date.now() + '-' + file.originalname);//cb hon aam y2elo aamale save file b hyde tare2a eno b ha shakel, null:yaane kl shi mnih ma fi error
  },
});

// hyde l fct ha t3ml upload lal image
const upload = multer({ 
  storage: storage,//btredele l eshya l saret bl fct storage
  fileFilter: (req, file, cb) => {//hon ta n2dr na2e w n3ml filter la no3 files l bdna yeh y3mla upload bass 
    const ext = path.extname(file.originalname).toLowerCase();//hon aam 5ale y3male extraction lal extention du fichier ".png" mn 5elel extname, w aam elo toLowerCase() aamale yehon minuscule pour eviter les erreur
    if (ext !== '.jpg' && ext !== '.jpeg' && ext !== '.png') {//aam elo bass 2bal l files image l hene(png,jpg,jpeg)
      return cb(new Error('Only image files are allowed'), false);//eza fawatelo file 8alat mano img doc masaln ha y3te error w yaatine hl msg, w false pour regeter le file
    }
    cb(null, true);// hon yaane null ma sar fi error kelo tmm, true accept hyda l file 
  },
});

module.exports = upload; //aashn n5ale disponible w n2dr nst5dmo b 8eir files
