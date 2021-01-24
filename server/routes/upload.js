const express = require("express");
const router = express.Router();
const multer = require("multer");
const storage = require("../config/multerStorage");

const multerUpload = multer({ storage });

router
  .route("/")
  .get((req, res) => {
    res.send("get @ /upload/");
  })
  .post(multerUpload.array("image"), (req, res) => {
    if (!req.files) {
      return res.send("No files received");
    } else {
      return res.send("files received");
    }
  });

module.exports = router;
