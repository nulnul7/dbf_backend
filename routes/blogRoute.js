import Blog from '../models/BlogModel.js';
import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    Blog.find()
        .then(blog => res.json(blog))
        .catch(err => { err.status(404).json('Terjadi ERROR :', err) })
})

router.get('/:id', (req, res) => {
    Blog.findById(req.params.id)
        .then(blog => res.json(blog))
        .catch(err => { err.status(404).json('Terjadi ERROR :', err) })
})

router.post('/add', async (req, res, next) => {
    const blog = new Blog(req.body);
    try {
        const newBlog = await blog.save();
        res.status(200).json(newBlog)
    } catch (error) {
        next(error);
    }
})
router.delete('/del/:id', async (req, res, next) => {
    try {
        const getId = req.params.id
        await Blog.findByIdAndDelete(getId)
        res.status(200).json("Delete Blog Done !")
    } catch (error) {
        next(error)
    }
})
router.put('/update/:id', async (req, res, next) => {
    try {
        await Blog.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true })
        res.status(200).json('Blog Update Done...')
    } catch (error) {
        next(error)
    }
})

export default router;