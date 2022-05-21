const router = require("express").Router();
const Work = require("../models/Work.model")
const User = require("../models/User.model");



/* GET user works (portfolio) */
router.get("/", (req, res, next) => {
  const { _id } = req.session.user
  
  User.findById(_id)


  res.json("Works Page");
});


/* GET add work page */
router.get("/add", (req, res, next) => {
  res.json("Add Work Page");
});



/* POST add work page */
router.post("/works", (req, res, next) => {
const artist = req.session.user._id
Work.create({...req.body, artist})

.then(newWork => {
  return User.findByIdAndUpdate(artist, {$push: {works: newWork._id }})
})
.then(() => {
  res.redirect("/works")
})
.catch(err => console.log(err))
})



module.exports = router;
