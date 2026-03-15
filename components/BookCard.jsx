import Image from "next/image";
import { CiStar } from "react-icons/ci";
import Link from "next/link";

const BookCard = ({ book }) => {
  return (
    <Link
      href={`/books/${book.bookId}`}
      className="group flex flex-col bg-base-100 border border-base-200 hover:border-success/50 rounded-2xl overflow-hidden transition-all duration-200 hover:shadow-md"
    >
      <div className="bg-success/5 flex items-center justify-center aspect-[4/3] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-success/5 to-transparent pointer-events-none z-10" />
        <Image
          src={book.image}
          alt={book.bookName}
          fill
          sizes="300px"
          className="object-contain p-8 group-hover:scale-105 transition-transform duration-300"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgo..."
        />
      </div>

      <div className="flex flex-col gap-3 p-5 flex-1">
        <div className="flex flex-wrap gap-1.5">
          {book.tags.map((tag, index) => (
            <span
              key={index}
              className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-success/10 text-success"
            >
              #{tag}
            </span>
          ))}
        </div>

        <div>
          <h4 className="text-base font-semibold leading-snug group-hover:text-success transition-colors duration-150 line-clamp-2">
            {book.bookName}
          </h4>
          <p className="text-xs text-base-content/40 mt-1">By {book.author}</p>
        </div>

        <div className="mt-auto pt-3 border-t border-base-200 flex items-center justify-between">
          <span className="text-xs text-base-content/50 bg-base-200 px-2.5 py-1 rounded-full">
            {book.category}
          </span>
          <span className="flex items-center gap-1 text-sm font-medium text-amber-500">
            <CiStar size={16} />
            {book.rating}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;