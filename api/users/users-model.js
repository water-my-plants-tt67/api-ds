const db = require("../../database/connection.js");

module.exports = {
  add,
  find,
  findBy,
  findById,
  update,
  insertUserPlant,
  getUserPlant,
  
};

function find() {
  return db("users as u")
    .select('u.id', 'u.username', 'u.password')
}

function findBy(filter) {
  return db("users as u")
    .select("u.id", "u.username", "u.password", "u.phoneNumber")
    .where(filter);
}

async function add(user) {
  const [id] = await db("users").insert(user, "id");
  return findById(id);
}

function findById(id) {
  return db("users as u")
    .select("u.id", "u.username", "u.password", "u.phoneNumber")
    .where("u.id", id)
    .first();
}

function update(id, changes) {
  return db('users')
    .where({ id })
    .update(changes);
}

function insertUserPlant(user) {
  return db('plants')
    .insert(user)
    
}
function getUserPlant(id) {
  return db('plants as p')
    .where('p.user_id', id)
}

