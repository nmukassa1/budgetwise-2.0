import express from 'express';
import { ensureAuthenticated } from '../middlewares/authMiddleware.js';
import db from '../db/index.js'; // Assuming you might use the DB later

const router = express.Router();

router.get('/', ensureAuthenticated, async (req, res) => {
    try {
        // Check if user is authenticated
        const isAuthenticated = !!req.user;

        // Send the response as JSON
        res.json({ isAuthenticated });
    } catch (error) {
        // Handle any potential errors
        console.error('Error checking authentication:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

export default router;
