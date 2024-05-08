const mongoose = require("mongoose");

const connectDatabase = function(){

    mongoose.connect(process.env.MONGO_URI).then(function(){
        console.log("Veri tabanı bağlantısı kuruldu");
    }).catch(function(err){console.log("Veri bağlantısı kurulamadı");});

}

module.exports=connectDatabase;