let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let methodOverride = require('method-override');
let port = 3000;
let url = "mongodb://localhost/treasure_chest"


/* APP CONFIG */
mongoose.connect(url);
app.use(express.static('public'));
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));

//so we can use PUT and Delete requests in our form
app.use(methodOverride("_method"));


/* MONGOOSE/MODEL CONFIG */
let monthSchema = new mongoose.Schema({
  date: String,
  income: Number,
  expenses: Number,
  notes: String

});

let Month = mongoose.model('Month',monthSchema);

// Month.create(
//   {
//     date: "2020-01-15",
//     income: '200',
//     expenses: '20',
//     notes: 'a good month'
//   },(err,month)=>{
//     if(err){
//       console.log(err)
//     }else {
//       console.log('New month');
//       console.log(month)
//     }
//   }
// )
//


app.get('/',(req,res)=>{
  res.render('dashboard');
});

/*
INDEX ROUTE
*/
app.get('/months',(req,res)=>{
  Month.find({},(err,months)=>{
    if(err){
      console.log(err)
    }else {
      res.render('index',{months: months})
    }
  })
});

/*
NEW ROUTE
*/

app.get('/months/new',(req,res)=>{
  res.render('new');
});

/*
CREATE ROUTE
*/
app.post('/months',(req,res)=>{
  Month.create(req.body.month,(err,newMonth)=>{
    if(err){
      res.render('new');
      console.log('something went wrong')
    }else {
      // res.redirect('/months');
      res.redirect('/months');
    }
  })
})

app.listen(port,()=>{
  console.log('server is running...');
})
