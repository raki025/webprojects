import express from "express";

const app = express();
const port = 3000;

const date = new Date();
const day = date.getDay();



app.get("/",(req,res)=>{
    res.render("index.ejs", {
        daytype:"day",
        quote :"somthing"
    })
    console.log(day);
})


app.listen(port,(req,res)=>{
    console.log(`server is running on port ${port}`)
});