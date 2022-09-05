import { createContext, useState } from "react";

const TastyContext = createContext()

const TASTY_URL = process.env.REACT_APP_TASTY_URL 
const TASTY_TOKEN = process.env.REACT_APP_TASTY_TOKEN

export const TastyProvider = ({children})=>{
    const [dishes, setDishes] = useState([])
    const [dish, setDish] = useState({})
    const [loading, setLoading] = useState(false)

    // search recipes
    const searchRecipes = async (text)=>{
        setLoading(true)
        
        const params = new URLSearchParams({
            q:text,
            from : 0,
            size : 24,
            
        })
        
        const response = await fetch(`${TASTY_URL}/recipes/list?${params}&tags=under_30_minutes`,{
            headers: {
                'X-RapidAPI-Key' : `${TASTY_TOKEN}`,
                'X-RapidAPI-Host' : `tasty.p.rapidapi.com`
            }
        })
        if (response.status !== 200) {
            window.location = "/notfound";
        } else {
            const data = await response.json();
            
            
            setDishes(data.results)
            setLoading(false)
        }
    }
    // get a single recipe
    const getRecipe = async (id)=>{
        setLoading(true)
        
        
        
        const response = await fetch(`${TASTY_URL}/recipes/get-more-info?id=${id}`,{
            headers: {
                'X-RapidAPI-Key' : `${TASTY_TOKEN}`,
                'X-RapidAPI-Host' : `tasty.p.rapidapi.com`
            }
        })
        if (response.status === 404) {
            window.location = "/notfound";
        } else {
            const data = await response.json();
            
            
            setDish(data)
            setLoading(false)
        }
    }
    
    
    const clearRecipes =()=>{
        setDishes([])
    }

    return <TastyContext.Provider value ={
        {
            dishes,
            loading,
            dish,
            searchRecipes,
            getRecipe,
            clearRecipes,
        }
    }>
        {children}
    </TastyContext.Provider>
}

export default TastyContext

// const fetchRecipes = async ()=>{
//     setLoading(true)
//     const response = await fetch(`${TASTY_URL}/recipes/list?q=breakfast&from=0&size=4&tags=under_30_minutes`,{
//         headers: {
//             'X-RapidAPI-Key' : `${TASTY_TOKEN}`,
//             'X-RapidAPI-Host' : `tasty.p.rapidapi.com`
//         }
//     })
//     if (response.status !== 200) {
//             window.location = "/notfound";
//           } else {
//             const data = await response.json();
        
           
//             setDishes(data.results)
//             setLoading(false)
//           }
//     }

// search recipes