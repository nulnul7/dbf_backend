import { check, validationResult } from 'express-validator';
import fs from 'fs';
import jwt from 'jsonwebtoken';
import userModel from '../models/UserModel.js';

export const validationImages = (req, res, next) => {
    // calid req.body or req.file not get undefined
    if (typeof (req.file) === 'undefined' || typeof (req.body) === 'undefined') {
        // if error
        return res.status(400).json({
            errors: "Problem with sending data"
        })
    }


    // get image dan name

    console.log(req.file);
    const { category, title, slug, description } = req.body;
    let images = req.file.path

    // check type of image we will accept only png || jpg || jpeg
    if (!(req.file.mimetype).includes('jpeg') && !(req.file.mimetype).includes('jpg')
        && !(req.file.mimetype).includes('png')) {
        // first remove file
        fs.unlinkSync(images)
        return res.status(400).json({
            errors: "file not support"
        })
    }

    // check file size max file size 1mb
    if (req.file.size > 1024 * 1024) {
        // first remove file
        fs.unlinkSync(images)
        return res.status(400).json({
            errors: "Image too large"
        })
    }

    if (!category || !title || !slug || !description || !images) {
        return res.status(400).json({
            errors: "all fields are required"
        })
    }

    next()

}

export const userInputValidation = [
    check('username')
        .trim()
        .isLength({ min: 3, max: 20 })
        .withMessage('minimal 3 char, max 20 char')
        .custom(async (val) => {
            const isUserExist = await userModel.findOne({ username: val });
            if (isUserExist) throw new Error('username sudah ADA');
        })
    ,
    check('password')
        .trim()
        .isLength({ min: 5, max: 20 })
        .withMessage('password 5 sampai 20 char')
    ,
    check('confirmPassword')
        .trim()
        .not()
        .isEmpty()
        .custom((value, { req }) => {
            if (value !== req.body.password) {
                throw new Error('Password tidak match!')
            }
            return true
        })
];

export const userValidation = (req, res, next) => {
    if (!(validationResult(req).array().length)) return next(); //check ada error?? kalau tidak gaskeun! 
    const errorResult = validationResult(req).array()[0].msg;  // kalau error, ini statusnya
    res.status(500).json({ success: false, message: 'ini isi errornya : ', errorResult });
}

export const verifyToken = (req, res, next) => {
    if (!req.headers['authorization']) return res.status(400).json({ message: 'error token ga ada!' })
    const authHeader = req.headers['authorization'];
    const token = authHeader.split(' ')[1];
    console.log(token);
    if (token == null) return res.sendStatus(401)
    jwt.verify(token, process.env.SECRETKEY, (err, decoded) => {
        if (err) return res.sendStatus(403);
        console.log('isi decoded', decoded);
        req.username = decoded.username
        next()
    })
}