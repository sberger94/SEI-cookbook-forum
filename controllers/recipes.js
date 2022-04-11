const Recipe = require('../models/recipe');

// 'Home Page'
function index(req, res){
    console.log(req.user, '<--req.user');
    Recipe.find({}, function (err, recipes) {
        res.render('recipes/index', {recipes, title: 'Recipes Home'});
    });
};

module.exports = {
    index,
}