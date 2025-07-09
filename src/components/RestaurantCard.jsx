import { CDN_LINK } from "../utils/constants";

const RestaurantCard = (props) => {
  const {resCard} = props;
  const {name,cuisines,avgRating,cloudinaryImageId} = resCard.info;
  return (
    <>
      <div className="restuarantCard">
        <div className="res-logo">
          <img src={CDN_LINK+cloudinaryImageId} alt="res-logo" className="res-img" />
        </div>
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} Star</h4>
        <h4>{resCard.info.sla.deliveryTime} minutes</h4>
      </div>
    </>
  )
}

export default RestaurantCard;