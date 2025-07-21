import {ScaleLoader} from 'react-spinners'

const Loading = () => {
    return (
        <div className='h-screen flex items-center justify-center'>
            <ScaleLoader color='var(--primary-color)'/>
        </div>
    );
};

export default Loading;