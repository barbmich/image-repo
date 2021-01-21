require("dotenv").config();
const express = require("express");
const multer = require("multer");
const morgan = require("morgan");
const path = require("path");
const app = express();
const PORT = process.env.PORT;

const storage = multer.diskStorage({
  destination: (_req, _file, callback) => {
    callback(null, path.join(__dirname + "/repo"));
  },
  filename: (_req, file, callback) => {
    callback(null, file.originalname);
  },
});

const upload = multer({ storage });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
// app.use("/public", express.static("public"));

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/public/index.html");
// });

app.post("/", upload.single("file"), (req, res) => {
  if (!req.file) {
    console.log("No file received");
    return res.send("No file received");
  } else {
    console.log("file received");
    return res.send("file received");
  }
});

app.listen(PORT, () => console.log(`server listening on port ${PORT}`));
