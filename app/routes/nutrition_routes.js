const NutritionComponent = require('../components/nutrition')
const NutritionParser = require('../components/nutritionParser')

const Nutrition = new NutritionComponent();

module.exports = function(app, db) {
    app.post('/nutrition', (req, res) => { 
        let data = req.body
        const imgUrl = data.imgUrl
        console.log(data);
        if (imgUrl) {

            Nutrition.perform(imgUrl)

            res.sendStatus(200)
            return
        } else {
            res.sendStatus(400)
            return
        }
    })

    app.get('/nutrition', (req, res) => {
        if (Nutrition.content){
            const nutritionFacts = new NutritionParser(Nutrition.content)
            console.log(nutritionFacts.getObject());
            res.json(nutritionFacts.getObject())
            res.status(200)
        } else {
            res.sendStatus(404)
        }

    })
};