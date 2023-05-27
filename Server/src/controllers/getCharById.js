const url = "https://rickandmortyapi.com/api/character";
const axios = require('axios');


const getCharById = async (req,res)=>{
    try {
        const {id} = req.params
        const {data} = await axios.get(`${url}/${id}`)

        const {name,gender,species, origin, image, status} = data
        
        if(!name) throw new Error(`ID: ${id} Not Found`)

        
            const objChar = {
                            id, 
                            name, 
                            gender,
                            species,
                            origin,
                            image,
                            status
            }
            return res.status(200).json(objChar)
        
    } catch (error) { 
        console.log(error.message)
        return error.message.includes('ID')
        ? res.status(404).send(error.message)
        : res.status(500).send(error.message) 
               
    }  
}


module.exports = getCharById


