import {ScaleLoader} from 'react-spinners'

const Loading = () => {
    return (
        <div className='my-10 flex items-center justify-center'>
            <ScaleLoader color='var(--primary-color)'/>
        </div>
    );
};

export default Loading;