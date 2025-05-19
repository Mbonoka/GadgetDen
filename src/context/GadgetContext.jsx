import { createContext, useContext, useState } from 'react';

const GadgetContext = createContext();

export const useGadget = () => useContext(GadgetContext);

export const GadgetProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const addToCart = (item) => {
    setCart((prev) => [...prev, item]);
  };

  const addToWishlist = (item) => {
    if (!wishlist.some(w => w.name === item.name)) {
      setWishlist((prev) => [...prev, item]);
    }
  };

  const removeFromCart = (name) => {
    setCart((prev) => prev.filter((item) => item.name !== name));
  };

  const removeFromWishlist = (name) => {
    setWishlist((prev) => prev.filter((item) => item.name !== name));
  };

  return (
    <GadgetContext.Provider value={{ cart, wishlist, addToCart, addToWishlist, removeFromCart, removeFromWishlist }}>
      {children}
    </GadgetContext.Provider>
  );
};
