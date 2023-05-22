const app = require("./app");
require('./connection')()
app.listen(3000,()=>{
    console.log('I am running');
})

