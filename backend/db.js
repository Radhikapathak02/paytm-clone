const mongoose= require('mongoose');

mongoose.connect(process.env.DATABASE_URL)



const userSchema= new mongoose.Schema({
    username: String,
    firstName: String,
    lastName:String,
    password: String,

})

const accountSchema= new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required: true
    },
    balance:{
        type: Number,
        required: true
    }
});

const Account= mongoose.model('Account', accountSchema);
const User= mongoose.model("User" , userSchema);
module.exports={
    User,
   Account
}