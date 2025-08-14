const Razorpay = require('razorpay');
require('dotenv').config();
const Payment = require('../models/Payment');

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET
});

// Create order
exports.createOrder = async (req, res) => {
    try {
        const { amount } = req.body;
        const options = {
            amount: amount * 100, // amount in paise
            currency: "INR",
            receipt: `receipt_order_${Date.now()}`
        };
        const order = await razorpay.orders.create(options);
        res.status(200).json({ orderId: order.id, amount: order.amount, currency: order.currency });
    } catch (error) {
        console.error("❌ Error in createOrder:", error);
        res.status(500).json({ error: "order creation failed" });
    }
};

// Save payment
exports.savePayment = async (req, res) => {
    try {
        const { orderId, paymentId, amount, currency, status } = req.body;

        const payment = new Payment({ orderId, paymentId, amount, currency, status });

        await payment.save();
        res.json({ success: true, payment });
    } catch (error) {
        res.status(500).json({ error: 'Payment save failed' });
    }
    try {
        const { orderId, paymentId, amount, currency, status } = req.body;

        const payment = new Payment({ orderId, paymentId, amount, currency, status });

        await payment.save();
        res.json({ success: true, payment });
    } catch (error) {
        res.status(500).json({ error: 'Payment save failed' });
    }
};

