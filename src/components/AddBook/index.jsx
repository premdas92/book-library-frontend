import { useState } from "react";

export const AddBook = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("unread");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    // Title: 4-100 characters
    if (title.trim().length < 4 || title.trim().length > 100) {
      newErrors.title = "Title must be between 4 and 100 characters.";
    }

    // Author: 4-30 characters
    if (author.trim().length < 4 || author.trim().length > 30) {
      newErrors.author = "Author must be between 4 and 30 characters.";
    }

    // Description: 10-1000 characters
    if (description.trim().length < 10 || description.trim().length > 1000) {
      newErrors.description =
        "Description must be between 10 and 1000 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSubmit({ title, author, description, status });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="block text-gray-700 mb-1">Title</label>
          <input
            type="text"
            className={`w-full border ${
              errors.title ? "border-red-500" : "border-gray-300"
            } rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Author</label>
          <input
            type="text"
            className={`w-full border ${
              errors.author ? "border-red-500" : "border-gray-300"
            } rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          {errors.author && (
            <p className="text-red-500 text-sm mt-1">{errors.author}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Description</label>
          <textarea
            className={`w-full border ${
              errors.description ? "border-red-500" : "border-gray-300"
            } rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">{errors.description}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Status</label>
          <div className="flex items-center space-x-4">
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="radio"
                className="form-radio text-green-600"
                name="status"
                value="read"
                checked={status === "read"}
                onChange={(e) => setStatus(e.target.value)}
              />
              <span className="ml-2 text-gray-700">Read</span>
            </label>
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="radio"
                className="form-radio text-red-600"
                name="status"
                value="unread"
                checked={status === "unread"}
                onChange={(e) => setStatus(e.target.value)}
              />
              <span className="ml-2 text-gray-700">Unread</span>
            </label>
          </div>
          {errors.status && (
            <p className="text-red-500 text-sm mt-1">{errors.status}</p>
          )}
        </div>
      </form>
      <button
        onClick={handleSubmit}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition cursor-pointer justify-self-center flex mt-[20px]"
      >
        Submit
      </button>
    </div>
  );
};
