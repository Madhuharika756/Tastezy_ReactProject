import { useState } from "react";
import ItemList from "./ItemList";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const RestaurantCategories = ({ data }) => {
    console.log(data);

    const [showItems, setShowItems] = useState(false);
    const handleClick = () => {
        // console.log("Clicked")
        setShowItems(!showItems);
    }

    return <div >
        {/* header */}
        <div className="w-7/12 bg-gray-50 p-3 shadow-lg mx-auto my-3">
            <div className="flex justify-between hover:cursor-pointer" onClick={handleClick}>
                <span className="text-lg font-bold">{data.title} ({data.itemCards.length})</span>
                <span>🔽</span>
            </div>
            {/* Accodian */}
            <div>
                {showItems && <ItemList itemCards={data?.itemCards} />}
            </div>
        </div>
    </div>
}

export default RestaurantCategories;