import { CDN_LINK } from "../utils/constants";

const ItemList = ({ itemCards }) => {
    // console.log(itemCards)
    return <div>
        <div>
            {
                itemCards.map((item) => {
                    return (
                        <div className="m-2 p-2 border-b-1" key={item?.card?.info?.id}>
                            <div className="flex justify-between text-left items-center ">
                                <div className="w-9/12 p-1 flex flex-col">
                                    <span className="text-lg font-semibold">{item?.card?.info?.name}</span>
                                    <span className="font-semibold">₹{(item?.card?.info?.price) ? item?.card?.info?.price / 100 : item?.card?.info?.finalPrice / 100}</span>
                                    <span>{item?.card?.info?.description}</span>
                                </div>
                                <div className="w-3/12 ">
                                    <div className="absolute">
                                        <button className="text-white mx-0 bg-amber-500 hover:cursor-pointer font-bold py-2 px-4 rounded-md">Add+</button>
                                    </div>
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