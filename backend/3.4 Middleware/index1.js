
//using body parser
//refer index4.js created with using won middleware
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit",(req, res)=> {
  // console.log(req.body.pet)
  const streetname = (req.body.street);
  const petname =(req.body.pet);
  res.send("<h1>your Band name is</h1>"`<h1>${streetname}${petname}</h1>`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
