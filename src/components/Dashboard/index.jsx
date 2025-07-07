import { useEffect, useState } from "react";
import { Book } from "../Book";
import {
  createBook,
  getAllBooks,
  getBooksByStatus,
  searchBook,
} from "../../services/books";
import { useFilter } from "../../context/FilterContext";
import Modal from "../Modal";
import { AddBook } from "../AddBook";

export const Dashboard = () => {
  const [books, setBooks] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const { filter } = useFilter();

  const getBooks = () => {
    if (filter === "all") {
      getAllBooks()
        .then((res) => setBooks(res.data))
        .catch((err) => console.error("Failed to fetch books:", err));
    } else {
      getBooksByStatus(filter)
        .then((res) => setBooks(res.data))
        .catch((err) => console.error("Failed to fetch filtered books:", err));
    }
  };
  useEffect(() => {
    getBooks();
  }, [filter]);

  const openAddBookModal = () => {
    setOpenModal(true);
  };

  const handleAddBookSubmit = async ({
    title,
    author,
    description,
    status,
  }) => {
    const bookData = {
      title,
      author,
      description,
      status,
    };
    try {
      await createBook(bookData);
      alert("Book created successfully");
      setOpenModal(false);
      getBooks();
    } catch (err) {
      alert(err.response.data.error);
    }
  };

  function debounce(fn, delay) {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn.apply(this, args);
      }, delay);
    };
  }

  const handleSearch = debounce((e) => {
    searchBook(e.target.value)
      .then((res) => {
        setBooks(res?.data);
      })
      .catch((err) => {
        alert("Something went wrong", err);
      });
  }, 1000);

  return (
    <div className="w-full md:w-[75%] p-[40px] overflow-y-auto">
      <div>
        <h1 className="text-3xl font-semibold">Book Library</h1>
        <div className="flex justify-between mt-[20px]">
          <input
            type="text"
            placeholder="Search books..."
            className="w-[90%] pl-10 pr-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition bg-white rounded-xl pl-[20px]"
            onChange={handleSearch}
          />
          <button
            className="px-[10px] py-[8px] rounded-md bg-[#0077b6] text-white cursor-pointer"
            onClick={openAddBookModal}
          >
            Add Book
          </button>
        </div>
        {books?.length > 0 ? (
          <div className="mx-auto grid grid-cols-1  md:grid-cols-2 gap-[10px] mt-5 mb-5">
            {books.map((book) => {
              return <Book key={book._id} data={book} />;
            })}
          </div>
        ) : (
          <h3 className="text-center py-[80px]">No books found</h3>
        )}
      </div>
      {openModal && (
        <Modal title={"Add a book"} onClose={() => setOpenModal(false)}>
          <AddBook onSubmit={handleAddBookSubmit} />
        </Modal>
      )}
    </div>
  );
};
