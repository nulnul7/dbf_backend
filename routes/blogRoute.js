import Blog from '../models/BlogModel.js';
import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    Blog.find()
    .then(blog => res.json(blog))
    .catch(err => {err.status(404).json('Terjadi ERROR :', err)})
})

router.get('/:id', (req, res) => {
    Blog.findById(req.params.id)
    .then(blog => res.json(blog))
    .catch(err => {err.status(404).json('Terjadi ERROR :', err)})
})

export default router;