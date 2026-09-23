const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.get("/", (req,res) => {
    res.send("Backend is working properly");
});

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Server is running a http://localhost:${PORT}`);
})