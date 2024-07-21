import { body } from 'express-validator';

const validateUser = [
    body('email')
        .notEmpty().withMessage('Email is required.').bail()
        .isEmail().withMessage('Email is not valid.'),
    body('password')
        .notEmpty().withMessage('Password is required.').bail()
        .isLength({ min: 8 }).withMessage('Password must be at least 8 characters long.'),
    body('confirmPassword').custom((value, { req }) => {
        if (req.body.isRegister && !value) {
            throw new Error('Confirm Password is required.');
        }
        if (req.body.isRegister && value !== req.body.password) {
            throw new Error('Passwords do not match.');
        }
        return true;
    }),
    body('firstName')
        .if(body('isRegister').exists())
        .notEmpty().withMessage('Enter a first name').bail()
        .isLength({ min: 2 }).withMessage('Name is too short'),
    body('lastName')
        .if(body('isRegister').exists())
        .notEmpty().withMessage('Enter a last name').bail()
        .isLength({ min: 2 }).withMessage('Last name is too short')
];

export default validateUser;
