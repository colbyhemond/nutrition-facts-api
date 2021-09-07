class Nutrition {
    static contentString = ''
    constructor() {
        const tesseract = require('tesseract.js')
        // console.log(tesseract.createWorker())
        this.worker = tesseract.createWorker()
        
    }

    get content() {
        return this.contentString
    }

    set content(content){
        this.contentString = content
    }

    async perform(imgUrl) {
        console.log('start perform');
        await this.worker.load();
        await this.worker.loadLanguage('eng');
        await this.worker.initialize('eng');
        const { data: { text } } = await this.worker.recognize(imgUrl);
        console.log(text);
        this.content = text
        await this.worker.terminate();
        console.log('return response from perform');
        if (text) {
            return text
        } else {
            return null
        }
        
    }
}

module.exports = Nutrition