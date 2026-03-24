import { useState } from "react";
import { CartItem } from "../../lib/types/search";

const useBasket = () => {
  const cartJson = localStorage.getItem("cartData");
  const currentCart = cartJson ? JSON.parse(cartJson) : [];

  const [cartItems, setCartItem] = useState<CartItem[]>(currentCart);

  const onAdd = (input: CartItem) => {
    const exist = cartItems.find(item => item._id === input._id);

    let cartUpdate;

    if (exist) {
      cartUpdate = cartItems.map(item =>
        item._id === input._id
          ? { ...exist, quantity: exist.quantity + 1 }
          : item
      );
    } else {
      cartUpdate = [...cartItems, { ...input, quantity: 1 }];
    }

    setCartItem(cartUpdate);
    localStorage.setItem("cartData", JSON.stringify(cartUpdate));
  };

  const onRemove = (input: CartItem) => {
    const exist = cartItems.find(item => item._id === input._id);

    if (!exist) return;

    let cartUpdate;

    if (exist.quantity === 1) {
      cartUpdate = cartItems.filter(item => item._id !== input._id);
    } else {
      cartUpdate = cartItems.map(item =>
        item._id === input._id
          ? { ...exist, quantity: exist.quantity - 1 }
          : item
      );
    }

    setCartItem(cartUpdate);
    localStorage.setItem("cartData", JSON.stringify(cartUpdate));
  };

  const onDelete = (input: CartItem) => {
    const cartUpdate = cartItems.filter(
      item => item._id !== input._id
    );

    setCartItem(cartUpdate);
    localStorage.setItem("cartData", JSON.stringify(cartUpdate));
  };

  const onDeleteAll = () => {
    setCartItem([]);
    localStorage.removeItem("cartData");
  };

  return {
    cartItems,
    onAdd,
    onRemove,
    onDelete,
    onDeleteAll,
  };
};

export default useBasket;