import express from 'express';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
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

// Resolve __dirname and __filename in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '../../');

// Serve static files from the React app
app.use(express.static(join(rootDir, '/client/dist')));

// Body parsers for JSON and URL-encoded form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Apply CORS middleware
app.use(corsMiddleware);

// Session configuration
const sessionExpiration = (days) => (1000 * 60 * 60 * 24) * days;

app.use(session({
    secret: config.sessionKey,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: sessionExpiration(30) // 30 days
    }
}));

// Passport middleware
passportMiddleware(app);

// API routes
app.use('/api', authRoutes);
app.use('/api', userRoutes);
app.use('/api', onLoadRoutes);

// Catch-all route to serve React's index.html for non-API routes
app.get('*', (req, res) => {
    res.sendFile(join(__dirname, '../client/dist', 'index.html'));
});

app.listen(config.port, () => {
    console.log(`Server is running on port ${config.port}`);
});
