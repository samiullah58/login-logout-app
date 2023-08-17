const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/profile", authMiddleware, (req, res) => {
  console.log("Reached protected route");
  res.json({ message: "This is protected route", userId: req.userId });
});

module.exports = router;
