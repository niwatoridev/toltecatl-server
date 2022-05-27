const router = require("express").Router();
const Work = require("../models/Work.model")
const User = require("../models/User.model");


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


// EDIT Work

router.put("/work/edit/:id", (req, res) => {
const { id } = req.params
Work.findByIdAndUpdate(id, req.body, {new: true})
.then(workActualizado => {
   res.json(workActualizado)
  }).catch(console.log)
})



//DELETE Work
router.delete("/work/delete/:id", (req, res) => {
  const { id } = req.params

  Work.findByIdAndDelete(id)
  .then(eliminado => {
    res.json(eliminado)
    
  }).catch(console.log)


})



module.exports = router;
