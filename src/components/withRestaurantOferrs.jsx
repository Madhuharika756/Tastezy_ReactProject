import RestaurantCard from "./RestaurantCard"

export const withRestaurantOffers = (RestaurantCard) => {
    return (props) => {
        const { aggregatedDiscountInfoV3 } = props.resCard.info;
        // console.log(aggregatedDiscountInfoV3);
        return (
            <>
                <div className="relative w-fit rounded-xl overflow-hidden">
                    <label className="absolute top-4 left-4 inline-block bg-gradient-to-r from-purple-600 to-pink-500 text-white px-2.5 py-1.5 text-sm font-semibold rounded-tl-4xl rounded-b-md rounded-tr-md  shadow-md z-10">
                        {aggregatedDiscountInfoV3.header+" "}{aggregatedDiscountInfoV3.subHeader}
                    </label>
                    <RestaurantCard {...props} />
                </div>
                </>
            )
    }
}

