const express=require('express');
const cors=require("cors");
const dotenv=require("dotenv");
const mongoose=require("mongoose")
const querRouter=require("./router/query")


const app=express();
app.use(express.json());
app.use(cors());

dotenv.config();


// MongoDB connect
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.log("❌ DB Error: ", err));

app.use("/api/v1",querRouter)
app.get("/",async(req,res)=>{
    res.send("hello Server is running ")
})

app.listen(process.env.PORT||6000,()=>{
    console.log(`Server is running on the port${process.env.PORT||6000}`)
})