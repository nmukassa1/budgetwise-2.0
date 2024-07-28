import db from '../db/index.js';
import bcrypt from 'bcrypt';
import { sendEmail } from '../email/sendEmail.js';

export const createUser = async (email, password, firstName, lastName) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    const data = [email, hashedPassword, firstName, lastName]
    const res = await db.query('INSERT INTO users (email, password, first_name, last_name) VALUES ($1, $2, $3, $4) RETURNING *', data) ;
    if(res.rows[0]){
        sendEmail(
            res.rows[0].email,
            `You're All Set Up ${res.rows[0].first_name} 😁`,
            'This is a test email',
            '<p>This is a test email</p>'
        );
    }
    // console.log(res.rows[0]);
};

export const getUserByEmail = async (email) => {
    const res = await db.query('SELECT * FROM users WHERE email = $1 ORDER BY id ASC ', [email]);
    return res.rows[0];
};

export const getUserById = async (id) => {
    const res = await db.query('SELECT * FROM users WHERE id = $1 ORDER BY id ASC ', [id]);
    return res.rows[0];
};

export const getUserData = async (id) => {
    const userID = id
    try{    
    // Fetch income data
    const incomeResult = await db.query('SELECT * FROM income WHERE user_id = $1 ORDER BY id ASC ', [userID]);
    const income = incomeResult.rows;

    // Fetch expenses data
    const expensesResult = await db.query('SELECT * FROM expenses WHERE user_id = $1 ORDER BY id ASC ', [userID]);
    const expenses = expensesResult.rows;

    // Fetch debt data
    const debtResult = await db.query('SELECT * FROM debt WHERE user_id = $1 ORDER BY id ASC ', [userID]);
    const debt = debtResult.rows;

    // Fetch savings data
    const savingsResult = await db.query('SELECT * FROM savings WHERE user_id = $1 ORDER BY id ASC ', [userID]);
    const savings = savingsResult.rows;

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