let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let port = 3000;


/* INDEX ROUTE */
app.get('/',(req,res)=>{
  res.send('Index');
})

app.listen(port,()=>{
  console.log('server is running...');
})
