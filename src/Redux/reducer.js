import { ADD_FAV, REMOVE_FAV , FILTER, ORDER} from "./actions"

const initialState = {
    myFavorites : [],
    allCharacters : []
}

const rootReducer = (state=initialState,action) =>{
    switch(action.type){
        case ADD_FAV: 
            return{ ...state,
                    myFavorites: [...state.allCharacters, action.payload],
                    allCharacters: [...state.allCharacters, action.payload],
                }

        case REMOVE_FAV:
            return{ ...state,
                myFavorites: state.myFavorites.filter(fav => fav.id !== action.payload) 
            }

        case FILTER: 
            const filter = state.allCharacters.filter(char=>char.gender === action.payload)
             if(action.payload === 'Todos') {
                return{ ...state,
                    myFavorites: state.allCharacters
                }
             } else return{ ...state,
                myFavorites: filter
            }

        case ORDER :
                const actual = [...state.allCharacters]
            return{
                ...state,
                myFavorites: actual.sort((a,b) => {
                   return (action.payload === 'A' ) ?  a.id - b.id :  b.id - a.id
                    }
                )
            }

        default:
            return {...state}
 
    }
}

export default rootReducer