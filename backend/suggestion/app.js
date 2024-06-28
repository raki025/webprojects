import express from "express";
import { type } from "os";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app =express();
const port = 3000

const datedays = new Date("June 30, 2024 12:05:01");
const days = datedays.getDay();



var datp = "";
var qu2 = "";
if (days == 0 || days == 6){
    datp = " its weekend";
    qu2= "enjoy";
}else{
    datp = " its weekday";
    qu2= "go to work";
}


app.get("/", (req,res)=>{
    res.render("index.ejs",{
        daytype : datp,
        quote: qu2,
        dat1: datedays,

    });
})
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})