const mongoose = require("mongoose");

const schema = mongoose.Schema;
const objectId = schema.ObjectId;
const bcrypt = require("bcrypt");
const userSchema = new schema({

    id: objectId,

    username:{type: String, required:[true,"username giriniz"]},

    email:{type:String,required:[true,"email giriniz"]},
    password:{type:String, required:[true,"password giriniz"]},

    date:{type:Date,default:Date.now()}

})

 userSchema.pre("save",async function(next){

    const user = this;

    if(!user.isModified)
    {
        next();
    }
    else{

       const hashedPassword = await bcrypt.hash(user.password,10);

       user.password=hashedPassword;
       next();
    }

});
const users = mongoose.model("Users",userSchema);

module.exports= users;
