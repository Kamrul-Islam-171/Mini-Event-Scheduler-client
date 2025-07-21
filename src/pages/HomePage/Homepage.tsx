// import Button from "../../components/Button/Button";
import Table from "../../components/Table/Table";
import '../../components/Button/button.css'
import EventModal from "../../components/Modal/EventModal";
import { useState } from "react";


const Homepage = () => {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleAddEvent = () => {
        
    }
    return (
        <div className="max-w-[1440px] m-auto lg:p-20 md:p-16 p-6">
            <div>
                <h1 className="text-5xl font-semibold text-center my-10 text-[var(--primary-color)]">Mini Event Scheduler</h1>
                <div className="flex justify-end">
                    <button onClick={() => setOpen(true)} className="button" >Add Event</button>
                    <EventModal isOpen={open} setLoading={setLoading} loading={loading} onClose={() => setOpen(false)} category="Personal" />
                </div>
                <div>
                    {/* table content */}
                    <Table></Table>
                </div>
            </div>
        </div>
    );
};

export default Homepage;