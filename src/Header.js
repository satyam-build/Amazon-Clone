import React from 'react';
import { Link } from "react-router-dom";
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useStateValue } from './StateProvider';

function Header() {

  const [{basket}] = useStateValue();
  console.log(basket);

  return (
    <nav className='header'>
        {/* logo  */}
        <Link to='/'>
        <img className='header-logo'  src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
        </Link>

        {/* search box */}
        <div className="header-search">
        <input type="text" className='header-searchInput' />
        <SearchIcon className='header-searchIcon'/>
        </div>


        {/* 3 links  */}
        <div className="header-nav">
          <Link to='/login' className='header-link'>
          
          <div className="header-option">
          <span  className='header-option-one'>hi satyam</span>
          <span className='header-option-two'>Sign in</span>
          </div>

          </Link>
          <Link to='/login' className='header-link'>
          
          <div className="header-option">
          <span className='header-option-one'>Returns</span>
          <span className='header-option-two'>& orders</span>
          </div>

          </Link>
          <Link to='/login' className='header-link'>
          
          <div className="header-option">
          <span className='header-option-one'>Your</span>
          <span className='header-option-two'>prime</span>
          </div>

          </Link>
          
        {/*basket icon   */}
          <Link to='/checkout' className='header-link'>    
          <div className="header-option-basket">
            <ShoppingCartIcon />
          <span className='header-option-two  header-basket-count'>{basket?.length}</span>
          </div>

          </Link>
        </div>

    </nav>
  )
}

export default Header