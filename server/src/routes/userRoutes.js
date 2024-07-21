import express from 'express';
import { ensureAuthenticated } from '../middlewares/authMiddleware.js';
import {getUserData} from '../models/userModel.js'
import db from '../db/index.js';

const router = express.Router();

router.post('/newItem/:id', async (req, res) => {
    const userID = req.params.id;
    const  {budgetName, budgetAmount, budgetType} = req.body
    const data = [budgetName, budgetAmount, userID] ;

    try{
        const result = await db.query(`INSERT INTO ${budgetType} (name, amount, user_id) values ($1, $2, $3) RETURNING name, amount`, data)
        res.json(result.rows[0])
    } catch(err){
        console.log(err);
        res.json({message: 'Error creating new item'})
    }
    // console.log(req.body);
})

router.get('/userData/', ensureAuthenticated, async (req, res) => {
    const userID = req.user.id
    try{
        const result = await getUserData(userID)
        res.json(result)
    }catch(err){
        console.log(err);
    }
})

// router.get('/userData/', async (req, res) => {
//    if(req.isAuthenticated()){
//     const userID = req.user.id
//     try{
//         const result = await getUserData(userID)
//         res.json(result)
//     }catch(err){
//         console.log(err);
//     }
//    }
// })

export default router;
