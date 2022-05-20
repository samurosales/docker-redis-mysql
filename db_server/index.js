const express = require("express");
const app = express();
const port = 3000;
var mysql = require('mysql');

const cors = require('cors');
app.use(cors());




app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);



var con = mysql.createConnection({
  host: "db",
  user: "user",
  password: "password",
  database: "db"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Mysql Connected!");
});

app.get("/", (req, res) => {
  res.json({ message: "ok" });
});

app.post("/create-note", (req, res) => {
    

        var sql = `insert into notes (note, user, color) values ('${req.body.note}', '${req.body.user}','${req.body.color}');`;
        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log("1 record inserted");
        });
   


    res.status(200).json({'Got body:': req.body})
});


app.get("/get-notes", (req, res) => {
    

        var sql = `select * from notes;`;
        con.query(sql, function (err, result) {
            if (err) throw err;

            let list = result.map(val => {
                delete val.id
                val.source = `Mysql`
            })
            res.status(200).json(result)
        });
   

        res.status(400)
    
});



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});