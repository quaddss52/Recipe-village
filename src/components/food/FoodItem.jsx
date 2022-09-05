import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
function FoodItem({food:{name , thumbnail_url, description, id}}) {
  return (
    <div className='card shadow-md card-compact bg-base-100'>
        <Link to={`/recipe/${id}`}>
        <figure><img src={thumbnail_url} alt="Food item"  className='h-80 w-full'/></figure>
        <div className="card-body">
            <h3 className="card-title">{name}</h3>
            <p>{description}</p>
        </div>
        </Link>
    </div>
  )
}
FoodItem.propTypes = {
    food: PropTypes.object.isRequired
}

export default FoodItem