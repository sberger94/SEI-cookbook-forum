const Recipe = require('../models/recipe');

function create(req, res){
    console.log('hit the review controller')
    Recipe.findById(req.params.id, function(err, recipe){
        console.log(req.body, '<--req.body from review create function')
        console.log(recipe, '<--recipe from review controller')
        req.body.user = req.user._id;
        req.body.userName = req.user.name;
        req.body.userAvatar = req.user.avatar;
        recipe.reviews.push(req.body);
        recipe.save(function(err){
            console.log(recipe);
            res.redirect(`/recipes/${recipe._id}`);
        });
    });
};

module.exports = {
    create,
};