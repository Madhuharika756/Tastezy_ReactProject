import { useDispatch } from "react-redux";
import { CDN_LINK } from "../utils/constants";
import { addItem, removeItem } from "../slices/cartSlice";

const ItemList = ({ itemCards }) => {
  const dispatch = useDispatch();

  return (
    <div>
      {itemCards.map((item) => {
        const price =
          item.card.info.price
            ? item.card.info.price / 100
            : item.card.info.defaultPrice / 100;

        return (
          <div
            key={item.card.info.id}
            className="flex justify-between items-center border-b py-4"
          >
            <div className="w-8/12">
              <h2 className="font-bold text-lg">
                {item.card.info.name}
              </h2>
              <p className="text-orange-500 font-semibold">
                ₹{price}
              </p>
              <p className="text-gray-500 text-sm">
                {item.card.info.description}
              </p>

              <div className="flex items-center mt-2">
                <button
                  className="px-3 py-1 bg-red-400 text-white rounded"
                  onClick={() =>
                    dispatch(removeItem(item.card.info.id))
                  }
                >
                  Remove
                </button>

                <span className="mx-3 font-bold">
                  Qty: {item.quantity}
                </span>

                <button
                  className="px-3 py-1 bg-green-500 text-white rounded"
                  onClick={() => dispatch(addItem(item))}
                >
                  +
                </button>
              </div>
            </div>

            <div className="w-3/12">
              <img
                src={CDN_LINK + item.card.info.imageId}
                className="rounded-md"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
