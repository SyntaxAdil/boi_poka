import React from "react";
import BookCard from "./BookCard";
import bookDetailes from "@/public/data/booksData.json";

const AllBooks = () => {
  return (
    <section className=" mt-15 md:mt-25 px-4">
      <h1 className="text-center font-bold text-4xl mb-10 ">Books</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {bookDetailes.map((book) => (
          <BookCard key={book.bookId} book={book} />
        ))}
      </div>
    </section>
  );
};

export default AllBooks;
