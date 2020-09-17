require('dotenv').config();

const express=require('express');
const path = require('path');
const mongoose=require('mongoose');
const app=express();
const bodyParser=require('body-parser');
const cookieParser=require('cookie-parser');
const cors=require('cors');
//app.use(express.static(path.join(__dirname, '../frontend/build')));


const userIssuesRoutes=require("./routes/userIssues");


mongoose.connect(process.env.DATABASE,{
    useNewUrlParser:true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() =>{
    console.log("DB is CONNECTED");
});

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

app.use("/api",userIssuesRoutes);


    app.use(express.static('frontend/build'));
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname+'/frontend/build/index.html'));
    });
const port=process.env.PORT || 8000;
app.listen(port,() =>{
    console.log(`Server is up and running at port no ${port}`);
});