import express from "express";
import { type } from "os";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app =express();
const port = 3000

const datedays = new Date("June 25, 2024 11:11:00");
const days = datedays.getDay();

var datp = "weekday";
var qu2 = " go to work";

if (days == 0 || days == 6){
    datp = " its weekend";
    qu2= "enjoy";
}


app.get("/", (req,res)=>{
    res.render("index.ejs",{
        daytype : datp,
        quote: qu2

    });
})
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})