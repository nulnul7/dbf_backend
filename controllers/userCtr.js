import User from '../models/UserModel.js'


export const getUsers = async (req, res, next) => {

    try {
        const getUsers = await User.find()
        res.status(200).json(getUsers)

    } catch (err) {
        next(err)
    }
}

export const getUser = async (req, res, next) => {

    try {
        const getUser = await User.findById(req.params.id)
        res.status(200).json(getUser)

    } catch (err) {
        next(err)
    }
}

// createUser => register

export const deleteUser = async (req, res, next) => {
    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json('User has been deleted');
    } catch (err) {
        next(err)
    }
}

export const updateUser = async (req, res, next) => {
    const id = req.params.id
    try {
        await User.findByIdAndUpdate(id, { $set: req.body }, { new: true })
        res.status(200).json('User has been updated');
    } catch (err) {
        next(err)
    }
}