export default function Modal({ title, children, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30">
      <div className="bg-white rounded shadow-lg relative w-[700px] h-[500px] flex flex-col overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 text-2xl"
            aria-label="Close Modal"
          >
            &times;
          </button>
        </div>
        <div className="flex-1 p-4 overflow-auto">{children}</div>
      </div>
    </div>
  );
}
