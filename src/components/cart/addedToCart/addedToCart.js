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

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

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
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)}
          />
        ))
      )}
    </Container>
  );
}

export default AddedToCart;
