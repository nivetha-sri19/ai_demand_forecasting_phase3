const Modal = ({
  isOpen,
  title,
  children,
  onClose
}) => {

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">

      <div className="bg-white rounded-xl p-6 w-[500px]">

        <div className="flex justify-between items-center mb-5">

          <h2 className="text-2xl font-bold">
            {title}
          </h2>

          <button
            onClick={onClose}
            className="text-red-500 text-xl"
          >
            X
          </button>

        </div>

        {children}

      </div>

    </div>
  );
};

export default Modal;