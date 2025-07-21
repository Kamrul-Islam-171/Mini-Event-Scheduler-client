import type { TEvent } from "../../Interface/EventInferface";
import TableContents from "./TableContents";


const Table = ({events, setLoading} : {events : TEvent[], setLoading : React.Dispatch<React.SetStateAction<boolean>>}) => {
    return (
        <div>
            <TableContents setLoading={setLoading} events = {events}></TableContents>
        </div>
    );
};

export default Table;