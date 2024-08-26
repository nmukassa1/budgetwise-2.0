import db from '../db/index.js';
import bcrypt from 'bcrypt';
import { welcomeEmail } from '../email/sendEmail.js';
import supabase from '../config/supabase.js';

export const createUser = async (email, password, firstName, lastName) => {
    const hashedPassword = await bcrypt.hash(password, 10);

    try{
        const {data, error} = await supabase.from('users').insert({email: email, password: hashedPassword, first_name: firstName, last_name: lastName}).select()
        if(error){
            throw error
        }
        // console.log(data);
        await welcomeEmail(data[0].email, data[0].first_name)
    }catch(err){
        console.log(err);
    }

};

export const getUserByEmail = async (email) => {
    try{
        const {data, error} = await supabase.from('users').select('email, password, id').eq('email', email)
        if(data.length < 1){
            throw error
        } 
        return data[0];
    }catch(err){
        console.log(err);
    }

};

export const getUserById = async (id) => {
    try{
        const {data, error} = await supabase.from('users').eq('id', id)
        if(error){
            throw error
        }
        return data
    }catch(err){
        console.error(err)
    }

    // const res = await db.query('SELECT * FROM users WHERE id = $1 ORDER BY id ASC ', [id]);
    // return res.rows[0];
};

export const getUserData = async (id) => {
    const userID = id
    try{    
    // Fetch income data
    const income = await getUniqueData('income', userID)

    // Fetch expenses data
    const expenses = await getUniqueData('expenses', userID)

    // Fetch debt data
    const debt = await getUniqueData('debt', userID)

    // Fetch savings data
    const savings = await getUniqueData('savings', userID)

    const data = {
        income: income,
        expenses: expenses,
        debt: debt,
        savings: savings,
    }

    return data


    }catch(err){
        console.log(err);
    }
}

export const getTable = async (table) => {
    const {data, error} = await supabase.from(table).select()
    if(data){
        return data
    }else{
        console.log(error);
        return error
    }
}

const getUniqueData = async (table, id) => {
   try{
        const {data, error} = await supabase.from(table).select().eq('user_id', id).order('id', { ascending: true });
        // console.log(id);
        if(data){
            return data
        } else{
            throw error
        }
   }catch(err){
        console.log('Error:', err);
   }
}

