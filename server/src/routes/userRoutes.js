import express from 'express';
import { ensureAuthenticated } from '../middlewares/authMiddleware.js';
import {getUserData, getUserById} from '../models/userModel.js'
import db from '../db/index.js';
import supabase from '../config/supabase.js';

const router = express.Router();

router.put('/updateItem/:id', async (req, res) => {
    const item = req.params.id
    const  {budgetName, budgetAmount, budgetType} = req.body
    try{
        const {data, error} = await supabase.from(budgetType).update({name: budgetName, amount: budgetAmount}).eq('id', item).select()
        if(error){
            throw error
        } 
        // console.log(data);
        res.json(data)
    }catch(err){
        console.log(err);
    }
})
 
router.get('/userData/', ensureAuthenticated, async (req, res) => {
    const userID = req.user.id
    // console.log('UserRoute: ', userID);
    try{
        const result = await getUserData(userID)
        res.json(result)
    }catch(err){
        console.log(err);
    }
})

router.get('/userID', ensureAuthenticated, async (req, res) => {
    const userID = req.user
    res.json(userID)
})

router.post('/createNewItem', async (req, res) => {
    const {id, table} = req.body
    try{
        const {data, error} = await supabase.from(table).insert({user_id: id}).select()
        if(error) {
            throw error
        }

        if(data){
            console.log(data);
            res.json(data)
        }
    } catch(err){
        console.log(err);
    }
})

router.delete('/deleteItem/:id', async (req, res) => {
    const item = req.params.id;
    const table = req.query.table
    try{
        // await db.query(`DELETE FROM ${table} where id=$1`, [userID])
        const response = await supabase
        .from(table)
        .delete()
        .eq('id', item)

        if(response.status === 204){
            res.status(200).send({message: 'Item deleted succefully'})
        }else{
            throw new Error
        }
    }catch(err){
        res.json({error: 'Error deleteing item'})
    }
})


export default router;
