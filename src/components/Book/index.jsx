import ToggleSwitch from "../ToggleSwitch";
import BookImage from "../../assets/book.png";
import { useState } from "react";
import { updateBook } from "../../services/books";

export const Book = ({ data }) => {
  const [isRead, setIsRead] = useState(data.status === "read");

  const changeBookStatus = async () => {
    try {
      await updateBook({ status: isRead ? "unread" : "read" }, data._id);
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
    <div className="border border-[#e0e0e0] rounded-xl p-5">
      <div className="flex gap-[15px]">
        <div className="h-[100px] w-[100px]">
          <img src={BookImage} />
        </div>
        <div className="w-[100%] relative">
          <div className="flex justify-between cursor-pointer hover:underline">
            {/* <h2 className="text-xl font-medium">{data.title}</h2> */}
            <a
        href={`/book/${data._id}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-lg font-semibold text-blue-600 hover:underline"
      >
        {data.title}
      </a>
            {/* <div className="flex gap-[10px]">
              <ToggleSwitch checked={isRead} onChange={handleToggle} />
            </div> */}
          </div>
          <div className="text-lg font-light italic">{data.author}</div>
          {/* <div className="text-base pt-2">{data.description}</div> */}
          <div className="absolute right-0 bottom-0">
              <ToggleSwitch checked={isRead} onChange={handleToggle} />
            </div>
        </div>
      </div>
    </div>
  );
};
