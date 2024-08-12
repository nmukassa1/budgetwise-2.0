export const ensureAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        // console.log('Auth: ', req);
        return next();
    }
    res.status(401).json({ message: 'User not authenticated' });
};


