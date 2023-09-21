import {
  Container,
  CloseButton,
  Button,
  ButtonGroup,
  Row,
  Col,
} from "react-bootstrap";
import classes from "./CartItem.module.css";

function CartItem(props) {
  return (
    <Container id="cart">
      <div>
        <Row>
          <Col>
            <img src={props.img} alt={props.name} className={classes.img} />
          </Col>
          <Col>
            <p>{props.name}</p>
            <p>{props.sizes}</p>
            <p>quantity</p>
          </Col>
          <Col>
            <CloseButton className="delButton" />
            <p>${props.price}</p>
            <ButtonGroup>
              <Button onClick={props.onRemove}>-</Button>
              <Button onClick={props.onAdd}>+</Button>
            </ButtonGroup>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default CartItem;
