import './App.css';
import Cards from './components/Cards/Cards.jsx';
import NavBar from './components/navBar/NavBar';
import { useState, useEffect} from 'react';
import  axios from 'axios';
import { Route, Routes, useNavigate } from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Error from './components/Error/Error';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';



function App() {
   
   const [characters,setCharacters] = useState([])

   const navigate = useNavigate();
   const [access,setAccess] = useState(false)
   const EMAIL = 'juantosso89@gmail.com'
   const PASSWORD = 'juanep11'

   const login = (userData) =>{
       if (userData.email === EMAIL && userData.password === PASSWORD){
         setAccess(true)
         navigate('/home')
       } 
   }
   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   const logOut = () =>{
      setAccess(false)
      navigate('/')
   }

   //funcion para cerrar cada card
   function onClose (id)  {
         setCharacters(
         characters.filter(char => char.id !== parseInt(id))  
         )
   }
   // funcion para que no se abran tarjetas repetidas
   function repetidos (id) {
      let repetido = false
      characters.forEach(char => {
         char.id === parseInt(id) ? repetido = true : repetido = false
      });
      return repetido
   }

   //funcion para agregar personajes buscados
   function onSearch(id) {
      
      if(repetidos(id)){
         return  alert('Personaje Repetido')
      } 
      
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         
         if (data.name) {         
            setCharacters((oldChars) => [...oldChars, data]);
         } 
      })
         .catch(() => {
            
            return alert('¡Disculpas! Algo salio mal :(');
          });
   }
    

   
   return (
      <div className='App'>
         <NavBar onSearch = {onSearch} logOut= {logOut}/>

         <Routes>

         <Route path='/' element={<Form login = {login}/>}/>

         <Route path='/home' 
               element={ <Cards characters = {characters} onClose = {onClose}/>} 
         />

         <Route path='/about' element={<About/>}/>

         <Route path='/detail/:id' element={<Detail/>}/>

         <Route path='/:error' element={<Error/>}/>

         <Route path='/favorites' element={<Favorites/>}/>
         
         </Routes>        
      </div>
   );
}


export default App;
