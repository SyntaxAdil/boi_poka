"use client";
import data from "@/public/data/booksData.json";
import BookPage from "@/components/BookPage";
import { useParams } from "next/navigation";
import { useState } from "react";

const SingleBookPage = () => {
  const { id } = useParams();

  if (!id) return;
  const bookData = data.find((i) => i.bookId == id);

  if (!bookData) return <p>Book is not found found</p>;
  return (
    <BookPage book={bookData} />
    // <p>a</p>
  );
};

export default SingleBookPage;
