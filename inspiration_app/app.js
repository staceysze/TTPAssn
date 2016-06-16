//order is important

var express = require('express');
var exphbs = require('express-handlebars');
var bodyp = require('body-parser');
var app = express();
var randomQuote = ["Insert an inpiration quote here","Inspiration Quotes are very inspiring", "Let the quotes inspire you"];

app.use(express.static('external_files'));
app.use(bodyp.urlencoded({extended:true}));
app.engine('handlebars',exphbs({defaultLayout:'main'}));
app.set('view engine', 'handlebars');
app.get("/",function(req,res) {
  res.render('home');
});
//TWO CURLY BRACKETS
//THREE BRACKETS IS TO EXCAPE HTML
app.get('/login',function(req,res) {
  var username=req.query.username;
  var password=req.query.password;
  console.log(req.query.username);
  console.log(req.query.password);
  res.render('home',{username:username});
});
app.post('/', function(req,res) {
  console.log("Hello this is a post request");
  console.log("username: "+req.body.username);
  res.render('home');
});

app.post('/login', function(req,res) {
  console.log("Hello this is a post request!");
  res.render('home');
})

app.get("/about", function(req, res){
  res.render('about');
});

app.get("/inspiration",function(req, res) {
  res.render('inspiration');
});

app.listen(3000,function() {
  console.log('Inspiration app listening on port 3000');
});
