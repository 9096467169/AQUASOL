import express from "express";
import {dirname} from "path";
import { fileURLToPath } from "url";


const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/AQUASOL/Login_Signup'));
// var userName="";

function checkpass(req,res,next){
   
    const Pass = req.body["password"];
    if (Pass === "darren123") {
        req.userIsAuthorised = true; 
      } else {
        req.userIsAuthorised = false; 
      }
    
    next();
  }
  app.use(checkpass);


//   function logger (req,res,next){
//     userName= req.body["username"];
//     next();
//   }
//   app.use(logger); 


 app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/AQUASOL/Login_Signup/login.html");
});


app.post("/check",(req,res)=>{
  if(req.userIsAuthorised){
    res.sendFile(__dirname + "/AQUASOL/index.html");
    app.use(express.static(__dirname + '/AQUASOL'));
    //  res.send(<h1> Hello </h1><h3>${userName}!</h3>);
}
else{
    res.sendFile(__dirname + "/AQUASOL/Login_Signup/login.html");
}
});

app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
});
