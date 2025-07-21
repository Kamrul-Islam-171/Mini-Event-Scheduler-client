import Button from "../../components/Button/Button";
import Table from "../../components/Table/Table";


const Homepage = () => {
    return (
        <div className="max-w-[1440px] m-auto lg:p-20 md:p-16 p-6">
            <div>
                <h1 className="text-5xl font-semibold text-center my-10">Mini Event Scheduler</h1>
                <div className="flex justify-end">
                    <Button btnText ="Add Event"></Button>
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