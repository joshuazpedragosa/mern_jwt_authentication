import express from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { userModel } from '../models/user_model';
import { hash } from '../utils/encrypt';

dotenv.config();
const router = express.Router();
const secret_key : string = process.env.SECRET_KEY || '';

//register account
router.post('/register', async(req, res)=>{
    try{
        const {first_name, last_name, email, password} = req.body;

        const emailExisted = await userModel.findOne({email});

        if(emailExisted){
            return res.status(400).json({msg : 'Email already exist!'});
        }

        const hashedPassword = await hash.bcryptHash(password);
        const user = new userModel({first_name, last_name, email, password : hashedPassword});
        await user.save();

        res.status(200).json({msg : 'Registered successfully!'});
    }catch(error){
        console.error('Error: ', error);
        res.status(500).json({msg : 'Registration failed!'});
    }
})

//login account
router.post('/login', async(req, res)=>{
    try{
        const {email, password} = req.body;

        const user = await userModel.findOne({email});

        if(!user){
            return res.status(400).json({msg : 'Email or password is incorrect!'})
        }

        const enc_password : string = user.password || '';
        const passwordMatched = await hash.checkPassword(password, enc_password);

        if(!passwordMatched){
            return res.status(400).json({msg : 'Email or password is incorrect!'})
        }

        const token = jwt.sign({userId: user._id}, secret_key, {expiresIn: '1h'})

        res.status(200).json({ token });
    }catch(error){
        console.error('Error: ', error);
        res.status(500).json({msg : 'Login failed!'});
    }
})

export const auth = router;