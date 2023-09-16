import { Container, Button, CloseButton } from "react-bootstrap";

function Cart() {
  return (
    <div>
      <Container id="cart">
        <div>
          <CloseButton className="delButton" />
          Cart icon - Cart
        </div>

        <div>
          <img alt="clothing-item" />
          <h3>Clothing Item Description</h3>
          <p>size | colour</p>
          <p>quantity</p>
          <p>cost $</p>
          <p>- +</p>
        </div>

        <div>
          <div>Subtotal cost discount?</div>
          <div>checkout</div>
        </div>
      </Container>
      <Button variant="outline-primary">Checkout</Button>
    </div>
  );
}

export default Cart;
