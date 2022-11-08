const multer = require('multer')
const path = require('path')


// storage

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        console.log(file);
        cb(null, "images/")
    },
    filename: (req, file, cb) => {
        cb(null, 'portfolio' + '-' + Date.now() + path.extname(file.originalname));
    }
})

const fileFilter = (req, file, cb) => {
    //tempat validasi bisa disini
    // if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') 
        cb(null, true)
}

let upload = multer ({
    storage: storage,
    fileFilter: fileFilter
}) 

// export upload as single file, you can use multiple
module.exports = upload.single('images')
