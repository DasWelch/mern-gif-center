const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const port = 4000;
const Routes = express.Router(); 

app.use(cors());
app.use(bodyParser.json());

Routes.route("/").get(function(req,res){

});
Routes.route("/:id").get(function(req,res){
    
});

Routes.route("/create").post(function(req, res){

    res.json({resp: "creation sucessful"})
});

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
