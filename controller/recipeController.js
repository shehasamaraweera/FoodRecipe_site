const Recipe = require("../models/recipe");

const getRecipes = (req, res) => {
  res.json({ message: "Hello World" });
}

const getRecipe = (req, res) => {
  res.json({ message: "Hello World" });
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

const updateRecipe = (req, res) => {
  res.json({ message: "Hello World" });
};

const deleteRecipe = (req, res) => {
  res.json({ message: "Hello World" });
};

module.exports = { getRecipes, getRecipe, addRecipe, updateRecipe, deleteRecipe };