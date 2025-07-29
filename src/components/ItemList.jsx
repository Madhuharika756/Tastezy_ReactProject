import { useDispatch } from "react-redux";
import { CDN_LINK } from "../utils/constants";
import { addItem } from "../slices/cartSlice";

const ItemList = ({ itemCards }) => {
    console.log(itemCards);
    const dispatch = useDispatch();
    const handleAdd = (item)=>{
        dispatch(addItem(item));
    }
    return <div>
        <div>
            {
                itemCards.map((item) => {
                    return (
                        <div className="m-2 p-2 border-b-1" key={item?.card?.info?.id}>
                            <div className="flex justify-between text-left items-center ">
                                <div className="w-9/12 p-1 flex flex-col">
                                    <div className="flex items-center">
                                    <span className="text-lg font-semibold mr-3">{item?.card?.info?.name}</span>
                                    <button className="text-white bg-amber-500 hover:bg-amber-600 cursor-pointer font-bold px-3 py-1 rounded-md" onClick={() => {handleAdd(item);
                                        }}>Add</button>
                                     </div>
                                    <span className="font-semibold text-orange-500">₹{(item?.card?.info?.price) ? item?.card?.info?.price / 100 : item?.card?.info?.defaultPrice / 100}</span>
                                    <span className="text-gray-500 font-semibold">{item?.card?.info?.description}</span>
                                </div>
                                <div className="w-3/12 ">
                                    <img src={CDN_LINK + item?.card?.info?.imageId} alt="imageId" className="rounded-md" />
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
}

export default ItemList;