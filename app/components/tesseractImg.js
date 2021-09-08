class tesseractImg {
    constructor() {
        const tesseract = require('tesseract.js')

        this.worker = tesseract.createWorker()
    }
}

module.exports = tesseractImg