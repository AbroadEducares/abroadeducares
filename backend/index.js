const express = require('express');
const app=express();
const cors=require('cors');
const {dbconnect}=require('./config/database');

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
dbconnect();

const user = require('./routes/user');
app.use('/api/v1',user);

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})