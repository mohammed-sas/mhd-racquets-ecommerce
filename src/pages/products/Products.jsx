import Navbar from '../../components/Navbar/Navbar';
import Filters from '../../components/filters/Filters';
import axios from "axios";
import { useEffect, useState } from "react";
import './products.css';

const Products = () => {
    const [products,setProducts] = useState([]);

  useEffect(()=>{

    const fetchProducts=async ()=>{
      const response = await axios.get('/api/products');
      setProducts(response.data.products);

    }
    fetchProducts();

  },[]);
  
    return (
        <div className="product-page-container">
            <Navbar/>
            <Filters/>
            <main>
                {
                    products.map(product=>{
                        return (<div className="card-container product-container">
                        <div className="card-image-basic product-image relative-pos">
                            <img src={product.image} alt="astrox 100 game" />
                            <span className="btn-dismiss"><i className="fas fa-heart wishlist-active"></i></span>
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
