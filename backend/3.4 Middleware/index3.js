import express from "express";

const app = express();
const port = 3000;


function logger(req,res,next) {
  console.log("request method:", req.method);
  console.log("request url:", req.url);
  next();
  
};

app.use(logger);

app.get("/", (req, res) => {
  res.sendFile("Hello");
});

app.post("/submit", (req,res)=>{
  console.log("hello working")
})

app.listen(port, () => {
  console.log(`server on port: ${port}`);
});
