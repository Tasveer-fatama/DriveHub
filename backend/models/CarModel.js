const  {model, Schema} = require('../connection');

const mySchema = new Schema({
    brand:String,
    model:String,
    plateNumber : String,
    image: String,
    rent: Number,
    
})
module.exports= model('cars',mySchema);