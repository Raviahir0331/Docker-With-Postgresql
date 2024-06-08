const express = require('express');
const router = express.Router();
const client = require('../database');




router.get('/',(req,res)=>{
    const select_qry = "SELECT * FROM cars";
    client.query(select_qry,(err,data)=>{
        res.send(data.rows);
    })
});
module.exports = router;