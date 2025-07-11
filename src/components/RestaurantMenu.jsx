import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import RestaurantCategories from "./RestaurantCategories";
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

    const { name, cuisines, costForTwoMessage, sla } = menuItems?.cards[2]?.card?.card?.info;

    const { itemCards } = menuItems?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    const categories = menuItems?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
 
    return (

        <>
            <div className="text-center">
                <h1 className="text-3xl mt-4 font-bold">{name}</h1>
                <h2 className="text-lg font-semibold">{cuisines.join(", ")}</h2>
                <h3 className="text-lg font-semibold">{costForTwoMessage}</h3>
                <h3 className="text-lg font-semibold">{sla.deliveryTime} minutes</h3>
                {/* {
                    itemCards.map((item) => {
                        return (<div className="items-card" key={item.card.info.id}>
                            <h1>{item.card.info.name}</h1>
                            <ul>
                                <li>{item.card.info.category}</li>
                                <li>{item.card.info.description}</li>
                            </ul>
                        </div>)
                    })
                } */}

                {
                    categories.map((category)=> <RestaurantCategories key={category.card.card.title} data={category.card.card}/>)
                }
            </div>
        </>
    )
}

export default RestaurantMenu;