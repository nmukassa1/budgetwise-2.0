import express from 'express';
import session from 'express-session';
import bodyParser from 'body-parser';
import config from './config/env.js';
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';
import onLoadRoutes from './routes/onLoadRoutes.js';
import corsMiddleware from './middlewares/corsMiddleware.js';
import passportMiddleware from './middlewares/passportMiddleware.js';
import './config/passport.js';

const app = express();

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(corsMiddleware);

const sessionExpiration = (days) => {
    return (1000 * 60 * 60 * 24 ) * days
}

app.use(session({
    secret: config.sessionKey,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: sessionExpiration(30) // 30 days
    }
}));
passportMiddleware(app);

app.use('/api', authRoutes);
app.use('/api', userRoutes);
app.use('/api', onLoadRoutes);

app.listen(config.port, () => {
    console.log('Server is running on port ' + config.port);
});
