import { useDispatch, useSelector } from 'react-redux';
import { setSelectedIndex } from '../../redux/actionCreators/selectedIndexActionCreator';

const ButtonComponent = ({ name, index }) => {
    const dispatch = useDispatch();
    const { selectedIndex } = useSelector((state) => state.selectedIndexReducer);
    const handleClick = () => {
        dispatch(setSelectedIndex(index));
    };
    return (
      
            <button
                onClick={handleClick}
                className={`rounded-md w-[30%] text-sm h-[25px] font-semibold ${selectedIndex === index ? 'bg-[#05B7FD] text-white' : 'bg-[#E4E4E4] text-gray-600'
                    }`}
            >
                {name}
            </button>
       
    );
}

export default ButtonComponent;
