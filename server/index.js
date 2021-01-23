require("dotenv").config();
const express = require("express");
const multer = require("multer");
const morgan = require("morgan");
const path = require("path");
const app = express();
const fs = require("fs");
const PORT = process.env.PORT;
const { createUniqueName } = require("./utils/splitName");

const storage = multer.diskStorage({
  destination: async (req, _file, callback) => {
    const username = req.body.user;
    const folderPath = path.join(__dirname + "/repo" + "/" + username);
    const folderExists = fs.existsSync(folderPath);
    if (!folderExists) {
      fs.mkdirSync(folderPath);
    }
    callback(null, folderPath);
  },
  filename: (req, file, callback) => {
    const username = req.body.user;
    const folderPath = path.join(__dirname + "/repo");
    const fileExists = fs.existsSync(
      path.join(folderPath + "/" + username + "/" + file.originalname)
    );

    if (!fileExists) {
      return callback(null, file.originalname);
    }

    return callback(null, createUniqueName(username, file.originalname));
  },
});

const upload = multer({ storage });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.post("/upload", upload.array("image"), (req, res) => {
  if (!req.files) {
    console.log("No files received");
    return res.send("No files received");
  } else {
    console.log("files received");
    return res.send("files received");
  }
});

app.listen(PORT, () => console.log(`server listening on port ${PORT}`));
