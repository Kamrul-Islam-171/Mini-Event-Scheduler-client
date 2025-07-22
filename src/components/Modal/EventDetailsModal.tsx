import React, { useEffect, useState } from "react";
import axios from "axios";
import type { TEvent } from "../../Interface/EventInferface";
import './modal.css'
import Loading from "../Loader/Loading";
import { getDate } from "../../utils/getDate";
import { getTime } from "../../utils/getTime";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  eventId: number | null;
}

const baseUrl = import.meta.env.VITE_API_URL;

const EventDetailsModal: React.FC<Props> = ({ isOpen, onClose, eventId }) => {
  const [event, setEvent] = useState<TEvent | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEvent = async () => {
      if (!eventId) return;

      setLoading(true);
      try {
        const res = await axios.get(`${baseUrl}/events/${eventId}`);
        setEvent(res?.data?.data);
        // console.log(res?.data?.data)
      } catch (err: any) {
        console.error("Error fetching event:", err.message);
      } finally {
        setLoading(false);
      }
    };

    if (isOpen) {
      fetchEvent();
    }
  }, [eventId, isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 modal-bg bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg w-[90%] max-w-md p-6">
        <h2 className="text-xl font-bold mb-4">Event Details</h2>
        {loading ? (
          <Loading></Loading>
        ) : event ? (
          <div>
            <p><strong>Title : </strong> {event?.title}</p>
            <p><strong>Category : </strong> {event?.category}</p>
            <p><strong>Status : </strong> {event?.archived ? "Archived" : "Not Archived"}</p>
            <p><strong>Date : </strong> {getDate(event?.date)}</p>
            <p><strong>Time : </strong> {getTime(event?.time)}</p>
            <p><strong>Notes : </strong> {event?.notes || "No Notes"}</p>
            
          </div>
        ) : (
          <p>No event found.</p>
        )}
        <button onClick={onClose} className="mt-6 bg-[var(--secondary-color)] text-white py-2 px-4 rounded hover:bg-[var(--primary-color)] cursor-pointer">
          Close
        </button>
      </div>
    </div>
  );
};

export default EventDetailsModal;
