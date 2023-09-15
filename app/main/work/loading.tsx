
import { CircularProgress } from '@mui/material';

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <div className='flex flex-col items-center h-screen'>
            <CircularProgress thickness={5} sx={{color: 'black'}}/>
        </div>
    );
}