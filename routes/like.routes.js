const router = require("express").Router();
const Work = require("../models/Work.model")
const User = require("../models/User.model");


router.post("/like", (req, res, next) => {
console.log(req.body)

// User.findByIdAndUpdate(r)




})

 module.exports = router;