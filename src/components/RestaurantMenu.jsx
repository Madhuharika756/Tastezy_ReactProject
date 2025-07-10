import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = ()=>{
    const [menuItems,setMenuItems] = useState(null);
    const {resId} = useParams();
  
    useEffect(()=>{
        fetchData();
    },[]);
    const fetchData = async()=>{
        const data = await fetch("https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId="+resId);
        const json = await data.json();
        console.log(json);
        setMenuItems(json.data);
    };
    if(!menuItems){
        return <Shimmer/>
    }
    
    const{name,cuisines,costForTwoMessage,sla}= menuItems?.cards[2]?.card?.card?.info;

    const{itemCards} = menuItems?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card?.card;
    console.log(itemCards);

    
    return(
        
        <>
            <div className="restaraunt-menu">
                <h1>{name}</h1>
                <h2>{cuisines.join(", ")}</h2>
                <h3>{costForTwoMessage}</h3>
                <h3>{sla.deliveryTime} minutes</h3>
                    {
                        itemCards.map((item)=>{
                            return (<div className="items-card"  key={item.card.info.id}>
                                <h1>{item.card.info.name}</h1>
                                <ul>
                                    <li>{item.card.info.category}</li>
                                    <li>{item.card.info.description}</li>
                                </ul>
                            </div>)
                        })
                    }
            </div>
        </>
    )
}

export default RestaurantMenu;