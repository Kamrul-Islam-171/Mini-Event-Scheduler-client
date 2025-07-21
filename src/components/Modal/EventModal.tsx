import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import "./modal.css";
// import { format } from "date-fns";
import toast from "react-hot-toast";
import { BiLoaderCircle } from "react-icons/bi";

import axios from 'axios'

const baseUrl = import.meta.env.VITE_API_URL;
interface EventModalProps {
  isOpen: boolean;
  loading:boolean;
  onClose: () => void;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  category?: "Work" | "Personal" | "Other";
}

const EventModal = ({ isOpen, onClose, setLoading, loading, category = "Work" }: EventModalProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  

  const onSubmit: SubmitHandler<FieldValues> = async(data) => {
    // console.log("Form Data:", data);

    try {
      setLoading(true)
      const eventData = {
        title: data?.title,
        date: data?.date,
        time:data?.time,
        notes: data?.notes
      }
      // ${import.meta.env.BACKEND_URL}
      const res = await axios.post(`${baseUrl}/events`,eventData );
      // console.log(res?.data?.data);
      toast.success('Event Added')
      // setLoading(false)
    } catch (error:any) {
      toast.error(error?.message);
      setLoading(false)
    }
   
    onClose(); 
    reset()
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 modal-bg bg-opacity-50 flex items-center justify-center z-50">
      <div
        className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-lg"
        style={{
          borderTop: "6px solid var(--primary-color)",
          backgroundColor: "var(--secondary-color)",
          color: "#fff",
        }}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Create Event</h2>
          <button
            className="text-white text-xl font-bold cursor-pointer hover:text-gray-300"
            onClick={onClose}
          >
            &times;
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Title */}
          <div>
            <label className="block text-sm mb-1">Title *</label>
            <input
              {...register("title", { required: "Title is required" })}
              className="w-full px-3 py-2 rounded-lg outline-0 border-[var(--primary-color)] border-2"
              type="text"
            />
            {typeof errors.title?.message === "string" && (
              <p className="text-red-400 text-sm">{errors.title.message}</p>
            )}
          </div>

          {/* Date */}
          <div>
            <label className="block text-sm mb-1">Date *</label>
            <input
              {...register("date", { required: "Date is required" })}
              className="w-full px-3 py-2 rounded-lg outline-0 border-[var(--primary-color)] border-2"
              type="date"
            />
            {typeof errors.date?.message === "string" && (
              <p className="text-red-400 text-sm">{errors.date.message}</p>
            )}
          </div>

          {/* Time */}
          <div>
            <label className="block text-sm mb-1">Time *</label>
            <input
              {...register("time", { required: "Time is required" })}
              className="w-full px-3 py-2 rounded-lg outline-0 border-[var(--primary-color)] border-2"
              type="time"
            />
            {typeof errors.time?.message === "string" && (
              <p className="text-red-400 text-sm">{errors.time.message}</p>
            )}
          </div>

          {/* Notes */}
          <div>
            <label className="block text-sm mb-1">Notes</label>
            <textarea
              {...register("notes")}
              className="w-full px-3 py-2 rounded-lg outline-0 border-[var(--primary-color)] border-2"
              rows={3}
              placeholder="Optional"
            />
          </div>

          {/* Category (readonly/display-only) */}
          {/* <div>
            <label className="block text-sm mb-1">Category</label>
            <input
              value={category}
              readOnly
              className="w-full px-3 py-2 rounded-lg text-gray-600 bg-gray-100 cursor-not-allowed"
            />
          </div> */}

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="bg-white cursor-pointer text-[var(--primary-color)] font-bold px-5 py-2 rounded-lg hover:bg-gray-100"
            >
              {loading ? <BiLoaderCircle className="animate-spin text-xl" />: "Save"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EventModal;
