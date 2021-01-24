const express = require("express");
const router = express.Router();
const { db } = require("../mockDb/mockUserDb");

router.route("/signin").post((req, res) => {
  console.log("ping received");
  console.log(req.body);
  if (req.body.username === db.username && req.body.password === db.password) {
    res.json({ message: "logged in", user: db });
  } else {
    res.json({ message: "u don't exist", user: null });
  }
});

module.exports = router;
