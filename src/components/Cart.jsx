import { useSelector, useDispatch } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../slices/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const totalAmount = cartItems.reduce((total, item) => {
    const price =
      item.card.info.price
        ? item.card.info.price / 100
        : item.card.info.defaultPrice / 100;

    return total + price * item.quantity;
  }, 0);

  return (
    <div className="w-6/12 mx-auto mt-6">
      <h1 className="text-3xl font-bold text-center mb-4">
        Cart Items
      </h1>

      {cartItems.length === 0 ? (
        <h2 className="text-center text-xl">
          Your cart is empty 🍽️
        </h2>
      ) : (
        <>
          <ItemList itemCards={cartItems} />

          <div className="flex justify-between items-center mt-6 border-t pt-4 pb-1.5">
            <h2 className="text-xl font-bold">
              Total: ₹{totalAmount.toFixed(2)}
            </h2>

            <button
              className="bg-red-500 text-white px-4 py-2 rounded"
              onClick={() => dispatch(clearCart())}
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
