const { model , Schema } = require('../connection');

const mySchema = new Schema({
   
    firstName: {
        type: String,
        required: true
    },
lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    pickup: {
        type: String,
        required: true
    },
    Destination: {
        type: String,
        required: true
    },
    numberofPersons: {
        type: Number,
        required: true
    },
    luggage: {
        type: Number,
        required: true
    },
    dateofBooking: {
        type: Date,
        default: Date.now
    },
    timing: {
        type: Number
        
    }

});

model.exports = model('bookingmodel', mySchema);