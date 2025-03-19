const CoffeeShop = require("../models/coffeeShopModel");

//Get all coffee shops
const getAll = async(req, res) => {
  try {
    const shops = await CoffeeShop.getAllCoffeeShops();
    res.status(200).json(shops);
  } catch (error) {
    res.status(500).json({error: "Server error!"});
  }
}

//Get targeted coffee shop
const getOne = async (req, res) => {
  try {
    const id = req.params.id;
    const shop = await CoffeeShop.getCoffeeShopById(id);
    if (!shop)
      res.status(404).json({error: "Coffee shop not found!"});
    res.status(200).json(shop);
  } catch (error) {
    res.status(500).json({error: "Server error!"});
  }
}

//Add new coffee shop
const create = async (req, res) => {
  try {
    const { name, address, city, state, postal_code, latitude, longitude, phone_number, email } = req.body;
    if (!name || !address || !city || !state || !postal_code)
      res.status(400).json({error: "Missing required fields"});
    const newCoffeeShop = await CoffeeShop.addCoffeeShop(name, address, city, state, postal_code, latitude, longitude, phone_number, email);
    res.status(201).json(newCoffeeShop);
  } catch (error) {
    res.status(500).json({error: "Server error!"});
  }
}

//Update coffee shop
const update = async (req, res) => {
  try {
    const id = req.params.id;
    const { name, address, city, state, postal_code, latitude, longitude, phone_number, email } = req.body;
    const success = await CoffeeShop.updateCoffeeShop(id, name, address, city, state, postal_code, latitude, longitude, phone_number, email);
    if (!success)
      return res.status(404).json({error: "Coffee shop not found!"});
    res.status(200).json({message: "Coffee shop updated!"});
  } catch (error) {
    res.status(500).json({error: "Server error"});
  }
}

//Delete coffee shop
const remove = async (req, res) => {
  try {
    const id = req.params.id;
    const success = await CoffeeShop.deleteCoffeeShop(id);
    if (!success)
      res.status(400).json({error: "Coffee shop not found!"});
    res.status(200).json({message: "Coffee shop deleted!"});
  } catch (error) {
    res.status(500).json({error: "Server error!"});
  }
}

module.exports = { getAll, getOne, create, update, remove };