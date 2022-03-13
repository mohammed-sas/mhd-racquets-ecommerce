import './navbar.css'
import logo from '../../assets/ecomm-logo.png';
const Navbar = () => {
    return (
        <nav className="nav-bar bg-white">
            <div className="hamburger-icon">
                <i className="fas fa-bars"></i>
            </div>
            <div className="nav-brand">
                <img src={logo} alt="logo"/>
                <div className="nav-brand-typography">
                    <h3 className="grey">MHD</h3>
                    <h4 className="grey">Racquets</h4>     
                </div>
            </div>
            <div className="search-bar">
                <i className="fas fa-search grey"></i>
                <input type="text" placeholder="Search..."/>
            </div>
            <div className="nav-links">
            <ul>
                <li><button className="btn btn-primary">Login</button></li>
                <li>
                    <div className="badge">
                        <i className="far fa-heart grey bg-none"></i>
                        <div className="badge-number"><span>5</span></div>
                    </div>
                </li>
                <li>
                    <div className="display-flex align-items">
                        <div className="badge">
                            <i className="fas fa-shopping-cart bg-none grey"></i>
                            <div className="badge-number"><span>5</span></div>
                        </div>
                        <p className="bg-none grey">Cart</p>
                    </div>
                </li>
            </ul>
            </div>
        
        </nav>

    )
}

export default Navbar;
