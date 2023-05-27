import style from './Card.module.css';
import { Link } from 'react-router-dom';
// import {connect} from 'react-redux';
import { addFav, removeFav } from '../../Redux/actions';
import { useState , useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';


const Card = ({id, name, species,gender, image, onClose}) => {

   const [isFav, setIsFav] = useState(false)

   const dispatch = useDispatch();
   const myFavorites = useSelector(state => state.myFavorites);

   const handleFavorite = () =>{
      if(isFav){
         setIsFav(false);
        dispatch( removeFav(id))
      } else {
         setIsFav(true);
        dispatch( addFav({id, name, species,gender, image, onClose}))
      }
   }
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);



   return (
      <div className= {style.contenedor}>
         
         
         <div className={style.superior} >
            {
               isFav ? (
                  <button className={style.fav} onClick={handleFavorite}>❤️</button>
               ) : (
                  <button className={style.fav} onClick={handleFavorite}>🤍</button>
               )
            }


            <button className={style.close} onClick = {() => onClose(id)} >X</button>

            <Link to={`/detail/${id}`}>
            <h2> {name}</h2>
            </Link>

            <img src={image} alt='' /> 
         </div>
         
         <div className={style.inferior}>   
            <h2> Specie | {species}</h2>
            <h2> Gender | {gender}</h2>
            
         </div>
            
      </div>
   );
}

export default Card

// const mapStateToProps = (state)=>{
//    return{
//       myFavorites: state.myFavorites 
//    }
// };

// const mapDispatchToProps = (dispatch)=>{
//    return{
//       addFav: (character)=> dispatch(addFav(character)),
//       removeFav: (id)=> dispatch(removeFav(id))
//    }
// };


// export default connect(mapStateToProps, mapDispatchToProps)(Card);
