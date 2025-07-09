import RestaurantCard from "./RestaurantCard"
import resList from "../utils/mokData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
// https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.624480699999999&page_type=DESKTOP_WEB_LISTING
const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [searchText, setSearchtext] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log(json);
    setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }
  if ((listOfRestaurant.length) === 0) {
    return <Shimmer />
  }

  return (
    <>
      <div className="top-section">
        <div className="search-section">
          <input type="text" className="search" value={searchText} onChange={(e) => {
            setSearchtext(e.target.value);
          }} />
          <button className="button" onClick={() => {
            const filteredData = listOfRestaurant.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
            setListOfRestaurant(filteredData);
          }} >Search</button>
        </div>
        <button className="button" onClick={() => {
          const filteredData = listOfRestaurant.filter((res) => res.info.avgRating > 4.3);
          setListOfRestaurant(filteredData);
        }}>Top Rated Restaurants</button>
      </div>
      <div className="restaurantContainer">
        {
          listOfRestaurant.map((resCard) => {
            return <RestaurantCard key={resCard.info.id} resCard={resCard} />
          })
        }
      </div>
    </>
  )
}

export default Body;