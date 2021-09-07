const nutritionRoutes = require('./nutrition_routes');
const nutrition_routes = require('./nutrition_routes');

module.exports = function(app, db) {
    nutrition_routes(app, db);
    
}