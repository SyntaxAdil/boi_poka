import data from "@/public/data/booksData.json";
import BookPage from "@/components/BookPage";

const SingleBookPage = async ({ params }) => {
  const { id } = await params;

  if (!id) return;
  const bookData = data.find((i) => i.bookId == id);

  if (!bookData) return <p>Book is not found found</p>;
  return (
    <BookPage book={bookData} />
    // <p>a</p>
  );
};

export default SingleBookPage;
