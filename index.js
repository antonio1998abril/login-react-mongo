const  express = require ('express')
const app= express();
const mongoose =require('mongoose')
const bodyParser=require ('body-parser');
const cookieParser = require('cookie-parser');
const config=require('./config/key')
const userRoutes=require('./routes/userRoute');
//DATA BASE////////
mongoose.connect(config.mongoURI,{
      useNewUrlParser:true,
      useUnifiedTopology: true 
    })
.then(response=>{
    console.log("MongoDB Succesfully")
}).catch(err=>{
    console.log("An error ocurred")
});
///////////////////

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cookieParser());


app.use('/users',userRoutes)




const PORT=process.env.PORT||(5000);

app.listen(PORT,()=>{
    console.log('Ejecutandose')
})
