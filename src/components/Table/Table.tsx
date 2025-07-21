import type { TEvent } from "../../Interface/EventInferface";
import TableContents from "./TableContents";


const Table = ({events} : {events : TEvent[]}) => {
    return (
        <div>
            <TableContents events = {events}></TableContents>
        </div>
    );
};

export default Table;