import express from "express"
/* import dotenv from dotenv

dotenv.config(); */


const app= express();

app.get("/",(req,res)=>{
  res.send("Server is ready");
})

app.listen(5004,()=>{ console.log("server started at http://localhost:5004");
})

