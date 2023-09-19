import AddedToCart from "../addedToCart/addedToCart";
import CheckoutView from "../checkout/checkoutView/checkoutView";

function Cart() {
  return (
    <div>
      <AddedToCart />
      <CheckoutView />
    </div>
  );
}

export default Cart;
