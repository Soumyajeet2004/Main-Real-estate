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
app.use(cors());
app.use(express.json());
app.use('/api/properties', propertyRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/payments', paymentRoutes);

const PORT = process.env.PORT || 6005;
app.get("/",(req,res)=>{
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