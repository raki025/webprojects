import express from "express"

const port = 3500;
const app = express();

app.get("/", (req,res)=> {
    res.sendFile("C:\Users\rockr\Desktop\webprojects\contact_form\index.html");
});

app.listen(port, ()=>{
    console.log('server is running  '+ port );
});


