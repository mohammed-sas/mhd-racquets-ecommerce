import Navbar from '../../components/Navbar/Navbar';
import Filters from '../../components/filters/Filters';
import {  getFastDelivered,getLowToHigh,getHighToLow,getInStock,getMaxPrice,getCategoryWise} from '../../utils/util';

import './products.css';
import { useFilter } from '../../context/filter-context';

const Products = () => {
    const {state} = useFilter();
   
    const { items, lowToHigh, highToLow,categories } = state;
   
    let filteredItems = lowToHigh ? getLowToHigh(items) : items;
    filteredItems = highToLow ? getHighToLow(items) : items;
    filteredItems=getCategoryWise(filteredItems,categories)

    return (
        <div className="product-page-container">
            <Navbar/>
            <Filters/>
            <main>
                {
                    state.loading ? <h2>Loading...</h2>:null
                }
                {
                    filteredItems.map(product=>{
                        return (<div key={product.id} className="card-container product-container">
                        <div className="card-image-basic product-image relative-pos">
                            <img src={product.image} alt="astrox 100 game" />
                            <span className="btn-dismiss"><i className="fas fa-heart "></i></span>
                        </div>
                        <div className="card-heading bg-purple-50">
                            <div className="padding-l-r-16-b-5 heading bg-purple-50">{product.title}</div>
                            <div className="padding-l-r-16-b-5 sub-heading bg-purple-50">{product.brand}
                            </div>
                        </div>
                        <div className="product-price padding-l-r-16-b-5  bg-purple-50">
                            <h2>₹{product.price}</h2>
                        </div>
                        <div className="card-footer-basic product-card-footer fluid-x bg-purple-50">
                            <button className="btn btn-primary">Add to Cart</button>
                        </div>
                    </div>)
                    })
                }
                
                
            </main>
        </div>
    )
}

export default Products
