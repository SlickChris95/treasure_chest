let express = require('express');
let app = express();
// let bodyParser = require('body-parser');
// let mongoose = require('mongoose');
let port = 3000;


/* APP CONFIG */
// mongoose.connect("mongodb://localhost/treasure_chest");
app.set('view engine','ejs')
// app.use(bodyParser.urlencoded({extended:true}));


app.get('/',(req,res)=>{
  res.render('dashboard');
});

/*
INDEX ROUTE
*/
app.get('/months',(req,res)=>{
  res.send('Months page');
});

app.get('/months/new',(req,res)=>{
  res.render('new');
});

app.listen(port,()=>{
  console.log('server is running...');
})
