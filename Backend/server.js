const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const dotenv = require('dotenv')
const colors = require('colors')
const path = require('path')
const connectDb = require('./config/ConnectDb')
//config dot env file
dotenv.config();

//database Call
connectDb();

//rest object
const app = express()
//middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use (cors())
///test 
//TEST ROUTE
app.get('/api/v1/test', (req, res) => {
  res.status(200).send("API working fine");
});


const userRoutes = require('./routes/userRoute');
app.use('/api/v1/user', userRoutes);
//transection routes
app.use('/api/v1/transections',require('./routes/transectionRoute'));


//static files
app.use(express.static(path.join(__dirname,'./client/build')));

app.get('*',function(req,res){
 res.sendFile(path.join(__dirname,'./client/build/index.html'))
});

//routes
//app.get('/',(req,res)=>{
//   res.send('<h1>Hello from server</h1>');
//});

//port
const PORT = process.env.PORT ||8080

//listen server 
app.listen(PORT,()=>{
    console.log(`Server Running on Port ${PORT}`)
})