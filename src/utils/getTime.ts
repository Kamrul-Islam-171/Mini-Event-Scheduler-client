import {format} from 'date-fns';

export const getTime = (time:string) => {
    
   
    const [hourStr, minStr] = time.split(':');
    const newDate = new Date();
    const hour = parseInt(hourStr);
    const min = parseInt(minStr)
    newDate.setHours(hour, min, 0);
    const t = format(newDate, 'h:mm a');
    return t;
}