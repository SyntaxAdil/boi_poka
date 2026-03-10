import React from "react";
import Image from "next/image";
import { CiStar } from "react-icons/ci";
import Link from "next/link";

const BookCard = ({ book }) => {
  return (
    <Link href={`/books/${book.bookId}`} className="transition-all duration-150 group border border-base-300 hover:border-success  bg-white p-6 rounded-md space-y-4">
      <div className="rounded-2xl bg-[#f3f3f3] flex items-center justify-center  overflow-hidden aspect-video relative p-10">
        <Image
          src={book.image}
          alt={book.bookName}
         fill
         sizes="300"
          className="object-contain group-hover:scale-110 transition-all duration-150 p-5"
          placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgo..."

        />
      </div>
      <div className="space-x-2">
        {book.tags.map((tag,index) => (
          <div className="badge bg-[#f4fcf3] text-[#3dc627] font-semibold  rounded-full" key={index}>
            {tag}
          </div>
        ))}
      </div>
      <div>
        <h4 className="text-2xl font-semibold mb-2 transition-colors duration-150 group-hover:text-success" >{book.bookName}</h4>
        <p className="text-xs ">By: {book.author}</p>
      </div>

      <div className="divider divide-dotted"></div>

      <div className="flex items-center justify-between">
        <p>{book.category}</p>
        <p className="flex gap-2 items-center">
          {book.rating}
          <CiStar />
        </p>
      </div>
    </Link>
  );
};

export default BookCard;
