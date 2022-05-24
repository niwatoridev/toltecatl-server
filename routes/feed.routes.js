const router = require("express").Router();
const mongoose = require("mongoose");
const Works = require("../models/Work.model");

router.get("/feed", (req, res, next) => {
  Works.find(() => {
  console.log(foundWorks)
  })
  res.json();
  });

  module.exports = router;
