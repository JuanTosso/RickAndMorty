import axios from "axios";
import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import style from './Detail.module.css'


const Detail = () => {

    const {id} = useParams()
    
    
    const [character,setCharacter] = useState({});
    
    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
           if (data.name) {
               setCharacter(data);
            } else {
                window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
    }, [id]);
    
    const { name, status, species,gender,origin, image} = character
    console.log(origin)
    return(
        <div className={style.contenedor}>
            
            
            <div className={style.izquierda}>   
                <h1>  {name && name}</h1>
                <h3> Status | {status && status}</h3>
                
                <h3> Especie | {species && species}</h3>
                <h3> Genero | {gender && gender}</h3>
                <h3> Origen | {origin?.name && origin?.name}</h3>
                 
            </div> 
            
           <div className={style.derecha}>   
                <img src={image && image} alt='' /> 
            </div> 
            
        </div>
                

        
    )
}

export default Detail