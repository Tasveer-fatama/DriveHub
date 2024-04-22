const  {model, Schema} = require('../connection');

const mySchema = new Schema({
    brand:String,
    model:String,
    plateNumber : String,
    image: String,
    price: Number,
    seats: Number,
    type:String,
    year:Number,
    Ac: Boolean
})
module.exports= model('cars',mySchema);