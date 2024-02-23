import mongoose from "mongoose";
import bcrypt from 'bcrypt'

const userSchema = mongoose.Schema({
    username: {
        type: String,
        require: [true, 'Harap input nama'],
        unique: true,
    },
    password: {
        type: String,
        require: [true, 'Harap isi password']
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    refreshToken: {
        type: String,
        unique: false,
        default: '',
        require: false,
    },
})

userSchema.pre('save', async function (next) {  //harus pakai function tidak bisa arrow
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next()
});

// userSchema.index({ username: 1 }, { unique: true });

const userModel = mongoose.model('user', userSchema)
export default userModel