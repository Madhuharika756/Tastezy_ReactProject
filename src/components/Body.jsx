
import RestaurantCard from "./RestaurantCard"
import { useState, useEffect, Fragment } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { withRestaurantOffers } from "./withRestaurantOferrs";
import { FETCH_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [allRestaurant, setAllRestaurant] = useState([]);
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [searchText, setSearchtext] = useState("");
  const RestaurantOferrs = withRestaurantOffers(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(FETCH_URL);
    const json = await data.json();
    // console.log(json);
    setAllRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }
  // if ((allRestaurant.length) === 0) {
  //   return <Shimmer />
  // }
  const isOnline = useOnlineStatus();

  if (isOnline === false) {
    return <h1 className="text-2xl font-bold">Look like you are offline!🧐</h1>
  }
  return allRestaurant.length === 0 ? (<Shimmer />) : (
    <>
      <div className="top-section my-4 flex flex-wrap justify-center">
        <div className="search-section mx-5 ">
          <div className="flex flex-col md:flex-row gap-2">

            <input type="text" className="w-full md:w-96 mb-2 md:mb-0 mr-0 md:mr-3 p-2 bg-gray-200 rounded-xl" placeholder="Search Food Intem" value={searchText} onChange={(e) => {
              setSearchtext(e.target.value);
            }} />
            <button className="bg-orange-400 text-white font-medium px-4 py-2 rounded-md hover:bg-amber-600 cursor-pointer"
              onClick={() => {
                const filteredData = allRestaurant.filter((res) => res?.info?.name?.toLowerCase().includes(searchText.toLowerCase()));
                console.log(filteredData);
                setListOfRestaurant(filteredData);
              }} >Search</button>
            <button className="bg-orange-400 text-white font-medium px-4 py-2 rounded-md hover:bg-amber-600 cursor-pointer"
              onClick={() => {
                const filteredData = allRestaurant.filter((res) => res.info.avgRating > 4.4);
                setListOfRestaurant(filteredData);
              }}>Top Rated Food Item</button>
          </div>
        </div>
      </div>
      <div className="restaurantContainer flex flex-wrap justify-center">
        {
          listOfRestaurant.map((resCard) => {
            return <Link key={resCard.info.id} to={"/restaurant/" + resCard.info.id}>
              {resCard.info.aggregatedDiscountInfoV3 ? <RestaurantOferrs resCard={resCard} /> :
                <RestaurantCard resCard={resCard} />}
            </Link>
          })
        }
      </div>
    </>
  )
}

export default Body;