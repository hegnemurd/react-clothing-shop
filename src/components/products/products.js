import { Container, Row } from "react-bootstrap";
import ProductItem from "../productItem/productItem";
import { clothingItems } from "../../models/clothingItems";

function Products() {
  return (
    <Container>
      <Row>
        {clothingItems.map((item) => (
          <ProductItem
            key={item.id}
            id={item.id}
            img={item.img}
            clothingName={item.name}
            price={item.price}
            discountPrice={item.discountPrice}
          />
        ))}
      </Row>
    </Container>
  );
}

export default Products;
