const  {model, Schema} = require('../connection');

const mySchema = new Schema({
    name:{ type :String, required : true},
    email:String,
    password : { type :String, required : true},
    avatar: String
})
module.exports= model('users',mySchema);