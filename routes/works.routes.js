const router = require("express").Router();
const Work = require("../models/Work.model")
const User = require("../models/User.model");



/* GET user works (portfolio) */
router.get("/:id", (req, res, next) => {
  const { id } = req.session.user
  
  User.findById(id)


  res.json();
});


/* GET add work page */
router.get("/add", (req, res, next) => {
  res.json();
});



/* POST add work page */
router.post("/works", (req, res, next) => {
console.log(req.body)
const artist = req.body.userid

Work.create({...req.body, artist})
.then(newWork => {
  return User.findByIdAndUpdate(artist, {$push: {works: newWork._id }})
})
.then(() => {
  res.json({})
})
.catch(err => console.log(err))
})



module.exports = router;
