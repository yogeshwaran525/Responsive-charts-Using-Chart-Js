const express = require('express');
const router = express.Router();

router.get("/",(req,res)=>{
    res.render('chart1');
})




// This pages.js file exports to express
module.exports = router;