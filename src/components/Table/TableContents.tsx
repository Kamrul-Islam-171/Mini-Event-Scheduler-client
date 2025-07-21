import { FiEye } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";

import "./table.css";
import type { TEvent } from "../../Interface/EventInferface";
import { useState } from "react";
import ConfirmModal from "../Modal/ConfirmModal";
import toast from "react-hot-toast";
import axios from "axios";


const baseUrl = import.meta.env.VITE_API_URL;
const TableContents = ({ events, setLoading }: { events: TEvent[], setLoading: React.Dispatch<React.SetStateAction<boolean>> }) => {
   const [deleteId, setDeleteId] = useState<number | null>(null);
  const [confirmOpen, setConfirmOpen] = useState(false);

  const openConfirm = (id: number) => {
    setDeleteId(id);
    setConfirmOpen(true);
  };

  const handleDelete = async() => {
    // console.log("del = ", deleteId);
    try {
      setLoading(true)
      const res = await axios.delete(`${baseUrl}/events/${deleteId}`);
      // console.log(res?.data?.message)
      toast.success(res?.data?.message);
      
    } catch (error:any) {
      toast.error(error?.message)
    }
  }
  return (
    <div className="overflow-x-auto rounded-xl my-10">
      <table className="w-[100%]">
        <thead>
          <tr>
            <th>Title</th>
            <th>Category</th>
            <th>Status</th>
            <th>Details</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {events?.map((event: TEvent) => (
            <tr key={event?.id} className="duration-300">
              <td>{event?.title} </td>
              <td>{event?.category}</td>
              <td>{event?.archived? 'Archived' : 'Not Archived'}</td>
              <td>
                <button className="flex justify-center items-center button1  cursor-pointer  hover:bg-[var(--primary-color)] w-full py-2">
                  <FiEye className="h-full text-xl" />
                </button>
              </td>
              <td>
                <button onClick={() => openConfirm(event?.id)} className="flex justify-center items-center cursor-pointer button1  hover:bg-[var(--primary-color)] w-full py-2">
                  <MdDeleteOutline className="h-full text-xl" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ConfirmModal
        isOpen={confirmOpen}
        onConfirm={handleDelete}
        onCancel={() => setConfirmOpen(false)}
        message="Do you really want to delete this event?"
      />
    </div>
  );
};

export default TableContents;
