class NutritionParser {
    #stringToObject(str) {
        const strArr = str.split('\n')
        let finalObj = {}
        strArr.map((str) => {

            // str = str.toLowerCase()
            if (str.includes('Nutrition Facts')){
                // finalArr.push(str)
                finalObj["nutritionFacts"] = str
            }

            if (str.includes('Serving Size')){
                // finalArr.push(str)
                finalObj["servingSize"] = str
            }

            if (str.includes('Calories')){
                if (str.includes('from')){
                    //skip
                } else {
                    // finalArr.push(str)
                    finalObj["calories"] = str
                }
                
            }

            if (str.includes('Total Fat')){
                // finalArr.push(str)
                finalObj["totalFat"] = str
            }

            if (str.includes('Total Carbohydrate')){
                // finalArr.push(str)
                finalObj["totalCarbohydrate"] = str
            }

            if (str.includes('Protein')){
                // finalArr.push(str)
                finalObj["protein"] = str
            }

        })

        return finalObj
    }

    constructor(nutritionString) {
        console.log(nutritionString);
        this.nutritionContent = nutritionString
        this.nutritionObject = this.#stringToObject(this.nutritionContent)
    }

    getObject() {
        return this.nutritionObject
    }

    

}

module.exports = NutritionParser