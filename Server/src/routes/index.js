const getCharById = require('../controllers/getCharById')
const {postFav,deleteFav} = require('../controllers/handleFavorites')
const login = require('../controllers/login')
const express = require('express');
const router = express.Router();


router.get('/character/:id',(req,res)=>{
    getCharById(req,res)
})

//la mejor forma de enrutar es esta: (los parametros pasan igual)
router.get('/login', login)

router.post(('/fav'),postFav)

router.delete('/fav/:id', deleteFav)




module.exports = router