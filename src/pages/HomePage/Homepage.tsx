// import Button from "../../components/Button/Button";
import Table from "../../components/Table/Table";
import "../../components/Button/button.css";
import EventModal from "../../components/Modal/EventModal";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../../components/Loader/Loading";
import NoData from "../../components/NotFound/NoData";
import Select from "react-select";

const options = [
  { value: "", label: "All" },
  { value: "Work", label: "Work" },
  { value: "Personal", label: "Personal" },
  { value: "Other", label: "Other" },
];

const customStyles = {
  control: (base: any) => ({
    ...base,
    padding: "6px",
    borderRadius: "8px",
    borderColor: "#d1d5db",
    boxShadow: "none",
    "&:hover": { borderColor: "#a3a3a3" },
  }),
  option: (base: any, state: any) => ({
    ...base,
    backgroundColor: state.isSelected
      ? "var(--primary-color)" // primary (active/selected)
      : state.isFocused
      ? "var(--secondary-color)" // focused (hover)
      : "white",
    color: state.isSelected ? "white" : "black",
    cursor: "pointer",
  }),
};

const baseUrl = import.meta.env.VITE_API_URL;
const Homepage = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [events, setEvents] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  
  const handleChange = (selectedOption: any) => {
    setSelectedCategory(selectedOption?.value || "");
    setLoading(true);
  };
  console.log(baseUrl)
  
  const getEvents = async () => {
    try {
      const res = await axios.get(
        `${baseUrl}/events?category=${selectedCategory}`
      );
      setEvents(res?.data?.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(events);

  useEffect(() => {
    getEvents();
  }, [loading,selectedCategory]);

  return (
    <div className="max-w-[1440px] m-auto lg:p-20 md:p-16 p-6">
      <div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center my-10 text-[var(--primary-color)]">
          Mini Event Scheduler
        </h1>
        <div className="flex justify-end">
          <div className="flex flex-col-reverse gap-4">
            <div className="w-full max-w-sm mx-auto">
              <Select
                options={options}
                onChange={handleChange}
                styles={customStyles}
                placeholder="Select Category"
              />

              {selectedCategory && (
                <p className="mt-4 text-sm text-gray-500">
                  Selected:{" "}
                  <span className="font-medium">{selectedCategory}</span>
                </p>
              )}
            </div>
            <button onClick={() => setOpen(true)} className="button ">
              Add Event
            </button>
          </div>
          <EventModal
            isOpen={open}
            setLoading={setLoading}
            loading={loading}
            onClose={() => setOpen(false)}
            category="Personal"
          />
        </div>
        <div>
          <h2 className=" mt-10 text-2xl lg:text-3xl text-[var(--primary-color)] font-medium bg-[var(--third-color)] py-4 px-5 rounded-xl">
            My Events
          </h2>
          {/* table content */}
          {loading ? (
            <Loading></Loading>
          ) : (
            <div>
              {events.length == 0 ? (
                <NoData></NoData>
              ) : (
                <Table setLoading={setLoading} events={events}></Table>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
