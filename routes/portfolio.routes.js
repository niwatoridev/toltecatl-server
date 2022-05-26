const router = require("express").Router();
const Work = require("../models/Work.model")
const User = require("../models/User.model");


router.get("/portfolio/:id", async (req, res, next) => {
    const { id } = req.params
  
    User.findById(id)
    .populate("works")
    .then((user) => {

        res.json(user.works)
      
    })
    
  });


  module.exports = router;
    
  
  
  // let userWorksArr = await Work.find()
    // .then(allWorks => {
    //     return allWorks.filter(newArr => {
    //      return newArr.artist._id === id 
    //  })   
     
     
    // })
    
    // res.json({userWorksArr})