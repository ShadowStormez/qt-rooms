//Assets
import { PaginatorStyle } from './Paginator.Style';

//mui
// import { button } from '@mui/material';

const Paginator = () => {
    return (
        <PaginatorStyle>
            <div className='Paginator-Container'>
                <button className='page-btn active'>1</button>
                <button className='page-btn'>2</button>
                <button className='page-btn'>&gt;</button>
            </div>
        </PaginatorStyle>
    );
};

export default Paginator;
