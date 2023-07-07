import { format } from 'date-fns';


function formatDate(createdAt:Date) {
    const formattedDate = format(new Date(createdAt), 'dd/MM/yyyy HH:mm:ss');
    return formattedDate;
}


const DateTimeUtils = {
    formatDate,
}

export default DateTimeUtils;