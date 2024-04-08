import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const secret_key : string = process.env.SECRET_KEY || '';

export function verifyToken(req : Request, res : Response, next : NextFunction){
    
    const token = req.header('Authorization');

    if(!token) return res.status(400).json({msg : 'Access denied'});

    try{
        const decodedId = jwt.verify(token, secret_key);
        (req as any).userId = (decodedId as any).userId;
        next();
    }catch(error){
        console.error('Middleware error: ', error)
        res.status(500).json({msg : 'Invalid token'})
    }

}