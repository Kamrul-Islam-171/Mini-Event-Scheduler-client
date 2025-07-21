

const NoData = () => {
    return (
        <div className=" h-80 border-[var(--primary-color)] flex justify-center flex-col items-center my-10">
            <div className=" ">
                <img src="../../../public/nodata.png" className="w-full h-full" alt="" />
            </div>
            
            <h3 className="text-3xl text-[var(--primary-color)]">No Events</h3>
        </div>
    );
};

export default NoData;