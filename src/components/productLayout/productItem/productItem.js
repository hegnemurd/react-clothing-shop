import { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import CartContext from "../../../store/cart-context";
// import classes from "./ProductItem.module.css";

function ProductItem(props) {
  const cartCtx = useContext(CartContext);

  const handleAddToCart = () => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
    });
  };

  return (
    <Card style={{ width: "15rem" }} id={props.id} key={props.id}>
      <Card.Img src={props.img} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>${props.price}</Card.Text>
        <Card.Text>or 2 x ${props.discountPrice}</Card.Text>
        <Button onClick={handleAddToCart}>Add to cart</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductItem;
