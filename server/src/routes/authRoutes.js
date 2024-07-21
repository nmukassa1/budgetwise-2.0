import express from 'express';
import { register, login, logout } from '../controllers/authController.js';
import validateLoginMiddleware from '../middlewares/validateLoginMiddleware.js'


const router = express.Router();

router.post('/register', validateLoginMiddleware, register);
router.post('/login', validateLoginMiddleware, login);
router.post('/logout', logout);

// This route checks if the user is authenticated
router.get('/auth/check', (req, res) => {
    if (req.isAuthenticated()) {
        res.json({ authenticated: true, user: req.user });
    } else {
        res.json({ authenticated: false });
    }
});




export default router;
