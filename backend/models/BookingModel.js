const { model, Schema, Types } = require('../connection');

const mySchema = new Schema({
    user: { type : Types.ObjectId, ref: 'users' },
    car: { type : Types.ObjectId, ref: 'cars' },
    pickupLocation: {
        type: String,
        required: true
    },
    bookDate: {
        type: Date,
        default: Date.now
    },
    duration: {
        type: String
    },
    paymentDetails: {
        type: Object
    },
    destination: {
        type: String
    },
    intendId: {
        type: String,
        unique: true
    },
    paid: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    },

});

module.exports = model('bookingmodel', mySchema);