const userLog = require('../utils/users')

const login = (req,res) =>{
    const {email,password} = req.query
   

    const userFound = userLog.find(user =>user.email === email 
        && user.password === password)

    if(userFound) return res.status(200).json({access: true})
    
    return res.status(200).json({access: false})
        

}

module.exports = login