import './modal.css'

interface ConfirmModalProps {
  isOpen: boolean;
  message?: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmConfirmModal = ({ isOpen, message = "Are you sure?", onConfirm, onCancel }: ConfirmModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 modal-bg bg-opacity-40 flex items-center justify-center z-50 ">
      <div className="bg-white p-6 rounded-lg shadow-xl w-[90%] max-w-md">
        <h2 className="text-lg font-semibold text-[var(--primary-color)] mb-4">{message}</h2>
        <div className="flex justify-end gap-4">
          <button
            onClick={onCancel}
            className="bg-gray-200 text-gray-700 px-4 py-2 rounded cursor-pointer hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="bg-[var(--secondary-color)] text-white px-4 py-2 rounded cursor-pointer hover:bg-[var(--primary-color)] "
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmConfirmModal;
