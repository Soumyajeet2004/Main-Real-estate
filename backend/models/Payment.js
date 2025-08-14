const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    orderId: String,
    paymentId: String,
    amount: Number,
    currency: String,
    status: String,

    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Payment', paymentSchema);
