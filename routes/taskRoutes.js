const express = require("express");
const router = express.Router();
const { Task } = require("./routes/taskRoutes");


router.get("/", (req, res) => {
    res.json({ message: "Tasks endpoint working!" });
});
    

module.exports = router;

