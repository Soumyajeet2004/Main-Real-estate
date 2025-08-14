const express = require('express');
const router = express.Router();
const authController = require('../controller/authController');
const authMiddleware = require('../middleware/authM');
const User = require('../models/User');

router.get('/test-db', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/dashboard', authMiddleware, authController.dashboard);

module.exports = router ;