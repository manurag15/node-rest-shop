var express = require('express');
var app = express.Router();

app.get('/',function(req,res){
  res.status(200).json({
    message:"Handling the Get request"
  });
});

app.post('/',function(req,res){
  res.status(200).json({
    message:"Handling the post request"
  });
});

app.get('/:productId',function(req,res){
  var id = req.params.productId;
  if(id==='special'){
    res.status(200).json({
      message:"Handling request with given product id"
    });
  }
});

module.exports = app;
