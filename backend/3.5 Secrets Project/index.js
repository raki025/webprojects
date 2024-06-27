import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url))

const app = express();
const port = 3500;

app.use(bodyParser.urlencoded({ extended: false }))



app.get("/",(req, res)=>{
    res.sendFile(__dirname + "/public/index.html");

});

app.post("/check", (req, res)=>{
    res.send(req.body.name)
})

function passwordfind(req, res, next){
    const passwordname = req.body["name"];
    console.log(passwordname);
    next();
}
app.use(passwordfind);

app.listen(port, ()=>{
    console.log(`server is running on port ${port}`)
});