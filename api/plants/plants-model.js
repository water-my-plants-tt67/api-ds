const db = require("../../database/connection.js");

module.exports = {
  
  
  getAllPlants,
  updatePlant,
  removePlant
};


function getAllPlants(){
  return db('plants')
}

function updatePlant(id, changes){
  return db('plants')
    .where({ id })
    .update(changes);
}

function removePlant(id){
  return db('plants')
    .where('id', id)
    .del();
}