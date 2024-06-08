const express = require('express');
const router = express.Router();
const client = require('../database');


router.get('/',(req,res)=>{
    const Insert_qry = "INSERT INTO cars (brand,model,year) VALUES ('harsh','new',2020)";
    client.query(Insert_qry,(data)=>{
        res.send(data);
        console.log("data inserted");
    }) 

});
module.exports = router;