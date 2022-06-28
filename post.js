var {Client} = require("pg");
const express = require("express")
const cors = require('cors');
const app = express()
app.use(cors());
var x = ""

const client = new Client({
    host: "47.254.229.61",
    user: "postgres",
    port: 5432,
    password: "joeDolan123!@#",
    database: "robotics"
})

client.connect();

client.query('SELECT xcoord,ycoord FROM junctions',(err, res)=>{
    if(!err){
        console.log(res.rows);
        x = res.rows
    }else{
        console.log(err.message);
    }
    client.end
})

app.get('/api', (req, res) => {
    res.send(x)
  });

app.listen(8000, () => {
    console.log('Example app listening on port 8000!')
  });