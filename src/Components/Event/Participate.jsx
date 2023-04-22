import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setPostData } from '../../redux/actionCreators/postActionCreator';
import moment from 'moment';
import { setSelectedIndex } from '../../redux/actionCreators/selectedIndexActionCreator';
import ImageIcon from '@mui/icons-material/Image';
import deleteIcon from '../../Assets/Images/Delete.png';

const Participate = () => {

    const dispatch = useDispatch();
    const [caption, setCaption] = useState('');
    const [image, setImage] = useState(null);
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [formError, setFormError] = useState('');

    // Function for timestamp
    const timestamp = (date) => {
        const now = moment();
        const postDate = moment(date);
        const diff = now.diff(postDate, 'minutes');

        if (diff < 1) {
            return 'just now';
        } else if (diff < 60) {
            return `${diff} minutes ago`;
        } else if (diff < 1440) {
            return `${Math.floor(diff / 60)} hours ago`;
        } else if (diff < 10080) {
            return `${Math.floor(diff / 1440)} days ago`;
        } else {
            return postDate.format('DD/MM/YYYY');
        }
    };

    const handleCaptionChange = (e) => {
        setCaption(e.target.value);
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleTermsChange = (e) => {
        setTermsAccepted(e.target.checked);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if caption and image are provided
        if (!caption || !image) {
            setFormError('Please provide both caption and image.');
            return;
        }

        // Check if terms are accepted
        if (!termsAccepted) {
            setFormError('Please accept the terms and conditions.');
            return;
        }

        // Submit the form data
        const formData = new FormData();
        formData.append('username', 'amal shakya');
        formData.append('caption', caption);
        formData.append('imageSrc', image);
        formData.append('timestamp', '2 hours ago');
        // TODO: Submit the form data using fetch or axios

        const post = {
            username: 'amal shakya',
            caption: caption,
            imageSrc: 'https://images.unsplash.com/photo-1671603221845-8dd3db802b7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            timestamp: '2 hours ago',
        }

        dispatch(setPostData(post));

        dispatch(setSelectedIndex(0));

        // Reset the form state
        setCaption('');
        setImage(null);
        setTermsAccepted(false);
        setFormError('');
    };

    return (
        <div className="p-6 bg-white rounded-lg shadow-md w-[40%]">
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <textarea
                        className="border border-gray-400 rounded px-3 py-2 h-[20vh] w-full focus:outline-none"
                        id="caption"
                        name="caption"
                        value={caption}
                        onChange={handleCaptionChange}
                        placeholder="Write Something..."
                        required
                    />
                </div>
                <hr className='w-full h-[0.1rem] bg-gray-500 mb-4' />
                {!image && (<div className="mb-4 flex justify-center items-center">
                    <label className="font-medium mb-1 w-full h-[50vh] flex flex-col items-center justify-center border border-gray-400 rounded-lg" htmlFor="image">
                        <ImageIcon style={{ height: "100px", width: "100px" }} className='text-[#7991BD]' />
                        <h1 className='font-semibold'>Add Image</h1>
                    </label>
                    <input
                        className="border border-gray-400 rounded hidden absolute"
                        type="file"
                        id="image"
                        name="image"
                        accept="image/*"
                        onChange={handleImageChange}
                        required
                    />
                </div>)}

                {image && (
                    <div className='w-full h-[50vh] relative flex flex-col items-center justify-center border border-gray-400 rounded-lg'>
                        <img src={URL.createObjectURL(image)} alt="image" className='h-full w-full object-contain' />
                        <img src={deleteIcon} alt="" className='absolute top-8 right-8 h-[40px] w-[40px] cursor-pointer' onClick={() => setImage(null)} />
                    </div>
                )}

                <div className="mb-4">
                    <input
                        className="mr-2"
                        type="checkbox"
                        id="terms"
                        name="terms"
                        checked={termsAccepted}
                        onChange={handleTermsChange}
                        required
                    />
                    <label className="inline-block font-medium" htmlFor="terms">
                        I accept the <a href="#">terms and conditions</a>.
                    </label>
                </div>
                <div className="mb-4 text-red-500">{formError}</div>
                <button
                    className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded"
                    type="submit"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Participate;
