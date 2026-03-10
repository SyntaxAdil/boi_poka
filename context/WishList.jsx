"use client";
import { createContext, useContext, useState } from "react";

const WishListContext = createContext(null);
export const useWishList = () => useContext(WishListContext);

const WishList = ({ children }) => {
  const [wishList, setWishList] = useState([]);

  const addToWishList = (book) => {
    if (!book) return;
    
    setWishList((prev) => {
      if (prev.find((i) => i.bookId === book.bookId)) return prev;

      return [...prev, book];
    });
  };
  const dltWish = (book) => {
    if (!book) return;
    setWishList((p) => p.filter((i) => i.bookId !== book.bookId));
  };

  const value = { addToWishList, wishList, dltWish };
  return (
    <WishListContext.Provider value={value}>
      {children}
    </WishListContext.Provider>
  );
};

export default WishList;
