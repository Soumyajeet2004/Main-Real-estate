const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const propertyRoutes = require('./routes/propertyRoutes');
const authRoutes = require('./routes/authRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const app = express();


connectDB();

const allowedOrigins = [
    process.env.FRONTEND_URL,
    process.env.LOCAL_URL // or whatever you use locally
];
const corsOptions = {
    origin: function (origin, callback) {
        if (!origin) return callback(null, true);

        const allowed = allowedOrigins.some(o => o && origin.startsWith(o)) || /\.vercel\.app$/.test(origin);

        if (allowed) {
            console.log(`✅ CORS allowed for origin: ${origin}`);
            callback(null, true);
        } else {
            console.log(`❌ CORS blocked for origin: ${origin}`);
            callback(new Error("Not allowed by CORS"));
        }
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
};

app.use(cors(corsOptions));
app.options(/.*/, cors(corsOptions)); // Safe now

app.use(express.json());
app.use('/api/properties', propertyRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/payments', paymentRoutes);

const PORT = process.env.PORT || 6005;
app.get("/", (req, res) => {
    return res.send("Backend is running");
})
/*app.listen(PORT, () => {
    console.log(` Server is running on http://localhost:${PORT}`);

});*/
if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
}
module.exports = app;