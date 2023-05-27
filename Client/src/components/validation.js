
const validate = (userData)=>{
    const errors = {};
    if(!/\S+@\S+\.\S+/.test(userData.email)  ) {
      errors.email = 'Email invalido'
        
    } 
    if(userData.email.length > 35){
        errors.email = 'Email demasiado largo'
    }
    
    if(!/^(?=.*\d).{6,10}$/.test(userData.password) ){
        errors.password = 'Password inválido bb'
        
    } 
    if(userData.password.length ===0){
        errors.password = 'Password es requerido'
    }
    
    return errors
           
}
export default validate


