import { useLocation } from 'react-router-dom'
import './rating.css'

const Rating = ({rating,padding}) => {
  const location = useLocation();
  
    return (
       
        <div className={"rating-container padding-l-r-16-b-5 "+ (location.pathname==="/products-listing" ?"bg-purple-50 ":"") +(padding)}>
          <i className={"fas fa-star star "+(1<=rating ? "rating-active" : "")}></i>
          <i className={"fas fa-star star "+(2<=rating ? "rating-active" : "")}></i>
          <i className={"fas fa-star star "+(3<=rating ? "rating-active" : "")}></i>
          <i className={"fas fa-star star "+(4<=rating ? "rating-active" : "")}></i>
          <i className={"fas fa-star star "+(5<=rating ? "rating-active" : "")}></i>
        </div>
        
    )
}

export default Rating
