const fs = require('fs')

module.exports = (req, res, next) => {
    // calid req.body or req.file not get undefined
    if (typeof (req.file) === 'undefined' || typeof (req.body) === 'undefined') {
        // if error
        return res.status(400).json({
            errors: "Problem with sending data"
        })
    }


    // get image dan name

    console.log(req.file);
    const { category, title, slug, description } = req.body;
    let images = req.file.path

    // check type of image we will accept only png || jpg || jpeg
    if (!(req.file.mimetype).includes('jpeg') && !(req.file.mimetype).includes('jpg')
        && !(req.file.mimetype).includes('png')) {
        // first remove file
        fs.unlinkSync(images)
        return res.status(400).json({
            errors: "file not support"
        })
    }

    // check file size max file size 1mb
    if (req.file.size > 1024 * 1024) {
        // first remove file
        fs.unlinkSync(images)
        return res.status(400).json({
            errors: "Image too large"
        })
    }

    if (!category || !title || !slug || !description || !images) {
        return res.status(400).json({
            errors: "all fields are required"
        })
    }

    next()

}