import { Button } from "react-bootstrap";
import Subtotal from "../subtotal/subtotal";

function CheckoutView() {
  return (
    <div>
      <Subtotal />
      <Button variant="outline-primary">Checkout</Button>
    </div>
  );
}

export default CheckoutView;
