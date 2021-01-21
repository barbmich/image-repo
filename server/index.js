require("dotenv").config();
const express = require("express");
const multer = require("multer");
const morgan = require("morgan");
const path = require("path");
const app = express();
const fs = require("fs");
const PORT = process.env.PORT;

const storage = multer.diskStorage({
  destination: async (req, file, callback) => {
    callback(null, path.join(__dirname + "/repo"));
  },
  filename: (_req, file, callback) => {
    const folderPath = path.join(__dirname + "/repo");
    const fileExists = fs.existsSync(
      path.join(folderPath + "/" + file.originalname)
    );

    if (!fileExists) {
      return callback(null, file.originalname);
    }

    let i = 0;
    let newName;
    do {
      i += 1;
      newName = file.originalname + " " + `(${i})`;
    } while (fs.existsSync(path.join(folderPath + "/" + newName)));
    return callback(null, newName);
  },
});

const upload = multer({ storage });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.post("/", upload.array("file"), (req, res) => {
  if (!req.files) {
    console.log("No files received");
    return res.send("No files received");
  } else {
    console.log("files received");
    return res.send("files received");
  }
});

app.listen(PORT, () => console.log(`server listening on port ${PORT}`));
