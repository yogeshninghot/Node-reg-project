
const express = require("express");
const bodyParser = require("body-parser")
const ejs = require("ejs");

const app = express();
app.use(bodyParser.urlencoded({extended:true}))
app.set(("view engine"), 'ejs')
app.get("/",(req,resp)=>{
    resp.sendFile(__dirname+"/home.html")
    
})
app.post("/register",(req,resp)=>{
    // resp.send('<h1>Registration Succsefull</h1>')
    // console.log(req.body.name,req.body.email);
    resp.render("register",{name:req.body.name,email:req.body.email})
})

app.listen(3030,()=>{
    console.log("App is running on portal")
});



