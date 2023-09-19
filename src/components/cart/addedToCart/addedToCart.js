import { Container } from "react-bootstrap";
import CartItem from "../cartItem/cartItem";
import { useEffect, useState } from "react";

function AddedToCart() {
  const addedList = [];

  const [isEmpty, setIsEmpty] = useState(true);
  // const [addedItems, setAddedItems] = useState(addedList);

  // useEffect(() => {
  //   if (addedList !== "") {
  //     setIsEmpty(false);
  //   } else {
  //     setIsEmpty(true);
  //   }
  // }, [addedList]);

  return (
    <Container>
      {isEmpty ? (
        <h3>Cart is empty.</h3>
      ) : (
        addedList.map((item) => (
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
