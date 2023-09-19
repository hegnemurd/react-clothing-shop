import { Button, Card } from "react-bootstrap";
// import classes from "./ProductItem.module.css";

function ProductItem(props) {
  return (
    <Card style={{ width: "15rem" }} id={props.id} key={props.id}>
      <Card.Img src={props.img} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>${props.price}</Card.Text>
        <Card.Text>or 2 x ${props.discountPrice}</Card.Text>
        <Button>Add to cart</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductItem;
