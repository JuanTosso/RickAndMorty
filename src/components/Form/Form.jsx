import style from './Form.module.css';
import { useState } from 'react';
import validate from '../validation';
 


const Form = ({login}) =>{
   const [userData,setUserData] = useState({email : '', password: ''   })
//    console.log(userData)
   

    const [error,setError] = useState({})
    // console.log(error)

    const handleOnChange = (event) =>{

        setUserData({
            ...userData,
            [event.target.name] : event.target.value
        })

        setError(validate(
            {...userData,
            [event.target.name] : event.target.value}
            )

        )
       
        }

    const handleSubmit = (event) =>{
        event.preventDefault()
        login(userData)
    }

    
    return(
        
        <form className={style.formulario}
              onSubmit={handleSubmit}
        >
            <h1>Formulario</h1>

            <label htmlFor="">Email: </label>
            <input  name='email'
                    type="email" 
                    placeholder="email..." 
                    value={userData.email} 
                    onChange={handleOnChange} />

            {error.email && <p>{error.email} </p> }

            <br />
            <br />
            <label  htmlFor="" >Password: </label>
            <input  name='password' 
                    type="text" 
                    placeholder="password..." 
                    value={userData.password} 
                    onChange={handleOnChange} />

            {error.password && <p>{error.password} </p> }
            <br />
            <br />
            <button disabled={!userData.email||!userData.password || error.email || error.password} >Submit</button>
        </form>
        
    )
}

export default Form