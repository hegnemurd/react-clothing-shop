import { Container } from "react-bootstrap";
import CartItem from "../cartItem/cartItem";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../../store/cart-context";

function AddedToCart() {
  // const cartItems = [];

  const [isEmpty, setIsEmpty] = useState(true);
  // const [addedItems, setAddedItems] = useState([]);

  // useEffect(() => {
  //   if (addedItems !== 0) {
  //     setIsEmpty(false);
  //   } else {
  //     setIsEmpty(true);
  //   }
  // }, [addedItems]);

  const cartCtx = useContext(CartContext);

  const itemsLength = cartCtx.items.length;

  useEffect(() => {
    if (itemsLength === 0) {
      return;
    }
    setIsEmpty(true);
  }, [itemsLength]);

  return (
    <Container>
      {isEmpty ? (
        <h3>Cart is empty.</h3>
      ) : (
        cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            id={item.id}
            img={item.img}
            clothingName={item.name}
            sizes={item.sizes}
            price={item.price}
            discountPrice={item.discountPrice}
          />
        ))
      )}
    </Container>
  );
}

export default AddedToCart;
