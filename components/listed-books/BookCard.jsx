import Image from "next/image";
import Link from "next/link";
import { CiCalendar, CiUser, CiFileOn } from "react-icons/ci";
import { IoPricetagOutline } from "react-icons/io5";

export default function BookCard({ book }) {
  return (
    <div className="card card-side bg-base-100 shadow-sm border border-base-200 p-4 gap-4 items-center">
      <figure className="bg-base-200 rounded-xl p-3 min-w-fit">
        <Image
          src={book.image}
          alt={book.bookName}
          width={80}
          height={172}
          className="object-contain rounded-lg"
        />
      </figure>

      <div className="flex flex-col gap-3 flex-1">
        <div>
          <h2 className="text-lg font-bold">{book.bookName}</h2>
          <p className="text-sm text-base-content/60">By : {book.author}</p>
        </div>

        <div className="flex items-center gap-3 flex-wrap text-sm">
          <span className="font-semibold">Tag</span>
          {book.tags?.map((tag) => (
            <span
              key={tag}
              className="badge badge-outline text-success border-success/40 bg-success/10 font-semibold"
            >
              #{tag}
            </span>
          ))}
          <span className="flex items-center gap-1 text-base-content/60">
            <CiCalendar className="text-base" />
            Year of Publishing: {book.yearOfPublishing}
          </span>
        </div>

        <div className="flex items-center gap-4 text-sm text-base-content/60 flex-wrap">
          <span className="flex items-center gap-1">
            <CiUser className="text-base" />
            Publisher: {book.publisher}
          </span>
          <span className="flex items-center gap-1">
            <CiFileOn className="text-base" />
            Page {book.totalPages}
          </span>
        </div>

        <div className="divider my-0" />

        <div className="flex items-center gap-3 flex-wrap">
          <span className="badge badge-info badge-soft rounded-full text-base-content/70 px-4 py-3">
            Category: {book.category}
          </span>
          <span className="badge bg-amber-100 text-amber-600 border-none px-4 py-3 font-semibold">
            Rating: {book.rating}
          </span>
          <Link href={`/books/${book.bookId}`}>
            <button className="btn btn-success btn-sm text-white px-5">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
