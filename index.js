const express = require("express");
const app = express();
const db = require("./database");
app.set("views",__dirname+"/view");
app.set("view engine","ejs");
app.use(express.urlencoded());
app.get("/",(req,res)=>{
    res.render("index");
})
app.post("/",(req,res)=>{
    var d= req.body;
  
    var sql = "insert into s (firstname,lastname, email,dob,gender,address_line_1,address_line_2,city,zipcode,country) values(?,?,?,?,?,?,?,?,?,?)";
    console.log(d);
    db.query(sql,[d.fname,d.lname,d.email,d.dob,d.gender,d.address1,d.address2,d.city,d.zipcode,d.country],(err,data)=>{
        if(err) throw err;
        else{
            console.log("Updated Successfully");
           
        }
    })
    res.redirect("/page");
    
})

app.get("/page",(req,res)=>{
    var sql = "select * from s";
    db.query(sql,(err,data)=>{
        if(err) throw err;
        res.render("info",{s:data});
    })
})
app.listen(5000);