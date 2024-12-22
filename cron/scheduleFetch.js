import cron from 'node-cron';
import { fetchExternalData } from '../lib/fetchExternalData';


export default function ScheduleFetch() {
    cron.schedule('0 11 * * *', async () => {
        console.log('Running a task every day at midnight');
        await fetchExternalData();
    });
}