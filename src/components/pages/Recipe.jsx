import {useEffect , useContext} from 'react'
import { FaChevronCircleDown, FaThumbsUp} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Loader from '../layouts/Loader';
import TastyContext from '../context/tasty/TastyContext'
import { useParams } from "react-router-dom";

function Recipe() {
    const {getRecipe, dish, loading} = useContext(TastyContext)
    const params = useParams()
    useEffect(() => {
     
        getRecipe(params.id)
    
      
    }, [])
    if(loading){
        return <Loader/>
    }
    const {
        thumbnail_url,
        user_ratings,
        description,
        name,
        yields,
        instructions,
        sections,
        nutrition
    } = dish 
    // if (user_ratings) {
    //     let x = user_ratings.count_positive
    //     let y = user_ratings.count_negative
    //     let a = parseInt(x)
    //     let b = parseInt(y)

    //     return(a,b)
        
        
    //     function percentage(num1 , num2){
    //         let c = a + b
    //         let d = a/c * 100
    //         return Math.round(d)
    //        }
    
       
    // }
  return (
    <>
    <div className="w-full mx-auto lg:w-10/12">
        <div className="mb-4">
            <Link to='/' className='btn btn-outline border-secondary text-secondary-content'>Back to Home</Link>
        </div>
        {/* <div className="mb-4 mt-20 flex-none px-2 mx-2 bg-success card w-64">
            <FaThumbsUp className='inline pr-2 text-3xl '/>
           <p className='align-middle inline'> {total}% would make again</p>
        </div> */}
        <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8 ">
          <div className="custom-card-image mb-6 md:mb-0">
            <div className="rounded-lg shadow-xl card image-full">
              <figure>
                <img src={thumbnail_url} alt="Profile" />
              </figure>
              <div className="card-body justify-end">
                <h2 className="card-title mb-0">{name}</h2>
                <p>{name}</p>
              </div>
              <div className="card-body mt-20">
                <p className='text-2xl'>{description}</p>
              </div>
            </div>
          </div>
          <div >
            {nutrition && (

            <div tabindex={0} className="collapse"> 
            <div className="collapse-title text-xl font-medium flex-none px-2 mx-2 " >
            <p>Nutrition <FaChevronCircleDown className='inline pr-2 text-3xl'/></p>
            </div>
            <div className="collapse-content"> 
            <ul tabIndex="0" className="p-2 shadow bg-base-100 rounded-box w-52">
                    <li> Protein: {nutrition.protein}</li>
                    <li> Fat: {nutrition.fat}</li>
                    <li> Calories: {nutrition.calories}</li>
                    <li> Sugar: {nutrition.sugar}</li>
                    <li> Carbohydrates: {nutrition.carbohydrates}</li>
                    <li> Fiber: {nutrition.fiber}</li>
                    
                </ul>
            </div>
            </div>

         
            )}
            <div className="mt-10 mx-auto">
                <h3 className='text-3xl mx-auto'>{yields}</h3>
            </div>
          </div>
            <div className="card bg-primary shadow-xl">
                <div className="card-title text-center text-2xl mx-auto mb-8 text-primary-content mt-8">Ingredients;</div>
                {sections && sections[0].components.map((each)=>{
                    return (
                        <ul className='px-8 py-1.5 text-primary-content mb-2 listy'><li>{each.raw_text}</li></ul>
                    )
                })}
            </div>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 mt-10 md:gap-8 ">

        <div className="card bg-secondary shadow-xl col-span-2 ">
                <div className="card-title text-center text-2xl mx-auto mb-8 text-secondary-content mt-8">Preparation</div>
                {instructions && instructions.map((each)=>{
                    return (
                        <ul className='px-8 py-1.5 text-secondary-content mb-2 listy'><li>{each.display_text}</li></ul>
                    )
                })}
            </div>
        </div>
    </div>
    </>
  )
}

export default Recipe