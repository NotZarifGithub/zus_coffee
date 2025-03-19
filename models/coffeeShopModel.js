const pool = require('../db');

//Get all of the coffee shops
const getAllCoffeeShops = async () => {
  const [rows] = await pool.query("SELECT * FROM zus_coffee_shops");
  return rows;
}

//Get the targeted coffee shops
const getCoffeeShopById = async () => {
  const id = req.params.id;
  const [rows] = await pool.query("SELECT * FROM zus_coffee_shops WHERE id = ?", id);
  return rows.length > 0 ? rows[0] : null;
}

//Add new coffee shop
const addCoffeeShop = async (name, address, city, state, postal_code, latitude, longitude, phone_number, email) => {
  const [result] = pool.query(`
    INSERT INTO zus_coffee_shops (name, address, city, state, postal_code, latitude, longitude, phone_number, email)
    VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)`, [name, address, city, state, postal_code, latitude, longitude, phone_number, email]);
  return result.insertId;
}

//Update coffee shop
const updateCoffeeShop = async (id, name, address, city, state, postal_code, latitude, longitude, phone_number, email) => {
  const [result] = await pool.query(`
    UPDATE zus_coffee_shops SET name=?, address=?, city=?, state=?, postal_code=?, latitude=?, longitude=?, phone_number=?, email=? WHERE id=?`,
  [name, address, city, state, postal_code, latitude, longitude, phone_number, email, id]);
  return result.affectedRows > 0;
}

//Delete coffee shop
const deleteCoffeeShop = async (id) => {
  const [result] = await pool.query("DELETE FROM zus_coffee_shops WHERE id=?", id);
  return result.affectedRows > 0;
}

module.exports = { getAllCoffeeShops, getCoffeeShopById, addCoffeeShop, updateCoffeeShop, deleteCoffeeShop };