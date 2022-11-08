import {createError} from './error.js'
import jwt from 'jsonwebtoken'

const verifyToken = (req, res, next) => {
    const token = req.cookies.token
    if (!token) {
        console.log("ini isi tokennya", token);
        return next(createError(401, 'Siapa Kamu !'))
    }
    jwt.verify(token, process.env.SECRETKEY, (err, user) => {
        console.log("ini isi tokennya", token);
        if (err) return next(createError(403, "invalid token"))
        req.user = user
        next()
    })
}

export const verifyUser = (req, res, next) => {
    verifyToken(req, res, next, () => {
        if (req.user.id === req.params.id || req.user.isAdmin) {
            next()
        } else {
            return next(createError(403, 'You are not authorized!'))

        }
    });
}

export const verifyAdmin = (req, res, next) => {
    verifyToken(req, res, next, () => {
        if (req.user.isAdmin) {
            next()
        }
        else {
            return next(createError(403, 'You are not Admin!'))
        }
    })
}

//darimana req.user.id dan req.user.isAdmin ???
// dari authRoute ->     const token = jwt.sign({ id: user._id, admin: user.isAdmin }, process.env.SECRETKEY)
// dari verifyTOken ->      req.user = user

