import { Container, Row, Col } from "react-bootstrap";
import Products from "../products/products";
import SizeFilter from "../sizeFilter/sizeFilter";

function ProductView(clothingItems) {
  // when size is clicked, then it is chosen
  // clothes which are in stock in that size are shown
  // can be size or sizes, depending on how many size/s are chosen
  const handleChoice = (wantedSizes) => {
    console.log(wantedSizes.value);
  };
  return (
    <Container fluid>
      <Row>
        <Col xs={2}>
          <SizeFilter onChoice={handleChoice} />
        </Col>
        <Col xs={10}>
          <Products />
        </Col>
      </Row>
    </Container>
  );
}

export default ProductView;
