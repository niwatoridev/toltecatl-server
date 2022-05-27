const router = require("express").Router();
const Work = require("../models/Work.model")
const User = require("../models/User.model");
const { json } = require("express");


router.post("/like", (req, res, next) => {

workid = req.body.workid
userid = req.body.userid

Work.findById(req.body.workid)
.then ( findedWork => {

    return Work.findByIdAndUpdate(findedWork, { likes: + 1})

})
})

router.post("/likent", (req, res, next) => {

workid = req.body.workid
userid = req.body.userid

Work.findById(req.body.workid)
.then ( findedWork => {

    return Work.findByIdAndUpdate(findedWork, { likes: - 1})

})
})
 module.exports = router;