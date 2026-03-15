"use client";
import { useState, useEffect } from "react";
import bookData from "@/public/data/booksData.json";
import BookCard from "@/components/listed-books/BookCard";
import SortBy from "./../../components/listed-books/SortBy";
import { useWishList } from "@/context/WishList";
import FilterCategory from "@/components/listed-books/FilterCategory";

const AllBookList = () => {
  const { wishList, dltWish } = useWishList();
  const [selectOption, setSelectOption] = useState("Sort By");
  const [filterOption, setFilterOption] = useState("Classic");
  const [mounted, setMounted] = useState(false);

  const [category, setCategory] = useState([]);
  useEffect(() => {
    const arra=[]
    for (let categoryItem of bookData) {
     if(!arra.includes(categoryItem.category)){
      arra.push(categoryItem.category)
     }
    }

    setTimeout(()=>setCategory(arra),0)
  }, []);
  
  useEffect(() => {
    setTimeout(() => setMounted(true), 0);
  }, []);

  const sortByFn = (data) => {
    return [...data].sort((a, b) =>
      selectOption === "Rating"
        ? b.rating - a.rating
        : selectOption === "Number of pages"
          ? b.totalPages - a.totalPages
          : selectOption === "Publisher year"
            ? b.yearOfPublishing - a.yearOfPublishing
            : 0,
    );
  };

  
  const filtered=(data)=>{
    return data.filter(i=>i.category===filterOption )

  }

  

  return (
    <section>
      <div className="bg-base-200 border border-base-300 rounded-2xl py-14 px-6 text-center mb-10 space-y-3">
        <span className="text-xs font-medium text-success bg-success/10 px-3 py-1 rounded-full">
          Your reading space
        </span>
        <h1 className="text-4xl font-semibold tracking-tight mt-3">
          All <span className="text-success">Books</span>
        </h1>
        <p className="text-base-content/50 text-sm max-w-md mx-auto">
          Browse, sort, and wishlist your favourite reads.
        </p>
      </div>

      <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
        <p className="text-sm text-base-content/40">
          {bookData.length} books available
        </p>
        <SortBy selectOption={selectOption} setSelectOption={setSelectOption} />
        <div>
          <FilterCategory
            BookCard={category}
            setFilterOption={setFilterOption}
          />
        </div>
      </div>

      <div className="tabs tabs-lift">
        <label className="tab font-medium">
          <input type="radio" name="my_tabs_4" defaultChecked />
          All Books
          <span className="ml-2 text-xs bg-base-200 text-base-content/50 px-2 py-0.5 rounded-full">
            {bookData.length}
          </span>
        </label>
        <div className="tab-content bg-base-100 border-base-300 p-6">
          <div className="grid grid-cols-1 gap-4">
            {sortByFn(filtered(bookData)).map((book) => (
              <BookCard book={book} key={book.bookId} />
            ))}
          </div>
        </div>

        <label className="tab font-medium">
          <input type="radio" name="my_tabs_4" />
          Wishlist
          {mounted && wishList.length > 0 && (
            <span className="ml-2 text-xs bg-success/10 text-success px-2 py-0.5 rounded-full font-medium">
              {wishList.length}
            </span>
          )}
        </label>
        <div className="tab-content bg-base-100 border-base-300 p-6">
          {!mounted ? null : wishList.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 gap-3">
              <span className="text-5xl">📚</span>
              <p className="text-base-content/50 text-sm">
                Your wishlist is empty
              </p>
              <p className="text-base-content/30 text-xs">
                Add books from the list above
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4">
              {sortByFn(filtered(wishList)).map((book) => (
                <BookCard
                  book={book}
                  key={book.bookId}
                  dltWish={dltWish}
                  dltEnable
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AllBookList;
