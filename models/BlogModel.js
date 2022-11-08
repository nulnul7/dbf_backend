import mongoose  from 'mongoose';

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    glance: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    photos: {
        type: [String],
        required: true
    }
}, {timestamps: true})

const blogModel = mongoose.model('Blog', blogSchema)
export default blogModel;