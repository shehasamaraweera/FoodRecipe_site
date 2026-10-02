const Recipe = require("../models/recipe");

const getRecipes = async(req, res) => {
  const recipes = await Recipe.find();
  return res.json(recipes);
};

const getRecipe = async (req, res) => {
  const recipe = await Recipe.findById(req.params.id);
  return res.json(recipe);
};

const addRecipe = async (req, res) => {
  const { title, ingredients, instructions, time } = req.body || {};

  if(!title || !ingredients || !instructions) 
  {
   return res.json({ message: "Please fill all the fields" });
  }

  const newRecipe = await Recipe.create({
    title,
    ingredients,
    instructions,
    time
  });
  return res.json(newRecipe);
};

const updateRecipe = async (req, res) => {
  const { title, ingredients, instructions, time } = req.body || {};
  let recipe =  await Recipe.findById(req.params.id);
  try{  if(!recipe) {
    await Recipe.findByIdAndUpdate(req.params.id, req.body,{new:true});
    res.json({title, ingredients, instructions, time });
  }
 }
 catch (err) {
    return res.status(404).json({ message: "Recipe not found" });
 }

};

const deleteRecipe = (req, res) => {
  res.json({ message: "Hello World" });
};

module.exports = { getRecipes, getRecipe, addRecipe, updateRecipe, deleteRecipe };