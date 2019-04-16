const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/EmployeeDB", {useNewUrlParser: true}, (err) => {
    if(!err){ console.log("MongoDB OK")}
    else {console.log("Error MongoDB")}
})


require('./employee.model');