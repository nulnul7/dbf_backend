import mongoose from 'mongoose';

const portfoliosSchema = new mongoose.Schema({
        category: {
            type: String,
            required:true,
        },
        title: {
            type: String,
            required: true
        },
        client: {
            type: String
        },
        photos: {
            type: [String],
            required: true
        },
        description: {
            type: String,
            required: true
        }    
}, {timestamps: true})

const portfolioModel = mongoose.model('Portfolio', portfoliosSchema);
export default portfolioModel;