import {useContext} from 'react'
import TastyContext from '../context/tasty/TastyContext'
import Loader from '../layouts/Loader'
import FoodItem from './FoodItem'
function FoodResult() {

    const {dishes, loading}= useContext(TastyContext)

   
    if(!loading){

        return (
            <div>
                {dishes.length > 0 && (
                    <div className="card card-body text-3xl">
                        <div className="card-body">
                         <p>Recipes : {dishes.length}</p>
                        </div>
                </div>
                )}
                
          <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols- md:grid-cols-2">
            
              {dishes.map((dish)=>(
                  <FoodItem key={dish.id} food={dish}/>
              ))}
      
            
          </div>
          </div>
        )
    }else{
        return <Loader className='justify-center mx-auto'/>
    }
}

export default FoodResult