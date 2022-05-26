const router = require("express").Router();
const mongoose = require("mongoose");
const Works = require("../models/Work.model");

router.get("/feed", (req, res, next) => {
  Works.find()
  .populate("artist")
  .then(foundWorks => {

    res.json(foundWorks);
  })
    .catch(console.log)
  });

  module.exports = router;
