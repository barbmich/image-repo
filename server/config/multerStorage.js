const multer = require("multer");
const path = require("path");
const fs = require("fs");
const root = require("../utils/root");
const { createUniqueName } = require("../utils/splitName");

const storage = multer.diskStorage({
  destination: (req, _file, callback) => {
    // checks if repo folder exists: if it doesn't, creates it:
    const repoFolderPath = path.join(root + "/repo");
    if (!fs.existsSync(repoFolderPath)) {
      fs.mkdirSync(repoFolderPath);
    }
    // checks if user folder exists: if it doesn't, creates it:
    const username = req.body.user;
    const userFolderPath = path.join(repoFolderPath + "/" + username);
    if (!fs.existsSync(userFolderPath)) {
      fs.mkdirSync(userFolderPath);
    }
    // sets user folder where to save images:
    callback(null, userFolderPath);
  },
  filename: (req, file, callback) => {
    const username = req.body.user;
    const folderPath = path.join(root + "/repo");
    const fileExists = fs.existsSync(
      path.join(folderPath + "/" + username + "/" + file.originalname)
    );

    if (!fileExists) {
      return callback(null, file.originalname);
    }

    return callback(null, createUniqueName(username, file.originalname));
  },
});

module.exports = storage;
