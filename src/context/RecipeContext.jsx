import {createContext,useState, useEffect} from 'react'

export const Recipecontext = createContext(null)
const RecipeContext = (props) => {
    const [recipe,setrecipe] = useState([])

    useEffect(()=> {
      setrecipe(JSON.parse(localStorage.getItem("recipe")) || [])
    }, [])
  return (
    <Recipecontext.Provider value={[recipe,setrecipe]}>
        {props.children}
    </Recipecontext.Provider>
  )
}

export default RecipeContext