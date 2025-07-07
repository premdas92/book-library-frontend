export default function ToggleSwitch({ checked, onChange }) {
  return (
    <div className="flex items-center space-x-4">
      <span className="text-sm font-medium text-gray-700">Unread</span>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="sr-only peer"
        />
        <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-green-500 transition-colors duration-200"></div>
        <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform duration-200 peer-checked:translate-x-5"></div>
      </label>
      <span className="text-sm font-medium text-gray-700">Read</span>
    </div>
  );
}
