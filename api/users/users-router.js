const router = require("express").Router();

const Users = require("./users-model.js");
const restricted = require("../auth/restricted-middleware.js");
const { isValid } = require("../users/users-service");
const bcryptjs = require("bcryptjs");

router.get("/", restricted, (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});
router.put("/:id", restricted, (req, res) => {
  const {id} = req.params
  const credentials = req.body;

  if (isValid(credentials)) {
    const rounds = process.env.BCRYPT_ROUNDS || 8;

    const hash = bcryptjs.hashSync(credentials.password, rounds);

    credentials.password = hash;

    Users.update(id, credentials)
    .then(user=>{
      if(user){
        res.status(200).json(user);
      } else{
        res.status(404).json({message:'user could not be found'})
      }
    })
    .catch(error=>{
      res.status(500).json({errorMessage: error.message})
    })
  } else {
    res.status(400).json({
      message: "please provide username and password",
    });
  }
});
router.get('/:id/plants', restricted, (req, res) => {
  
  const {id} = req.params
  Users.getUserPlant(id)
    .then(plant =>{
      // console.log(req.body)
      res.status(201).json(plant)
    })
    .catch(error=>{
      res.status(500).json({message:error.message})
    })
});

router.post('/:id/plants', restricted, (req, res) => {
  
  const newPlant = {...req.body, user_id:req.params.id}
  Users.insertUserPlant(newPlant)
    .then(plant =>{
      // console.log(req.body)
      res.status(201).json(plant)
    })
    .catch(error=>{
      res.status(500).json({message:'cannot save'})
    })
});


module.exports = router;
