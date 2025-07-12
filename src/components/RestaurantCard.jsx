import { CDN_LINK } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resCard } = props;
  const { name, cuisines, avgRating, cloudinaryImageId, sla } = resCard.info;
  return (
    <>
      <div className="relative w-[290px] m-4 rounded-t-4xl hover:rounded-2xl hover:scale-105 transition duration-300 ease-out">
        <div className="res-logo">
          <img src={CDN_LINK + cloudinaryImageId} alt="res-logo" className="w-full h-62 rounded-4xl" />
        </div>
        <div className="pl-3 mb-2 pb-2 rounded-b-2xl">
          <h3 className="text-lg font-bold" >{name}</h3>
          <div className="flex items-center space-x-0.5">
            <p className="text-md font-semibold ">⭐{avgRating}</p>
            <h4 className="pb-0.5">●</h4>
            <p className="text-md font-semibold">{sla.slaString}</p>
          </div>
          <h4 className="text-md font-semibold  text-gray-500">{cuisines.join(", ")}</h4>

        </div>
      </div>
    </>
  )
}

export default RestaurantCard;