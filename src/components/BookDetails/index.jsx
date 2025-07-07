import { useEffect, useState } from "react";
import { getBookById } from "../../services/books";
import { useParams } from "react-router-dom";
import ToggleSwitch from "../ToggleSwitch";
import BookImage from "../../assets/book.png";
import { updateBook } from "../../services/books";

export const BookDetails = () => {
  const [bookData, setBookData] = useState([]);
  const [isRead, setIsRead] = useState("");
  const { id } = useParams();
  useEffect(() => {
    getBookById(id)
      .then((res) => {
        setBookData(res?.data);
        setIsRead(res?.data.status === "read");
      })
      .catch((err) => {
        alert("Something went wrong", err);
      });
  }, []);
  
  const changeBookStatus = async () => {
    try {
      await updateBook({ status: isRead ? "unread" : "read" }, bookData._id);
      alert("Status updated successfully");
    } catch (err) {
      alert("Something went wrong", err);
    }
  };

  const handleToggle = () => {
    const newStatus = !isRead;
    setIsRead(newStatus);
    changeBookStatus();
  };

  return (
    <div className="grid h-[100vh] place-content-center w-[50%] m-auto">
      <div className="border border-[#e0e0e0] rounded-xl p-5">
        <div className="flex gap-[15px]">
          <div className="h-[100px] w-[100px]">
            <img src={BookImage} />
          </div>
          <div className="w-[100%]">
            <div className="flex justify-between">
              <h2 className="text-xl font-medium">{bookData.title}</h2>
              <div className="flex gap-[10px]">
            <ToggleSwitch checked={isRead} onChange={handleToggle} />
          </div>
            </div>
            <div className="text-lg font-light italic">{bookData.author}</div>
            <div className="text-base pt-2">{bookData.description}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
