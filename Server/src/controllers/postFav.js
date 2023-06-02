const {Favorite} = require('../DB_connection')

const postFav = async (req,res)=>{
    try {
        const {id,name, image, species, gender} = req.body
        
              
        if(!id ||!name || !image || !species || !gender) return res.status(401).send('Faltan datos')
        
        const newFav = await Favorite.findOrCreate({where: {id,name, image, species, gender}})
        
        const allFavs = await Favorite.findAll()

        return res.status(200).json(allFavs)

    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = postFav