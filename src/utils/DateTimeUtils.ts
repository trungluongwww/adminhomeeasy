import { format } from 'date-fns';


function formatDate(createdAt:Date) {
    const formattedDate = format(new Date(createdAt), 'dd/MM/yyyy HH:mm:ss');
    return formattedDate;
}


export default {
    formatDate,
}