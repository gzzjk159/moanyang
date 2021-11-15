const express = require('express');
const app = express();
const port = 3306;
const mysql = require('mysql');
const router = Router();
const { Activity } = require('./models/index_models')

router.get('/', async (req, rep) => {
  try{
    const activity = await Activity.findAll({});
    return res.send(activity);
  }
  catch{}
});