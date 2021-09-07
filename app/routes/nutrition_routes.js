const Nutrition = require('../controllers/nutrition.controller')

const nutObj = new Nutrition();

module.exports = function(app, db) {
    app.post('/nutrition', (req, res) => {   
        const imgUrl = req.body.imgUrl
        console.log(req.body);
        if (imgUrl) {
            nutObj.perform(imgUrl)
        } else {
            res.sendStatus(400)
        }
        res.sendStatus(200)
    })

    app.get('/nutrition', (req, res) => {
        const text = nutObj.content
        console.log(text);
        if (text){
            res.json({content: text})
            res.sendStatus(200)
        } else {
            res.sendStatus(404)
        }

    })
};