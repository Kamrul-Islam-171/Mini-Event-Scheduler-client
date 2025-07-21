// import Button from "../../components/Button/Button";
import Table from "../../components/Table/Table";
import "../../components/Button/button.css";
import EventModal from "../../components/Modal/EventModal";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../../components/Loader/Loading";
import  NoData from "../../components/NotFound/NoData";

const baseUrl = import.meta.env.VITE_API_URL;
const Homepage = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [events, setEvents] = useState([]);

  const getEvents = async () => {
    try {
      
      const res = await axios.get(`${baseUrl}/events`);
      setEvents(res?.data?.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

//   console.log(events);

  useEffect(() => {
    
    getEvents();
  }, [loading]);

  
  return (
    <div className="max-w-[1440px] m-auto lg:p-20 md:p-16 p-6">
      <div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center my-10 text-[var(--primary-color)]">
          Mini Event Scheduler
        </h1>
        <div className="flex justify-end">
          <button onClick={() => setOpen(true)} className="button ">
            Add Event
          </button>
          <EventModal
            isOpen={open}
            setLoading={setLoading}
            loading={loading}
            onClose={() => setOpen(false)}
            category="Personal"
          />
        </div>
        <div>
            <h2 className=" mt-10 text-2xl lg:text-3xl text-[var(--primary-color)] font-medium bg-[var(--third-color)] py-4 px-5 rounded-xl">My Events</h2>
          {/* table content */}
          {loading ? (
            <Loading></Loading>
          ) : (
            <div>
                
                {!events ? <NoData></NoData> : <Table setLoading={setLoading} events={events}></Table>}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
