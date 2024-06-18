import express from "express";
const app = express();

const port = 3000;

app.get("/",(req, res) =>{
    res.send("<h1>hello</h1>");
});

app.post("/about", (req,res)=>{
    res.sendStatus(201);
});

app.put("/contact/raki",(req,res)=>{
    res.sendStatus(200);
});

app.patch("/contact/raki",(req,res)=>{
    res.sendStatus(200);
});

app.delete("/contact/raki",(req,res)=>{
    res.sendStatus(200);
});
 

app.listen(port, ()=>{
    console.log('server is running ${port}.')
});