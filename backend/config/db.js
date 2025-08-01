const mongoose = require('mongoose')
require('dotenv').config()

const getConnection = async () => {
      try{
            await mongoose.connect(process.env.MONGO_URI)
            console.log('Connected mongoDB')
      }catch(error){
            console.log('Connection fail', error)
      }
     
}

module.exports = getConnection