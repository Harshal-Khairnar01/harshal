const dotenv=require('dotenv');
dotenv.config();

const express=require('express');
const app=express();
const {join}=require('path');
const port=process.env.PORT
const DATABASE_URL=process.env.DATABASE_URL
const web=require('./routes/web');
const connectDB = require('./db/connectdb');
const underConstruction = require('./middlewares/uc-middleware');

connectDB(DATABASE_URL);
app.use(express.urlencoded({extended:false}))

app.set('view engine','ejs');

app.use(express.static(join(process.cwd(),"public")));
// Load Routes 
app.use('/',web);


app.listen(port,()=>{
    console.log(`Server Listening at http://localhost:${port}`);
})