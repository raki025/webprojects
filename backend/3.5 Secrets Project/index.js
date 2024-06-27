import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3500;

app.use(bodyParser.urlencoded({extended: true}));

var key = false;

function passcheck(req, res, next){
    var pass = req.body["password"];
    var name = req.body["name"];
    console.log(pass ,name);
    if (pass === "iknow"){
        key = true;
    }
    next();
}

app.use(passcheck);

app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/public/index.html")
});

app.post("/check",(req,res)=>{
    if(key){
        res.sendFile(__dirname + "/public/secret.html");
    }else {
        res.sendFile(__dirname + "/public/index.html");
    }
})

app.listen(port, ()=>{
    console.log(`server is running ${port}`)
})