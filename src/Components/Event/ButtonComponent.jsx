import { useDispatch, useSelector } from 'react-redux';
import { setSelectedIndex } from '../../redux/actionCreators/selectedIndexActionCreator';

const ButtonComponent = ({ name, index ,onClick}) => {
    const dispatch = useDispatch();
    const {eventTabSelected} = useSelector((state)=>state.userReducer)
    const handleClick = () => {
        dispatch(setSelectedIndex(index));
    };
    return (
      
            <button
                className={`rounded-md w-[30%] text-sm h-[25px] font-semibold ${eventTabSelected === name ? 'bg-[#05B7FD] text-white' : 'bg-[#E4E4E4] text-gray-600'
                    }`}
                     onClick={()=>onClick(name)}>
                {name}
            </button>
       
    );
}

export default ButtonComponent;
