const mysql = require("mysql");

const conn = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"password",
    database:"student_info"
})

conn.connect((err)=>{
    if(err) throw err;
else{
    console.log("DB Connected successfully");
}
})

module.exports = conn;