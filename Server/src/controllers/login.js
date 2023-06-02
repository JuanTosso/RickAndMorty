const {User} = require('../DB_connection')

const login = async (req,res) =>{
    try {
        const {email, password} = req.query

        if(!email || !password) return res.status(400).send('Faltan datos')

        const userFound = await User.findOne({where: {email}})

        if(!userFound) return res.status(404).send('Usuario no encontrado')

        if (userFound.password !== password)  return res.status(404).send('Contraseña incorrecta')

        return res.status(200).json({access: true})
        
    } catch (error) {

        return res.status(500).send(error.message)

    }
}

module.exports = login