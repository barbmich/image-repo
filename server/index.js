require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const app = express();
const PORT = process.env.PORT;
const upload = require("./routes/upload");
const auth = require("./routes/auth");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use("/upload", upload);
app.use("/auth", auth);

app.listen(PORT, () => console.log(`server listening on port ${PORT}`));
