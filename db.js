require('dotenv').config();
const mysql = require('mysql2');

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
}).promise();

const getCoffeeShops = async () => {
  try {
    const [rows] = await pool.query(`
      SELECT * 
      FROM zus_coffee_shops
      `);
    console.log(rows);
    return rows;
  } catch (err) {
    console.error('Database error: ', err);
    return null;
  }
}

const getCoffeeShop = async (id) => {
  try {
    const [rows] = await pool.query(`
      SELECT *
      FROM zus_coffee_shops
      WHERE id = ?`, [id]);
    console.log(rows);
    return rows.length > 0 ? rows[0] : null;
  } catch (err) {
    console.error('Database error: ', err);
    return null;
  }
}

const addCoffeeShop = async (name, address, city, state, postal_code, latitude, longitude, phone_number, email) => {
  try {
    const [result] = await pool.query(`
      INSERT INTO zus_coffee_shops 
      (name, address, city, state, postal_code, latitude, longitude, phone_number, email)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`
      , [name, address, city, state, postal_code, latitude, longitude, phone_number, email]);
      return result.insertId;
  } catch (err) {
    console.error('Database error: ', err);
    return null;
  }
}

getCoffeeShops();

module.exports = {pool, getCoffeeShops, getCoffeeShop, addCoffeeShop};