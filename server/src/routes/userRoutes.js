import express from 'express';
import { ensureAuthenticated } from '../middlewares/authMiddleware.js';
import {getUserData, getUserById} from '../models/userModel.js'
import db from '../db/index.js';

const router = express.Router();

router.put('/updateItem/:id', async (req, res) => {
    const userID = req.params.id
    const  {budgetName, budgetAmount, budgetType} = req.body
    const data = [budgetName, budgetAmount, userID] ;
    console.log(req.body);
    try{
        //DOES ITEM ALREADY EXIST?
        const userExist = await db.query(`SELECT * from ${budgetType}`)

        if(userExist.rows.length > 0){
            const result = await db.query(`UPDATE ${budgetType} SET name=$1, amount=$2 WHERE id=$3`, [budgetName, budgetAmount, userID])
            res.json(result)
        } 
    }catch(err){
        console.log(err);
    }
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

router.get('/userID', ensureAuthenticated, async (req, res) => {
    const userID = req.user.id
    res.json(userID)
})

router.post('/createNewItem', async (req, res) => {
    const {id, table} = req.body
    try{
        const result = await db.query(`INSERT INTO ${table} (user_id) values ($1) RETURNING id`, [id])
        const newItem = result.rows[0];
        res.json(newItem)
    }catch(err){
        console.log(err);
    }
})

router.delete('/deleteItem/:id', async (req, res) => {
    const userID = req.params.id;
    const table = req.query.table
    try{
        await db.query(`DELETE FROM ${table} where id=$1`, [userID])
        res.json({message: 'Item deleted succefully'})
    }catch(err){
        res.json({error: 'Error deleteing item'})
    }
})


export default router;
