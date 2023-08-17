import './App.css';//
import { useState, useEffect} from 'react';//
import  axios from 'axios';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Cards from './components/Cards/Cards.jsx';
import NavBar from './components/navBar/NavBar';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Error from './components/Error/Error';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';



function App() {
   
   //se utiliza un estado local para buscar personajes (fc onSearch, onClose, repetidos)
   const [characters,setCharacters] = useState([])
   //se utiliza el hook useNavigate para navegar en las funciones relacionadas al loggin
   const navigate = useNavigate();
   //Se crea estado local para manejar los accesos (fc login, logout, y el useffect para evitar que gente sin acceso pueda entrar)
   const [access,setAccess] = useState(false)

   
   const login = async (userData)=> {
      try {
         const { email, password } = userData;
         const URL = 'http://localhost:3001/rickandmorty/login/';
         const {data} = await axios(URL + `?email=${email}&password=${password}`)
         const { access } = data;
         setAccess(access);
         access && navigate('/home');
      } 
      catch (error) {
         console.log(error.message)
      }
         
   
   }
   //Esto garantiza que no se puedan loggear usuarios no autenticados
   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   const logOut = () =>{
      setAccess(false)
      navigate('/')
   }

   // ESTAS DOS FUNCIONES HAY QUE RELACIONARLAS CON EL BACK AHORA PARA QUE ANDEN
   //funcion para cerrar cada card
   function onClose (id)  {
     
         setCharacters(
         characters.filter(char =>  char.id != id)  
         )
      
   }
   // funcion para que no se abran tarjetas repetidas
   function repetidos (id) {
      let repetido = false
      characters.forEach(char => {
         char.id == parseInt(id) ? repetido = true : repetido = false
      });
      return repetido
   }

   //funcion para agregar personajes buscados
   async function onSearch(id) {
      try {
         if(repetidos(id)){
            return  alert('Personaje Repetido')
         } 
         const {data} = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
         if (data.name) {         
            setCharacters((oldChars) => [...oldChars, data]);
         } 
      } catch (error) {
         return alert('¡Disculpas! Algo salio mal :(')
      }
      
         
   }
    

   
   return (
      <div className='App'>
         {/* //Si bien el navBar esta disponible en todas las rutas, se hizo una configuracion en el modulo, para que no aparezca en la ruta '/' */}
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
