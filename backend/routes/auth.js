const express = require('express');
const router = express.Router();
const User = require('../models/user')
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: './uploads/',
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage: storage });
router.use("/uploads", (req, res, next) => {
  console.log("Requesting image:", req.url);
  next();
}, express.static(path.join(__dirname, "uploads")));


router.post("/upload",upload.single('file'), async (req, res) => {
    try {
      const { name, artist } = req.body;
      const filename = req.file.filename;
      if (!name || !artist) {
        return res.status(400).json({
          success: false,
          message: "Missing required fields: name, artist, file",
        });
      }
      const newUser = new User({ name, artist,filename });
      await newUser.save(); 
      console.log("uploaded :",newUser);
      res.status(200).json({ success: true, message: "upload song successfully." });
    } catch (error) {
      console.error("Error in message: ", error);
      res.status(500).json({ success: false, message: "upload failed" });
    }
  });
  
  module.exports = router;