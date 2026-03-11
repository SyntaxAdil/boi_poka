import React from "react";
import BookCard from "./BookCard";
import bookDetailes from "@/public/data/booksData.json";
import Link from "next/link";
import Buttons from "./Buttons";

const AllBooks = () => {
  return (
    <section className=" mt-15 md:mt-25 px-4">
      <h1 className="text-center font-bold text-4xl mb-10 ">Books</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {bookDetailes.slice(0, 9).map((book) => (
          <BookCard key={book.bookId} book={book} />
        ))}
      </div>
      <div className="flex justify-center">
        <Link href="/listed-books">
          <Buttons content={"View All Books"} extraClass={"w-fit mt-15"} />
        </Link>
      </div>
    </section>
  );
};

export default AllBooks;
