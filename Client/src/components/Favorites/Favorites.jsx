import { connect } from "react-redux";
import Card from "../Card/Card";
import style from './Favorites.module.css';
import { orderCards, filterCards } from "../../Redux/actions";
import { useDispatch , useSelector} from "react-redux";
import { useState } from "react";


const Favorites = () =>{

    const [aux,setAux] = useState(false)

    const myFavorites = useSelector((state)=>state.myFavorites)
    const dispatch = useDispatch();

    const handleOrder = (e)=>{
        dispatch(orderCards(e.target.value))
        setAux(!aux)
    }

    const handleFilter = (e)=>{
        dispatch(filterCards(e.target.value))
    }

    return(
        <div className={style.contenedor }>
         <div className={style.selectores}>
            <select onChange={handleOrder}>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
            </select>
            <select onChange={handleFilter}>
                <option value="Todos">Todos</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknown</option>
            </select>
        </div>  
        <div className={style.favoritos}>
            {
            myFavorites?.map(({id,name,species,gender,image,onClose}) => {
               return (
               <Card 
                  key = {id}
                  id = {id} 
                  name = {name}
                  species = {species}
                  gender = {gender}
                  image = {image}
                  onClose = {onClose}
                  
               /> 
               )
            }
            )
            }
          </div>  
        </div>
    )
}

export default Favorites

//  const mapStateToProps = (state) => {
//     return{
//         myFavorites: state.myFavorites
//     }
//  }


// export default connect(mapStateToProps,null) (Favorites)