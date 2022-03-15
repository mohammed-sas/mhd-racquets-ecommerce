

const Rating = ({rating}) => {
    return (
       
        <div className="rating-container padding-l-r-16-b-5 ">
          <i className={"fas fa-star star "+(1<=rating ? "rating-active" : "")}></i>
          <i className={"fas fa-star star "+(2<=rating ? "rating-active" : "")}></i>
          <i className={"fas fa-star star "+(3<=rating ? "rating-active" : "")}></i>
          <i className={"fas fa-star star "+(4<=rating ? "rating-active" : "")}></i>
          <i className={"fas fa-star star "+(5<=rating ? "rating-active" : "")}></i>
        </div>
        
    )
}

export default Rating
