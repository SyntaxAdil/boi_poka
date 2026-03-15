"use client";
import { useWishList } from "@/context/WishList";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";

export default function BookDetail({ book }) {
  const { addToWishList, wishList } = useWishList();
  const { isSignedIn } = useUser();
  const exitInWishList = wishList.find((i) => i.bookId === book.bookId);
  const handleRead = () => {
    alert("First Sign In");
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 bg-base-100 border border-base-200 rounded-2xl overflow-hidden max-w-4xl w-full mx-auto shadow-sm">
      <div className="bg-success/5 flex items-center justify-center p-10 min-h-[400px] relative">
        <div className="absolute inset-0 bg-gradient-to-br from-success/10 to-transparent pointer-events-none hover-3d" />
        <figure className="max-w-100 rounded-2xl">
          <Image
            src={book.image}
            alt={book.bookName}
            width={200}
            height={280}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAABAAEDASIAAhEBAxEB/8QAFAABAAAAAAAAAAAAAAAAAAAACf/EABQQAQAAAAAAAAAAAAAAAAAAAAD/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AJQAB/9k="
            className="rounded-xl shadow-xl relative z-10 object-contain"
          />
        </figure>
      </div>

      <div className="flex flex-col gap-5 p-8 md:p-10 overflow-y-auto">
        <div>
          <span className="text-xs font-medium text-success bg-success/10 px-3 py-1 rounded-full">
            {book.category}
          </span>
          <h2 className="text-2xl font-semibold mt-3 tracking-tight">
            {book.bookName}
          </h2>
          <p className="text-sm text-base-content/50 mt-1">By {book.author}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {book.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs border border-success/30 text-success bg-success/5 px-2.5 py-1 rounded-full font-medium"
            >
              #{tag}
            </span>
          ))}
        </div>

        <p className="text-sm text-base-content/60 leading-relaxed border-l-2 border-success/30 pl-3">
          {book.review}
        </p>

        <div className="grid grid-cols-2 gap-3">
          {[
            { label: "Pages", value: book.totalPages },
            { label: "Rating", value: `⭐ ${book.rating}` },
            { label: "Publisher", value: book.publisher },
            { label: "Year", value: book.yearOfPublishing },
          ].map(({ label, value }) => (
            <div key={label} className="bg-base-200 rounded-xl px-4 py-3">
              <p className="text-[11px] text-base-content/40 uppercase tracking-widest mb-0.5">
                {label}
              </p>
              <p className="text-sm font-medium text-base-content truncate">
                {value}
              </p>
            </div>
          ))}
        </div>

        <div className="flex gap-3 pt-1">
          {!isSignedIn ? (
            <a
              href={book.readLink}
              onClick={() => handleRead}
              target="_blank"
              className={`flex-1 btn btn-sm rounded-xl border border-base-300 bg-base-100 hover:bg-base-200 text-base-content font-medium transition-all ${!isSignedIn ? "opacity-40 pointer-events-none" : ""}`}
            >
              Sign In to Read →
            </a>
          ) : (
            <a
              href={book.readLink}
              onClick={() => handleRead}
              target="_blank"
              className={`flex-1 btn btn-sm rounded-xl border border-base-300 bg-base-100 hover:bg-base-200 text-base-content font-medium transition-all `}
            >
              Read →
            </a>
          )}

          <button
            className={`flex-1 btn btn-sm rounded-xl font-medium transition-all ${
              exitInWishList
                ? "bg-success/10 text-success border border-success/30 cursor-default"
                : "bg-success text-white hover:bg-success/90 border-none"
            }`}
            disabled={!!exitInWishList}
            onClick={() => addToWishList(book)}
          >
            {exitInWishList ? "✓ Wishlisted" : "Wishlist"}
          </button>
        </div>
      </div>
    </div>
  );
}
