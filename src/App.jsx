import React from "react"

const Header = () => {
  return (
    <>
      <div className="headerComponent">
        <div className="logo">
          <img src="https://img.freepik.com/premium-vector/good-food-logo-design_79169-10.jpg?semt=ais_hybrid&w=740" alt="logo-image" className="logo" />
        </div>
        <div className="nav-bar">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </>
  )
}

const RestaurantCard = ()=>{
  return(
    <>
      <div className="restuarantCard">
        <div className="res-logo">
          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/06905150032554e9bd76f8c11856522e" alt="res-logo" className="res-img" />
        </div>
        <h3>Savitha Udupi Veg Restaurant</h3>
        <h4>Biryani, North Indian Asian</h4>
        <h4>4.4 Star</h4>
        <h4>38 minutes</h4>
      </div>
    </>
  )
}

const Body=()=>{
  return(
    <>
      <div className="search">
        Search
      </div>
      <div className="restaurantContainer">
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
      </div>
    </>
  )
}

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body/>
    </>
  )
}

export default AppLayout;