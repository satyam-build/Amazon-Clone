import React from 'react'
import Product from './Product';
import './Home.css';
function Home() {
  return (
    <div className='home'>
      <img className='home-img' src={require('./media/Alexa-banner.jpg')} alt="" />
      {/* product id,title,price ,rating,image */}
    <div className="home-row">
      
      <Product
        id="12345612"
        title="THe Lean startup"
        price={8.5}
        rating={5}
        image="https://m.media-amazon.com/images/I/81vvgZqCskL._AC_UY327_FMwebp_QL65_.jpg"
        />
        <Product
        id="12345612"
        title="Bacca Bucci Superstar 2.0 Men Fashion Hi Top Sneakers"
        price={25.37}
        rating={5}
        image="https://m.media-amazon.com/images/I/61y4DQyuXaL._AC_SY175_.jpg"
        />
    </div>
    <div className="home-row">
      
      <Product
        id="12345612"
        title="iQOO Z5 5G (Mystic Space, 8GB RAM, 128GB Storage) | Snapdragon 778G 5G Processor"
        price={250}
        rating={5}
        image="https://m.media-amazon.com/images/I/414wcW-9+ML._SY300_SX300_.jpg"
        />
        <Product
        id="12345612"
        title="Samsung 108 cm (43 inches) The Frame Series 4K Ultra HD Smart QLED TV"
        price={750}
        rating={5}
        image="https://m.media-amazon.com/images/I/61NmgnB8MaL._AC_UY327_FMwebp_QL65_.jpg"
        />
        <Product
        id="12345612"
        title="HP Pavilion 15 AMD Ryzen 5- 8GB/512GB SSD"
        price={600}
        rating={5}
        image="https://m.media-amazon.com/images/I/61sdH+DGGDL._AC_UY327_FMwebp_QL65_.jpg"
        />
    </div>
    <div className="home-row">
      
      <Product
        id="12345612"
        title="FCUK Fit Pro Full Touch 1.69 Superior Display Smartwatch, Sleek Design Metal Body, 8 Sport Modes, Spo2, Heart Rate Monitoring, IP 68 Water Resistance"
        price={80.79}
        rating={5}
        image="https://m.media-amazon.com/images/I/71R2lFhADEL._AC_UL480_FMwebp_QL65_.jpg"
        />
        
    </div>
    </div>
  )
}

export default Home