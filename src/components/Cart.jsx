import { useSelector } from "react-redux";
import ItemList from "./ItemList";

const Cart = () =>{
    const cartItems = useSelector((store)=>store.cart.items);
    console.log(cartItems);
    return <div>
        <div className="text-center w-5/12 mx-auto">
            <h1 className="text-3xl m-2 font-bold">Cart Items</h1>
            <ItemList itemCards={cartItems} />
        </div>
    </div>
}

export default Cart;