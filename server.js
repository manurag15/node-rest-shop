var express = require('express');
var app = express();
var productRoutes = require('./api/routes/product');
var morgan = require('morgan');



app.use('/products',productRoutes);

// app.use('/products',function(req,res){
//   res.send("Hello");
// });


// Error Handling
app.use(function(req,res,next){
  var error = new Error('Not found');
  error.status = 404;
  next(error);
});

app.use(function(error,req,res,next){
  res.status(error.status || 500);
  res.json({
    error:{
      message: error.message
    }
  });
});

app.listen(3000);
