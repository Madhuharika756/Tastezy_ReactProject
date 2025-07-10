import RestaurantCard from "./RestaurantCard"
import resList from "../utils/mokData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
// https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.624480699999999&page_type=DESKTOP_WEB_LISTING
const Body = () => {
  const [allRestaurant,setAllRestaurant] = useState([]);
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [searchText, setSearchtext] = useState("");

  useEffect(() => {
    fetchData();
  }, []);
  
  const fetchData = async () => {
    const data = await fetch("https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log(json);
    setAllRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }
  if ((allRestaurant.length) === 0) {
    return <Shimmer />
  }

  if(listOfRestaurant.length===0){
    return <h1>No Restaurants Found!😕</h1>
  }

  return (
    <>
      <div className="top-section">
        <div className="search-section">
          <input type="text" className="search" value={searchText} onChange={(e) => {
            setSearchtext(e.target.value);
          }} />
          <button className="button" onClick={() => {
            const filteredData =allRestaurant.filter((res) => res?.info?.name?.toLowerCase().includes(searchText.toLowerCase()));
            console.log(filteredData);
            setListOfRestaurant(filteredData);
          }} >Search</button>
        </div>
        <button className="button" onClick={() => {
          const filteredData = allRestaurant.filter((res) => res.info.avgRating > 4.3);
          setListOfRestaurant(filteredData);
        }}>Top Rated Restaurants</button>
      </div>
      <div className="restaurantContainer">
        {
          listOfRestaurant.map((resCard) => {
            return <Link key={resCard.info.id}  to={"/restaurant/"+resCard.info.id}> <RestaurantCard resCard={resCard} /></Link>
          })
        }
      </div>
    </>
  )
}

export default Body;