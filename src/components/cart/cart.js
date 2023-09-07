import { Container, Button, CloseButton } from "react-bootstrap";

function Cart() {
  return (
    <div>
      <Container id="cart">
        <CloseButton className="delButton" />
        {/* <Button className="delButton">X</Button> */}
        <img alt="clothing-item" />
        <h3>Clothing Item Description</h3>
        <p>size | colour</p>
        <p>quantity</p>
        <p>cost $</p>
        <p>- +</p>
      </Container>
      <Button variant="outline-primary">Checkout</Button>
    </div>
  );
}

export default Cart;
