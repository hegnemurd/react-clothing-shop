import { Container, Row, Col } from "react-bootstrap";
import Products from "../products/products";
import SizeFilter from "../sizeFilter/sizeFilter";

function ProductView() {
  return (
    <Container>
      <Row>
        <Col>
          <SizeFilter />
        </Col>
        <Col>
          <Products />
        </Col>
      </Row>
    </Container>
  );
}

export default ProductView;
