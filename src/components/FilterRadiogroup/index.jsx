export default function FilterRadioGroup({ value, onChange }) {
  return (
    <div className="flex flex-col pt-[50px]">
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="radio"
          className="form-radio text-blue-600"
          name="filter"
          value="all"
          checked={value === "all"}
          onChange={onChange}
        />
        <span className="ml-2 text-gray-700">All</span>
      </label>

      <label className="inline-flex items-center cursor-pointer">
        <input
          type="radio"
          className="form-radio text-green-600"
          name="filter"
          value="read"
          checked={value === "read"}
          onChange={onChange}
        />
        <span className="ml-2 text-gray-700">Read</span>
      </label>

      <label className="inline-flex items-center cursor-pointer">
        <input
          type="radio"
          className="form-radio text-red-600"
          name="filter"
          value="unread"
          checked={value === "unread"}
          onChange={onChange}
        />
        <span className="ml-2 text-gray-700">Unread</span>
      </label>
    </div>
  );
}
