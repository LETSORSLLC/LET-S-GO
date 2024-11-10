const express = require('express');
const router = express.Router();
const Rating = require('../models/rating');

router.post('/ratings', async (req, res) => {
  try {
    const rating = new Rating(req.body);
    await rating.save();
    res.status(201).send(rating);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get('/ratings', async (req, res) => {
  try {
    const ratings = await Rating.find({});
    res.status(200).send(ratings);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
