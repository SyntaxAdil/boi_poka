"use client";
import { useState } from "react";
import bookData from "@/public/data/booksData.json";

import BookCard from "@/components/listed-books/BookCard";
import SortBy from "./../../components/listed-books/SortBy";
import { useWishList } from "@/context/WishList";

const AllBookList = () => {
  const { wishList, dltWish } = useWishList();
  const [selectOption, setSelectOption] = useState("Sort By");

  const sortByFn = (data) => {
    const sortData = [...data].sort((a, b) =>
      selectOption === "Rating"
        ? b.rating - a.rating
        : selectOption === "Number of pages"
          ? b.totalPages - a.totalPages
          : selectOption === "Publisher year"
            ? b.yearOfPublishing - a.yearOfPublishing
            : b - a,
    );

    return sortData;
  };

  return (
    <section>
      <h1 className="bg-base-300 w-full py-15 text-4xl text-center font-bold rounded-2xl">
        Books
      </h1>

      {/* sort by */}
      <div className="my-8 text-center">
        <SortBy selectOption={selectOption} setSelectOption={setSelectOption} />
      </div>

      {/* tab */}
      <div className="tabs tabs-lift mt-8">
        <label className="tab">
          <input type="radio" name="my_tabs_4" defaultChecked />
          Read Books
        </label>
        <div className="tab-content bg-base-100 border-base-300 p-6 space-y-5">
          {sortByFn(bookData).map((book) => (
            <BookCard book={book} key={book.bookId} />
          ))}
        </div>

        <label className="tab">
          <input type="radio" name="my_tabs_4" />
          WishList
        </label>
        <div className="tab-content bg-base-100 border-base-300 p-6">
          {wishList.length===0?
          <p className="text-center">Make a wish to read a book</p>
          :(
            sortByFn(wishList).map((book) => (
            <BookCard
              book={book}
              key={book.bookId}
              dltWish={dltWish}
              dltEnable
            />
          ))
          )}
        </div>
      </div>
    </section>
  );
};

export default AllBookList;
