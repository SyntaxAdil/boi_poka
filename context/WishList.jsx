"use client";
import { createContext, useContext, useState } from "react";
import { toast, Slide } from "react-toastify";
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
    toast.success("Add to wishlist successfully!", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Slide,
    });
  };
  const dltWish = (book) => {
    if (!book) return;
    setWishList((p) => p.filter((i) => i.bookId !== book.bookId));
    toast.error("Remove from wishlist successfully!", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Slide,
    });
  };

  const value = { addToWishList, wishList, dltWish };
  return (
    <WishListContext.Provider value={value}>
      {children}
    </WishListContext.Provider>
  );
};

export default WishList;
