const path = require('path')
const express = require("express");
const app = express();
console.log(path.join(__dirname,'../public/'))
// console.log(__dirname)
// console.log(__filename)

const publicDirectoryPath= path.join(__dirname,'../public/')

app.use(express.static(publicDirectoryPath))

app.set('view engine','hbs')


app.get('',(req,res)=>{
  res.render('index',{
    title:'Weather App',
    Name:'Harsh Mehta'
  })
})

app.get('/about',(req,res)=>{
  res.render('about',{
    Name:"Harsh Mehta",
    Created_By:"SoluteLabs"
  })
})
app.get('/help',(req,res)=>{
  res.render('help',{
    help_text:"This is helpfull text"
  })
})
// app.get("", (req, res) => {
//   res.send("Hello Expres");
// });

// app.get("/help", (req, res) => {
//   res.send("Help Page");
// });

// app.get("/about", (req, res) => {
//   res.send("About Page");
// });

app.get("/weather", (req, res) => {
  res.send({
    forecast:'It is snowing',
    location:'Philadelphia'
  })
});

app.listen(4545, () => {
  console.log("Server is on port 4545");
});
