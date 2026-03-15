import BookCard from "./BookCard";
import bookDetails from "@/public/data/booksData.json";
import Link from "next/link";

const AllBooks = () => {
  return (
    <section className="mt-16 md:mt-24 px-4">

      <div className="text-center mb-12 space-y-3">
        <span className="text-xs font-medium text-success bg-success/10 px-3 py-1 rounded-full">
          Handpicked for you
        </span>
        <h1 className="text-4xl font-semibold tracking-tight mt-3">
          Featured <span className="text-success">Books</span>
        </h1>
        <p className="text-base-content/50 text-sm max-w-md mx-auto">
          A curated selection of must reads from timeless classics to modern favourites.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {bookDetails.slice(0, 9).map((book) => (
          <BookCard key={book.bookId} book={book} />
        ))}
      </div>

      <div className="flex flex-col items-center gap-2 mt-14">
        <Link
          href="/listed-books"
          className="btn btn-success text-white font-medium px-8 rounded-xl hover:bg-success/90 transition-all duration-150"
        >
          View All Books →
        </Link>
        <span className="text-xs text-base-content/30">{bookDetails.length} books available</span>
      </div>

    </section>
  );
};

export default AllBooks;