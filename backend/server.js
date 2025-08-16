const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const propertyRoutes = require('./routes/propertyRoutes');
const authRoutes = require('./routes/authRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const app = express();
dotenv.config();

connectDB();

const allowedOrigins = [
    "http://main-real-estate-frontend-mt9knmgv6.vercel.app",
    /\.vercel\.app$/,
    "http://localhost:5173" // or whatever you use locally
];
const corsOptions = {
    origin: function (origin, callback) {
        if (!origin) return callback(null, true); // allow server-to-server or curl
        if (
            allowedOrigins.includes(origin) ||
            (typeof origin === "string" && /\.vercel\.app$/.test(origin))
        ) {
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
    const PORT = process.env.PORT || 6005;
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
}
module.exports = app;