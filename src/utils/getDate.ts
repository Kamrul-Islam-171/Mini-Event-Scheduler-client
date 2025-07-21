import {format} from 'date-fns';

export const getDate = (date:string) => {
    
    const d = format(date, 'MM/dd/yyyy');
    return d;

}