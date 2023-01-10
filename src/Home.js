import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className='home'>
            <div className='home__container'>
            <img className='home__image' src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />
              <div className='home__row'>
                <Product 
                title="The lean startup"
                price = {29.99}
                image= "https://cdn.shopify.com/s/files/1/1859/8979/articles/image1_9f2b6e3d-a539-41b2-ab98-c8f74954a78a_1024x1024.progressive.jpg?v=1617908938"
                rating = {5}/>
                <Product 
                title="The new Product"
                price={30.00}
                image="https://www.junglescout.com/wp-content/uploads/2021/01/product-photo-nono1.png"
                rating = {4``}/>

              </div>
              <div className='home__row'>
              <Product 
               title="The new Product"
               price={30.00}
               rating = {5}
              image="https://www.junglescout.com/wp-content/uploads/2021/01/product-photo-limits.png"/>
              <Product 
               title="The new Product"
               price={30.00}
               rating = {5}
              image = "https://m.media-amazon.com/images/I/71hIjJkMqFL._AC_SY200_.jpg"/>
              <Product 
               title="The new Product"
               price={30.00}
               rating = {5}
              image = "https://m.media-amazon.com/images/I/7189iXimfWL._AC_SY200_.jpg"/>
                
              </div>
              <div className='home__row'>
              <Product 
               title="The new Product"
               price={30.00}
               rating = {5}
              image="https://m.media-amazon.com/images/I/916UyKn-4QL._AC_SY200_.jpg"/>
              <Product 
               title="The new Product"
               price={30.00}
               rating = {5}
              image = "https://m.media-amazon.com/images/I/51irVXBTIrL._AC_SY200_.jpg"/>
              <Product 
               title="The new Product"
               price={30.00}
               rating = {5}
              image = "https://m.media-amazon.com/images/I/61XYX1tzoTL._AC_SY200_.jpg"/>
              <Product 
               title="The new Product"
               price={30.00}
               rating = {5}
              image = "https://m.media-amazon.com/images/I/61j17FjPhtL._AC_SY200_.jpg"/>
              <Product 
               title="The new Product"
               price={30.00}
               rating = {5}
              image = "https://m.media-amazon.com/images/I/61c2CDvbxvL._AC_UY218_.jpg"/>
              <Product 
               title="The new Product"
               price={30.00}
               rating = {5}
              image = "https://m.media-amazon.com/images/I/71El0kkoIrL._AC_UL640_QL65_.jpg"/>
                
              </div>
              <div className='home__row'>
              <Product 
               title="The new Product"
               price={30.00}
               rating = {5}
              image = "https://m.media-amazon.com/images/I/81McI2xG3NS._AC_UL320_.jpg"/>
              <Product 
               title="The new Product"
               price={30.00}
               rating = {5}
              image ="https://m.media-amazon.com/images/I/71phR1HoYKL._AC_UL320_.jpg"/>
              <Product 
               title="The new Product"
               price={30.00}
               rating = {5}
              image = "https://m.media-amazon.com/images/I/81uQBh0tvgL._MCnd_AC_UL320_.jpg"/>
              <Product 
               title="The new Product"
               price={30.00}
               rating = {5}
              image = "https://m.media-amazon.com/images/I/51nEBQyS9yL._AC_UL320_.jpg"/>
              <Product 
               title="The new Product"
               price={30.00}
               rating = {5}
              image ="https://m.media-amazon.com/images/I/71oTmgDv7bL._AC_UL320_.jpg"/>
              <Product 
               title="The new Product"
               price={30.00}
               rating = {5}
              image = "https://m.media-amazon.com/images/I/619tFgAbNrL._AC_UL320_.jpg"/>
              </div>
                <div>
                  <Product 
                  title = "the new "
                  price = {50}
                  rating = {5}
                  image="https://cdn.shopify.com/s/files/1/1859/8979/articles/image1_9f2b6e3d-a539-41b2-ab98-c8f74954a78a_1024x1024.progressive.jpg?v=1617908938"/>
                </div>
              </div>
        </div>
      
    )
}

export default Home