const express = require("express");
const fs = require("fs");
const path = require("path");

require("dotenv").config();
const router = express.Router();
const { Activity } = require('../models')


router.get("/", async (req, res) => {
  try{
    const activity = await Activity.findAll();
    console.log("activity");
    return res.json(activity);
  }
  catch{}
});

module.exports = router;