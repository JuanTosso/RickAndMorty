import SearchBar from "../SearchBar/SearchBar";
import style from './NavBar.module.css';
import { NavLink } from "react-router-dom";
import { useLocation } from 'react-router-dom';



const NavBar = ({onSearch,logOut}) => {
    const Location = useLocation()
   

    if (Location.pathname === '/'){
        return null;
    } 
    
    return (

      
        <div className={style.nav}>

            <button className={style.botoncito}>
                <NavLink to='/home'>Home</NavLink>
            </button>
            
            <button className={style.botoncito}>
               <NavLink to='/about'>About</NavLink>
            </button>

            <button className={style.botoncito}>
                <NavLink to='/favorites'> Favorites</NavLink>   
            </button>

            {/* //Boton para agregar cards random.  */}
            <button className={style.rand}
                    onClick={() =>{onSearch(Math.ceil(Math.random()*826))}}           
            
            >Add<br/> Random</button>


            {/* //renderiza SearchBar y le pasa onSearch por parametro */}

            <SearchBar onSearch={onSearch}/>
            
            <button className={style.logOut} onClick={logOut}>LogOut</button>
            
        </div>
    )
}

export default NavBar