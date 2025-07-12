import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import RestaurantCategories from "./RestaurantCategories";
import { CDN_LINK } from "../utils/constants";
// https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId=

const RestaurantMenu = () => {
    const [menuItems, setMenuItems] = useState(null);
    const { resId } = useParams();

    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        const data = await fetch("https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId=" + resId);
        const json = await data.json();
        setMenuItems(json.data);
    };
    if (!menuItems) {
        return <Shimmer />
    }

    const { name, cuisines, costForTwoMessage, cloudinaryImageId, sla, avgRating } = menuItems?.cards[2]?.card?.card?.info;
    // console.log(menuItems?.cards[2]?.card?.card?.info)
    const { itemCards } = menuItems?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    const categories = menuItems?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");


    return (

        <>
            <div className="text-center ">
                <h1 className="text-3xl my-4.5 p-2 text-white bg-green-500 w-7/12 mx-auto rounded-md font-bold">{name}</h1>
                <div className="p-2 w-7/12 flex justify-between mx-auto text-left">
                    <div className="w-10/12">
                        <h2 className="text-lg text-amber-500 underline font-semibold">{cuisines.join(", ")}</h2>
                        <h3 className="text-lg font-semibold">{costForTwoMessage}</h3>
                        <div className="flex space-x-1">
                            <p className="text-md font-semibold text-gray-500">⭐{avgRating} </p>
                            <h4 className="pb-0.5 text-gray-500">●</h4>
                            <p className="text-md font-semibold text-gray-500">{sla.slaString}</p>
                        </div>
                    </div>
                    <div className="w-2/12">
                        <img src={CDN_LINK + cloudinaryImageId} alt="Image" className="rounded-md" />
                    </div>
                </div>
                {
                    categories.map((category) => <RestaurantCategories key={category.card.card.title} data={category.card.card} />)
                }
            </div>
        </>
    )
}

export default RestaurantMenu;