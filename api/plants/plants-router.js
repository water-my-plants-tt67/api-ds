const router = require("express").Router();
const Plants = require("./plants-model.js");
const restricted = require("../auth/restricted-middleware.js");


router.get('/', restricted, (req, res) => {
  
  Plants.getAllPlants()
    .then(plants =>{
      res.status(200).json(plants)
    })
    .catch(error=>{
      res.status(500).json({message: error.message})
    })
});
router.put('/:id', restricted, (req, res) => {
  const {id} = req.params;
  const changes = req.body;

  Plants.updatePlant(id, changes)
    .then(plant =>{
      res.status(200).json(plant)
    })
    .catch(error=>{
      res.status(500).json({message:error.message})
    })
});
router.delete('/:id', restricted, (req, res) => {
  const {id} = req.params;

  Plants.removePlant(id)
    .then(plant =>{
      res.status(200).json({ message: `plant with id ${id} has been removed` })
    })
    .catch(error=>{
      res.status(500).json({message:error.message})
    })
});

module.exports = router;
