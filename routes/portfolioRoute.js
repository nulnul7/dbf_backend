import express from 'express'
import { 
    getPortfolios, 
    getPortfolio, 
    createPortfolio, 
    deletePortfolio, 
    updatePortfolio } from '../controllers/portfolioCtr.js';
import { verifyAdmin } from '../utils/verifyToken.js';
const router = express.Router();


// Get all portfolios
router.get('/', getPortfolios)

// Get portfolio
router.get('/:id', getPortfolio)

// Add portfolio
// router.post('/add', verifyAdmin, createPortfolio)
router.post('/add', createPortfolio)


// Delete portfolio
// router.delete('/delete/:id',verifyAdmin, deletePortfolio )
router.delete('/delete/:id', deletePortfolio )


// Update portfolio
// router.put('/update/:id', verifyAdmin, updatePortfolio)
router.put('/update/:id', updatePortfolio)


export default router;