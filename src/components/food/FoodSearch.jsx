import {useState, useContext} from 'react'
import TastyContext from '../context/tasty/TastyContext'
import AlertContext from '../context/alert/AlertContext'


function FoodSearch() {
    const {dishes, searchRecipes,clearRecipes} = useContext(TastyContext)
    const {setAlert} = useContext(AlertContext)

    const [text, setText] = useState('')
    const handleChange = (e) =>{
        setText(e.target.value)
    }
    const handleSubmit =(e)=>{
        e.preventDefault()

        if(text === ''){
            setAlert('Enter food item ', 'error')
        }else{
            searchRecipes(text)
            
        }
    }
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-1 mb-8 gap-8  justify-items-center">
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <div className="relative">
                        <input type="text" className="w-full pr-40 bg-gray-200 input input-lg text-black " placeholder="Search"
                        value={text}
                        onChange={handleChange}/>
                        <button type='submit' className="absolute top-0 right-0 rounded-l-none btn btn-warning btn-lg w-36">Go</button>
                    </div>
                </div>
                
            </form>
        </div>
        {dishes.length > 0 && (
             <div>
                <button className="btn btn-outline btn-secondary btn-large border-secondary text-secondary-content" onClick={clearRecipes}>Clear</button>
            </div>
        )}
       
    </div>
  )
}

export default FoodSearch