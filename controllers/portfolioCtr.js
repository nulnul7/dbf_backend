import Portfolios from '../models/PortfolioModel.js'


export const getPortfolios = async (req, res, next) => {
    try {
        const getPortfolios = await Portfolios.find()
        res.json(getPortfolios)
    } catch (error) {
        next(error)
    }
}

export const getPortfolio = async (req, res, next) => {

    try {
        const getPortfolio = await Portfolios.findById(req.params.id)
        res.json(getPortfolio)
    } catch (err) {
        next(err)
    }
}

export const createPortfolio = async (req, res, next) => {

    const newPortfolio = new Portfolios(req.body)

    try {
        const createPortfolio = await newPortfolio.save()
        res.status(200).json(createPortfolio);
    } catch (error) {
        next(error)
    }
}

export const deletePortfolio = async (req, res, next) => {

    try {
        await Portfolios.findByIdAndDelete(req.params.id)
        res.status(200).json('portfolio has been deleted')
    } catch (error) {
        next(error)
    }
}

export const updatePortfolio = async (req, res, next) => {

    try {
        await Portfolios.findByIdAndUpdate(req.params.id,
            { $set: req.body },
            { new: true })
        res.status(200).json('Portfolio has been Updated')
    } catch (error) {
        next(error)
    }
}