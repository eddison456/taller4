const express = require('express');
const router = express.Router();
const pool = require('./links')
router.get('/',(req,res)=>{
    res.send('helllo');
    console.log(pool);
});



module.exports = router;