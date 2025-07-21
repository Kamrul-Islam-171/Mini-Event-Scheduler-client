import { FiEye } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import "./table.css";
import type { TEvent } from "../../Interface/EventInferface";
import { useState } from "react";
import ConfirmModal from "../Modal/ConfirmModal";
import toast from "react-hot-toast";
import axios from "axios";
import ConfirmConfirmModal from "../Modal/ConfirmUpdateModal";
import EventDetailsModal from "../Modal/EventDetailsModal";

const baseUrl = import.meta.env.VITE_API_URL;
const TableContents = ({
  events,
  setLoading,
}: {
  events: TEvent[];
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [updateId, setUpdateId] = useState<number | null>(null);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [updateconfirmOpen, setUpdateConfirmOpen] = useState(false);
  const [detailsId, setDetailsId] = useState<number | null>(null);
  const [detailsOpen, setDetailsOpen] = useState(false);

  const openConfirm = (id: number) => {
    setDeleteId(id);
    setConfirmOpen(true);
  };

  const openUpdateConfirm = (id: number) => {
    setUpdateId(id);
    setUpdateConfirmOpen(true);
  };

  const openDetails = (id: number) => {
    setDetailsId(id);
    setDetailsOpen(true);
  };

  const handleDelete = async () => {
    // console.log("del = ", deleteId);
    try {
      setLoading(true);
      const res = await axios.delete(`${baseUrl}/events/${deleteId}`);
      // console.log(res?.data?.message)
      toast.success(res?.data?.message);
    } catch (error: any) {
      toast.error(error?.message);
    }
  };

  const handleUpdate = async () => {
    try {
      setLoading(true);
      const res = await axios.put(`${baseUrl}/events/${updateId}`);
      toast.success(res?.data?.message);
    } catch (error: any) {
      toast.error(error?.message);
    }
  };
  return (
    <div className="overflow-x-auto rounded-xl my-10">
      <table className="w-[100%]">
        <thead>
          <tr>
            <th>Title</th>
            <th>Category</th>
            <th>Status</th>
            <th>Details</th>
            <th>Change Status</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {events?.map((event: TEvent) => (
            <tr key={event?.id} className="duration-300">
              <td className="p-2">{event?.title} </td>
              <td className="p-2">{event?.category}</td>
              <td className="p-2">
                {event?.archived ? "Archived" : "Not Archived"}
              </td>
              <td>
                <button
                  onClick={() => openDetails(event?.id)}
                  className="flex justify-center items-center button1  cursor-pointer  hover:bg-[var(--primary-color)] w-full py-2"
                >
                  <FiEye className="h-full text-xl" />
                </button>
              </td>
              <td>
                <button
                  onClick={() => openUpdateConfirm(event?.id)}
                  className="flex justify-center items-center button1  cursor-pointer  hover:bg-[var(--primary-color)] w-full py-2"
                >
                  <FaRegEdit className="h-full text-xl" />
                </button>
              </td>
              <td>
                <button
                  onClick={() => openConfirm(event?.id)}
                  className="flex justify-center items-center cursor-pointer button1  hover:bg-[var(--primary-color)] w-full py-2"
                >
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
      <ConfirmConfirmModal
        isOpen={updateconfirmOpen}
        onConfirm={handleUpdate}
        onCancel={() => setUpdateConfirmOpen(false)}
        message="Do you really want to update this event?"
      />
      <EventDetailsModal
        isOpen={detailsOpen}
        onClose={() => setDetailsOpen(false)}
        eventId={detailsId}
      />
    </div>
  );
};

export default TableContents;
