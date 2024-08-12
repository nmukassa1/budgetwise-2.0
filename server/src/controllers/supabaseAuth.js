import { validationResult } from 'express-validator';
import supabase from "../config/supabase.js";

export const signUp = async (req, res) => {
    const { email, password, confirmPassword, firstName, lastName } = req.body;

    // Validate request data
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const errorObject = errors.array().reduce((acc, curr) => {
            acc[curr.path] = curr.msg;
            return acc;
        }, {});

        return res.status(400).json({ errors: errorObject });
    }

    try {
        const { user, session, error } = await supabase.auth.signUp({
            email: email,
            password: password,
        }, {
            data: {
                firstName: firstName,
                lastName: lastName,
            },
            emailRedirectTo: null,  // This disables the email confirmation
        });

        if (error) {
            throw new Error(error.message); // Correct error throwing
        }

        console.log('User signed up successfully:', user);
        return res.status(200).json({ user, session });

    } catch (err) {
        console.error('Sign-up error:', err.message);
        return res.status(500).json({ error: err.message });
    }
};
