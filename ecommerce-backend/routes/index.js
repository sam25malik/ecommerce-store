var express = require('express');
var router = express.Router();
const async = require('async');
const redis = require('redis');
const fs = require('fs');
let rawdata = fs.readFileSync('db/products.json');
let products = JSON.parse(rawdata);

const PORT = process.env.PORT || 5000;
const REDIS_PORT = process.env.REDIS_PORT  || 6379;

const client = redis.createClient(REDIS_PORT);


async function getProducts(req, res, next) {
     console.log('products',products);
     let search = req.query.search;
     let type = req.query.type;
     let list=products;
     if(type!='all'){
       list = list.filter(product =>product.type === type);
     }

     if(search){
       list = list.filter(product =>product.name === search);
     }

     res.json(list);
}

router.get('/products',getProducts);


module.exports = router;