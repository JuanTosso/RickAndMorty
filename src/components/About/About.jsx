import React from 'react';
import style from './About.module.css';



class About extends React.Component {
    constructor (props){
        super(props)
    }

    render(){
        return(
            <div className={style.contenedor}>
                <h1>Juan Ignacio Tosso</h1>
                <p>Mi nombre es Juan, antes de arrancar con Henry eh hecho muchas cosas. Fui contador pero lo deje. Luego estuve viajando por el mundo haciendo todo tipo de trabajos. Actualmente tengo franquicias de la chocolateria La Pinocha</p>
            </div>
        )

    }


}



export default About