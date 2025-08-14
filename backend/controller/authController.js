const  User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async(req,res)=>{
    const {name,email,password} = req.body;
    try{
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }
        const hashedpassword = await bcrypt.hash(password, 10);
        const newUser = new User({name,email,password:hashedpassword});
        await newUser.save();
        const token = jwt.sign({ userid: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

         const { password: _, ...userData } = newUser.toObject();


         res.status(200).json({
            message: 'User Registered successfully',
            token,
            user: userData
        });
    }catch(err){
        console.error("❌ Registration Error:", err); 
        res.status(400).json({message:'Registration Failed', error: err.message});
    }
};

exports.login = async(req,res) =>{
    const {email, password} = req.body;
    try {
        const user = await User.findOne({ email });
        if(!user) return res.status(404).json({message: 'User not found'});
        const match = await bcrypt.compare(password,user.password);
        if(!match) return res.status(400).json({message: 'Invalid credentials'});
        const token =  jwt.sign({userid : user._id}, process.env.JWT_SECRET, {expiresIn: '1d'});
         
        const { password: _, ...userData } = user.toObject();

        res.json({
            token,
            user: userData
        });
    }catch(err){
        res.status(500).json({message: 'Login failed'});
    }
};

exports.dashboard = async (req,res) => {
    res.json({message : 'Welcome to the dashboard'});
}