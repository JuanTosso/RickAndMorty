import style from './SearchBar.module.css';
import {useState} from 'react';




const SearchBar = ({onSearch}) => {

   const [id,setId] = useState('')

   const handleChange = (event) => { 
      console.log(event)
      setId(event.target.value)
   }
 
   return (
      <div className={style.contenedor}>
          <input  type='search' 
                  placeholder=' id...' 
                  onChange={handleChange}
          
          />

         <button onClick={()=> {onSearch(id)}}>Agregar</button> 
      </div>
   );
}
export default  SearchBar
