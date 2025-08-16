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
    process.env.FRONTEND_URL || "https://main-real-estate-frontend.vercel.app",
    process.env.LOCAL_URL || "http://localhost:5173"
];

const corsOptions = {
    origin: function (origin, callback) {
        if (!origin) return callback(null, true);

<<<<<<< HEAD
        if (allowedOrigins.includes(origin) || /\.vercel\.app$/.test(origin)) {
=======
        const allowed = allowedOrigins.some(o => o && origin.startsWith(o)) || /\.vercel\.app$/.test(origin);

        if (allowed) {
>>>>>>> 20566151ce9c8f7ba620bf342fdd6cb1954e3bb2
            console.log(`✅ CORS allowed for origin: ${origin}`);
            callback(null, true);
        } else {
            console.log(`❌ CORS blocked for origin: ${origin}`);
            callback(new Error("Not allowed by CORS"));
        }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions)); // Safe now

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