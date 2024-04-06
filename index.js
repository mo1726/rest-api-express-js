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



app.listen(port,()=>{
    console.log(`Server established at ${port}`);
})

