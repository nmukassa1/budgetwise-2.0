import db from '../db/index.js';
import bcrypt from 'bcrypt';
import { sendEmail } from '../email/sendEmail.js';

export const createUser = async (email, password, firstName, lastName) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    const data = [email, hashedPassword, firstName, lastName]
    const res = await db.query('INSERT INTO users (email, password, first_name, last_name) VALUES ($1, $2, $3, $4) RETURNING *', data) ;
    if(res.rows[0]){
        const {email, first_name} = res.rows[0]
        sendEmail(
            email,
            `You're All Set Up ${first_name} 😁`,
            null,
            `<!DOCTYPE html>
                <html>
                <head>
                <meta charset="UTF-8">
                <title>Welcome to Budgetwise!</title>
                </head>
                <body>
                <p>Hello ${first_name},</p>
                <p>Thanks for registering.</p>
                <p>You're now all set up and ready to take back control with your finances.</p>
                <p>Happy Budgetting,</p>
                <p><strong>Budgetwise</strong></p>
                </body>
                </html>`,
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