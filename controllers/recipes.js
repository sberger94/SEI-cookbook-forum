const Recipe = require('../models/recipe');

// 'Home Page'
function index(req, res){
    // console.log(req.user, '<--req.user');
    Recipe.find({}, function (err, recipes) {
        res.render('recipes/index', {recipes, title: 'Recipes Home'});
    });
};

function newRecipe(req, res){
    res.render('recipes/new', {title: 'Add Your Recipe!'});
};

function create(req, res){
    const recipe = new Recipe(req.body);
    recipe.user = req.user._id;
    recipe.userName = req.user.name;
    recipe.userAvatar = req.user.avatar;
    recipe.save(function (err) {
        if (err) return res.redirect('/recipes/new');
        console.log(recipe);
        res.redirect(`/recipes/${recipe._id}`);
    });
};

function show(req, res){
    Recipe.findById(req.params.id, function(err, recipe){
        res.render('recipes/show', {title: recipe.title, recipe});
    });
};

function deleteRecipe(req, res){
    Recipe.findByIdAndDelete(req.params.id, function(err, recipe){
        if (err) return res.redirect('/recipes');
        res.redirect('/recipes');
    });
}

module.exports = {
    index,
    new: newRecipe,
    create,
    show,
    delete: deleteRecipe
};