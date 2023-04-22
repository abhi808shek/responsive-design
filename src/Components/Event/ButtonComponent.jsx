import { useDispatch, useSelector } from 'react-redux';
import { setSelectedIndex } from '../../redux/actionCreators/selectedIndexActionCreator';

const ButtonComponent = ({ name, index }) => {
    const dispatch = useDispatch();
    const { selectedIndex } = useSelector((state) => state.selectedIndexReducer);
    const handleClick = () => {
        dispatch(setSelectedIndex(index));
    };
    return (
        <div>
            <button
                onClick={handleClick}
                className={`w-36 h-[2.2rem] rounded-md font-semibold ${selectedIndex === index ? 'bg-[#05B7FD] text-white' : 'bg-[#E4E4E4] text-gray-600'
                    }`}
            >
                {name}
            </button>
        </div>
    );
}

export default ButtonComponent;
