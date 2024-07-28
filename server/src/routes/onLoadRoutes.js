import express from 'express';
import { ensureAuthenticated } from '../middlewares/authMiddleware.js';
import db from '../db/index.js';

const router = express.Router();

router.get( '/', ensureAuthenticated, async (req, res) => {
    if(req.user){
        res.send({isAuthenticated: true})
    }else{
        res.json({isAuthenticated: false})  
    }
})

export default router