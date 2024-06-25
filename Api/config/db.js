const mongoose = require('mongoose');
const env=require('dotenv')
env.config()

const connectWithDB = async() => {
  try
    {
        await mongoose.connect(process.env.DB_URL);

        const connection = mongoose.connection;
        connection.on('connected',()=>
        {
            console.log('MongoDB connection is established');
        })

        connection.on('error',(error)=>
        {
            console.log('Error in mongoDB', error);
        })
    }
    catch(error){
         console.log('Something went wrong', error)
    }
    
};

module.exports = connectWithDB;