import { useWishList } from "@/context/WishList";
import Image from "next/image";

export default function BookDetail({ book  }) {

  const {addToWishList,wishList} =useWishList()

  const exitInWishList=wishList.find(i=>i.bookId===book.bookId);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center bg-base-100 shadow-xl max-w-4xl w-full gap-10 p-10 mx-auto  space-y-5">
      <figure className="bg-base-200 px-10 py-12  flex items-center justify-center h-full">
        <Image
          src={book.image}
          alt={book.bookName}
          width={445}
          height={564}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAABAAEDASIAAhEBAxEB/8QAFAABAAAAAAAAAAAAAAAAAAAACf/EABQQAQAAAAAAAAAAAAAAAAAAAAD/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AJQAB/9k="
          className="rounded-lg shadow-2xl "
        />
      </figure>

      <div className="gap-3 space-y-4">
        <div className="space-y-2">
          <h2 className="card-title text-2xl font-bold">{book.bookName}</h2>
          <p className="text-sm text-base-content/60">By : {book.author}</p>

          <p className="text-base-content/70 italic">{book.category}</p>
        </div>

        <div className="divider my-4" />

        <p className="text-sm text-base-content/70 leading-relaxed">
          <span className="font-bold text-base-content">Review : </span>
          {book.review}
        </p>

        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-sm font-semibold">Tag</span>
          {book.tags.map((tag) => (
            <span
              key={tag}
              className="badge badge-outline text-success border-success/40 bg-success/10 font-semibold"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="divider my-0" />

        <div className="space-y-3 text-sm">
          <div className="flex gap-2">
            <span className="text-base-content/50">Number of Pages:</span>
            <span className="font-bold">{book.totalPages}</span>
          </div>
          <div className="flex gap-2">
            <span className="text-base-content/50">Publisher:</span>
            <span className="font-bold">{book.publisher}</span>
          </div>
          <div className="flex gap-2">
            <span className="text-base-content/50">Year of Publishing:</span>
            <span className="font-bold">{book.yearOfPublishing}</span>
          </div>
          <div className="flex gap-2">
            <span className="text-base-content/50">Rating:</span>
            <span className="font-bold">{book.rating}</span>
          </div>
        </div>

        <div className="divider my-4" />

        <div className="card-actions">
          <button className="btn btn-outline btn-sm px-6">Read</button>
          <button className="btn btn-accent btn-sm px-6" disabled={exitInWishList} onClick={()=>addToWishList(book)} >
            {exitInWishList ? "Wishlisted":"Wishlist"}
          </button>
        </div>
      </div>
    </div>
  );
}
