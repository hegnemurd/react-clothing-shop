import { Container, Row, Col } from "react-bootstrap";
import Products from "../products/products";
import SizeFilter from "../sizeFilter/sizeFilter";

function ProductView() {
  return (
    <Container fluid>
      <Row>
        <Col xs={2}>
          <SizeFilter />
        </Col>
        <Col xs={10}>
          <Products />
        </Col>
      </Row>
    </Container>
  );
}

export default ProductView;
