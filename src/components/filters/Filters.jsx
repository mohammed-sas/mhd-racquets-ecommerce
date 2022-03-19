
import { useFilter } from '../../context/filter-context';
import './filters.css';
const Filters = () => {
    const {state,filterDispatch} = useFilter();
    return (
<aside>
                <div className="display-flex">
                    <h3>Filters</h3>
                    <button className="btn btn-link" onClick={()=>filterDispatch({type:"CLEAR_FILTER"})}>Clear</button>
                </div>
                <div className="price-filter">
                    <h3>Price</h3>
                    <div className="price-range">
                        <span className="position-relative">0</span>
                        <span className="position-relative">7000</span>
                        <span className="position-relative">14000</span>
                    </div>
                    <div className="range-wrap">
                        <input type="range" min="0" name='slider' id='slider' className="range" onChange={(e)=>filterDispatch({type:"PRICE_RANGE",payload:e.target.value})}  value={state.maxPrice} max="14000"/>
                    </div>
                </div>
                <div className="category filter-flex-y ">
                    <h3>Category</h3>
                    <label htmlFor="racquets"><input name="racquets" checked={state.showRacquet} onChange={(e)=>filterDispatch({type:"CATEGORIES",payload:{category:"Racquet",isSelected:e.target.checked}})} type="checkbox"/> Racquets</label>
                    <label htmlFor="shuttlecock"><input name="shuttlecock" checked={state.showShuttleCock} onChange={(e)=>filterDispatch({type:"CATEGORIES",payload:{category:"ShuttleCock",isSelected:e.target.checked}})} type="checkbox"/> Shuttlecock</label>
                    <label htmlFor="string"><input name="string" checked={state.showString} onChange={(e)=>filterDispatch({type:"CATEGORIES",payload:{category:"String",isSelected:e.target.checked}})} type="checkbox"/> String</label>
                    <label htmlFor="shoe"><input name="shoe" checked={state.showShoe} onChange={(e)=>filterDispatch({type:"CATEGORIES",payload:{category:"Shoe",isSelected:e.target.checked}})} type="checkbox"/> Shoe</label>
                </div>
                <div className="rating filter-flex-y">
                    <h3>Rating</h3>
                    <label htmlFor="four-star"><input name="rating" checked={state.rating === 4} onChange={()=>filterDispatch({type:"RATING",payload:4})} type="radio"/> 4 stars & above</label>
                    <label htmlFor="three-star"><input name="rating" checked={state.rating === 3} onChange={()=>filterDispatch({type:"RATING",payload:3})} type="radio"/> 3 stars & above</label>
                    <label htmlFor="two-star"><input name="rating" checked={state.rating === 2} onChange={()=>filterDispatch({type:"RATING",payload:2})} type="radio"/> 2 stars & above</label>
                    <label htmlFor="one-star"><input name="rating" checked={state.rating === 1} onChange={()=>filterDispatch({type:"RATING",payload:1})} type="radio"/> 1 star & above</label>
                </div>
                <div className="sort-by filter-flex-y">
                    <h3>Sort by</h3>
                    <label htmlFor="low-high"><input name="price-sort" checked={state.lowToHigh} onChange={()=>filterDispatch({type:"LOW_TO_HIGH"})} type="radio"/> Prices - Low to High</label>
                    <label htmlFor="high-low"><input name="price-sort" checked={state.highToLow} onChange={()=>filterDispatch({type:"HIGH_TO_LOW"})} type="radio"/> Prices - High to Low</label>
                </div>
            </aside>
            
    )
}

export default Filters
