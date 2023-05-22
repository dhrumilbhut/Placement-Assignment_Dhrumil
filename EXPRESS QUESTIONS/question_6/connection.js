const  mongoose  = require("mongoose");
const env_var=require('./utils/index')
async function connect(){
   try {
   await mongoose.connect(env_var.MONGOBD_URL,{},)
   console.log("CONNECTED TO DB SUCCESSFULLY");
   } catch (error) {
    throw new Error(error.message||"UNABLE TO CONNECT DB")
   }
}

module.exports=connect