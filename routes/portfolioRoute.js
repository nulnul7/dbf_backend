import express from 'express'
import {
    getPortfolios,
    getPortfolio,
    createPortfolio,
    deletePortfolio,
    updatePortfolio,
    countByCategory
} from '../controllers/portfolioCtr.js';
import { verifyAdmin } from '../utils/verifyToken.js';
import { verifyToken } from '../middlewares/validation.js';
const router = express.Router();


// Get all portfolios
router.get('/', getPortfolios)

// Get portfolio
router.get('/:id', getPortfolio)

// Get portfolio category
router.get('/find/countByCategory', countByCategory)

// Add portfolio
// router.post('/add', verifyAdmin, createPortfolio)
router.post('/add', verifyToken, createPortfolio)


// Delete portfolio
// router.delete('/delete/:id',verifyAdmin, deletePortfolio )
router.delete('/delete/:id', deletePortfolio)


// Update portfolio
// router.put('/update/:id', verifyAdmin, updatePortfolio)
router.put('/update/:id', updatePortfolio)


export default router;