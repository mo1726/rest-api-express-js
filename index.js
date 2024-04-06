const experss = require("express");
const app=experss();
const port =3000;

app.use(express.json());
app.get("/",(req , res) => {
    console.log("get Request Successfull!");
    res.send("GET Req Successrfully initiated");
})

app.listen(port,()=>{
    console.log(`Server established at ${port}`);
})

