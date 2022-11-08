import bcrypt from "bcrypt";
import User from '../models/UserModel.js';
import createError from 'http-errors';
import jwt from 'jsonwebtoken';

export const register = async (req, res, next) => {

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    req.body.password = hash          // transfer hash password tidak bekerja didalam destructring, jadi disini aja  

    const newUser = new User(req.body)

    try {
        const createUser = await newUser.save()
        res.status(200).json(createUser)
    } catch (error) {
        next(error)
    }
}

export const login = async (req, res, next) => {

    try {
        const user = await User.findOne({ name: req.body.name });
        if (!user) {
            return next(createError(401, "user not found!!!"))
        }
        const matchPsw = await bcrypt.compare(req.body.password, user.password);
        if (!matchPsw) {
            return next(createError(401, "wrong password!"))
        }

        const token = jwt.sign({ id: user._id, admin: user.isAdmin }, process.env.SECRETKEY)

        const { password, ...otherDetails } = user._doc
        res.cookie('token', token, { httpOnly: true }).status(200).json({details: {...otherDetails} });
    } catch (err) {
        next(err)
    }
}