const experss = require("express");
const app=experss();
const port =3000;

app.use(express.json());

// get method
app.get("/",(req , res) => {
    console.log("get Request Successfull!");
    res.send("GET Req Successrfully initiated");
})

// put method
app.put("/put",(req , res) => {
    console.log("PUT REQUEST SUCCESSFUL");
    console.log(req.body);
    res.send("DATA UPdate Request Recieved");
})

// post 
app.post("/POST",(req , res) => {
    console.log("POST REQUEST SUCCESSFUL");
    console.log(req.body);
    res.send("DATA POST Request Recieved");
})

//delete
app.delete("/Delete",(req , res) => {
    console.log("Delete REQUEST SUCCESSFUL");
    console.log(req.body);
    res.send("DATA Delete Request Recieved");
})
app.listen(port,()=>{
    console.log(`Server established at ${port}`);
})

