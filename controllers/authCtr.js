import bcrypt from "bcrypt";
import User from '../models/UserModel.js';
import createError from 'http-errors';
import jwt from 'jsonwebtoken';
// import { handleErrors } from "../middlewares/handleErrors.js";

export const register = async (req, res, next) => {

    // const salt = bcrypt.genSaltSync(10);
    // const hash = bcrypt.hashSync(req.body.password, salt);
    // req.body.password = hash          // transfer hash password tidak bekerja didalam destructring, jadi disini aja  

    const newUser = new User(req.body)

    try {
        const createUser = await newUser.save()
        res.status(200).json(createUser)
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
}

export const login = async (req, res, next) => {

    try {
        const user = await User.findOne({ username: req.body.username });
        if (!user) {
            return res.status(400).json({ pesan: "user not found yes!!!" });
        }
        const matchPsw = await bcrypt.compare(req.body.password, user.password);
        if (!matchPsw) {
            return res.status(400).json({ pesan: "Wrong password cui !!" });
        }
        const { _id } = user._doc
        const aksesToken = jwt.sign({ _id }, process.env.SECRETKEY, { expiresIn: '15s' })
        const refreshToken = jwt.sign({ _id }, process.env.REFRESHKEY, { expiresIn: '1d' })

        // update refresh Token ke dalam DB
        await User.findOneAndUpdate(
            { username: req.body.username },
            { $set: { refreshToken: refreshToken } },
            { new: true }
        )

        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000
        }).json({ 'aksesToken': aksesToken }).status(200);
        // res.status(200).json(req.body);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

export const getAdminUser = async (req, res, next) => {
    try {
        const getUser = await User.find({}, {
            _id: 1, username: 1, isAdmin: 1
        });
        if (!getUser) return res.status(404).json({ message: 'user not found !' })
        return res.status(200).json(getUser)
    } catch (error) {
        console.log(error.message);
    }
}

export const logout = async (req, res, next) => {
    const refreshToken = req.cookies.refreshToken
    //cek isi token
    console.log('isi refresh token : ', refreshToken);
    if (!refreshToken) return res.status(204).json({ message: "ga ada refresh token" });
    try {
        await User.findOneAndUpdate(
            { refreshToken: refreshToken },
            { $set: { refreshToken: '' } },
            { new: true }
        )
        res.clearCookie('refreshToken');
        return res.sendStatus(200);
    } catch (error) {
        console.log(error);
    }
    next()

}