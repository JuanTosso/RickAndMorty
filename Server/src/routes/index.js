const express = require('express');
const router = express.Router();
const getCharById = require('../controllers/getCharById')
const login = require('../controllers/login')
const deleteFav = require('../controllers/deleteFav')
const postFav = require('../controllers/postFav')
const postUser = require('../controllers/postUser')

router.get('/character/:id',(req,res)=>{
    getCharById(req,res)
})

//la mejor forma de enrutar es esta: (los parametros pasan igual)
router.get('/login', login)

router.post(('/fav'),postFav)

router.delete('/fav/:id', deleteFav)

router.post(('/login'), postUser)




module.exports = router