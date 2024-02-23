import jwt from "jsonwebtoken";
import userModel from "../models/UserModel.js";

export const refreshToken = async (req, res, next) => {

    try {
        const refreshToken = req.cookies.refreshToken;
        console.log('isi tokens: ', refreshToken);
        if (!refreshToken) return res.sendStatus(401).json({ msg: 'tidak ada refresh token' })
        const user = await userModel.findOne({
            refreshToken: refreshToken
        })
        if (!user) return res.sendStatus(401).json({ msg: 'tidak ada user dgn token tsb' })
        jwt.verify(refreshToken, process.env.REFRESHKEY, (err, decoded) => {
            if (err) return res.sendStatus(403).json({ msg: "error verify token" })
        })
        const { _id } = user

        const aksesToken = jwt.sign({ _id }, process.env.SECRETKEY, {
            expiresIn: '25s'
        });

        res.json({ aksesToken })
    } catch (error) {
        console.log(error);
    }

}