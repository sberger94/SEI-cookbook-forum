const Recipe = require('../models/recipe');

// 'Home Page'
function index(req, res){
    console.log(req.user, '<--req.user');
    Recipe.find({}, function (err, recipes) {
        res.render('recipes/index', {recipes, title: 'Recipes Home'});
    });
};

function newRecipe(req, res){
    res.render('recipes/new', {title: 'Add Your Recipe!'})
}

function create(req, res){
    const recipe = new Recipe(req.body);
    recipe.save(function (err) {
        if (err) return res.redirect('/recipes/new');
        console.log(recipe);
        res.redirect(`/recipes/${recipe._id}`);
    })
}

module.exports = {
    index,
    new: newRecipe,
    create,
}