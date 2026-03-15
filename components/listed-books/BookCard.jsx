import Image from "next/image";
import Link from "next/link";
import { CiCalendar, CiUser, CiFileOn } from "react-icons/ci";

export default function BookCard({ book, dltEnable = false, dltWish }) {
  return (
    <div className="group relative flex flex-col sm:flex-row bg-base-100 border border-base-200 hover:border-success/30 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-success/5">
      
      {dltEnable && (
        <button
          onClick={() => dltWish(book)}
          className="absolute right-3 top-3 z-10 w-7 h-7 rounded-full bg-base-200 hover:bg-red-500/10 hover:text-red-400 text-base-content/40 flex items-center justify-center transition-all duration-200 text-xs font-bold"
        >
          ✕
        </button>
      )}

      {/* Cover */}
      <div className="relative bg-success/5 flex items-center justify-center p-6 sm:min-w-36 sm:w-36 shrink-0">
        <div className="absolute inset-0 bg-gradient-to-br from-success/10 to-transparent" />
        <Image
          src={book.image}
          alt={book.bookName}
          width={80}
          height={112}
          className="relative z-10 rounded-lg shadow-md object-contain"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 p-4 flex-1 min-w-0">

        {/* Title + author */}
        <div>
          <h2 className="font-bold text-base leading-tight truncate pr-6">
            {book.bookName}
          </h2>
          <p className="text-xs text-base-content/50 mt-0.5 flex items-center gap-1">
            <CiUser className="shrink-0" />
            {book.author}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {book.tags?.map((tag) => (
            <span
              key={tag}
              className="text-xs badge badge-outline border-success/30 text-success bg-success/5 font-medium px-2 py-0.5"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Meta */}
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-base-content/50">
          <span className="flex items-center gap-1">
            <CiCalendar />
            {book.yearOfPublishing}
          </span>
          <span className="flex items-center gap-1">
            <CiFileOn />
            {book.totalPages} pages
          </span>
          <span className="flex items-center gap-1">
            <CiUser />
            {book.publisher}
          </span>
        </div>

        <div className="divider my-0" />

        {/* Footer */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="badge badge-soft badge-info text-xs rounded-full px-3 py-2.5">
            {book.category}
          </span>
          <span className="badge bg-amber-100 text-amber-600 border-none text-xs font-semibold px-3 py-2.5">
            ⭐ {book.rating}
          </span>
          <Link href={`/books/${book.bookId}`} className="ml-auto">
            <button className="btn btn-success btn-sm text-white px-5 rounded-xl">
              View Details
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
}