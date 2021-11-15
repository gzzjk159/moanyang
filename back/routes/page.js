const express = require("express");
const fs = require("fs");
const path = require("path");

require("dotenv").config();
const router = express.Router();
const { Activity } = require('../models')


router.get("/",  (req, res) => {
  
    const activity =  Activity.findAll();
    console.log("activity");
    return res.json(activity);
 
});

module.exports = router;