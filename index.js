const express=require("express")
const{ PrismaClient }=require("@prisma/client")
const morgan = require("morgan");
const cors = require("cors");

const app= express();
const prisma = new PrismaClient();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://react-ecommerce-nu-rouge.vercel.app"
    ]
  })
);
app.use(express.json());
app.use(morgan("dev"));



// basic get method
app.get("/",(req,res)=>{
    res.send("api is working.....!!!")
});


// get all products 
app.get("/products",async(req,res)=>{
    try {
        const allproduct= await prisma.products.findMany();

        res.status(200).json({
            message:"all products fetch sucessfully....",
            data:allproduct
        })
        
    } catch (error) {
        console.log("ineternal error");
        res.status(500),json({
            message:"ineternal server error....",
            error:error.message
        }) 
    }
});


// get by id all products
app.get("/products/:id",async(req,res)=>{
    try {
        const {id}=req.params;

        const productbyid=await prisma.products.findUnique({
            where:{
                product_id:id
            }
        });
        res.status(200).json({message:"product fetch sucessfully...", data:productbyid})
        
    } catch (error) {
         console.log("ineternal  server error ...!!!!");
        res.status(500).json({
            message:"ineternal server error....",
            error:error.message
        }) 
        
    }
})


const PORT = process.env.PORT || 8000;
app.listen(PORT,()=>{
    console.log("api is working.....",PORT);
    
})
