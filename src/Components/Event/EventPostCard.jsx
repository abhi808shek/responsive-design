import React, { useEffect, useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IconButton } from '@mui/material';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import kicksBeforeLike from '../../Assets/Images/Kicks before like.png';
import kicksShare from '../../Assets/Images/Kicks Share.png';
import kicksAfterLike from '../../Assets/Images/Kicks Like.png';
import SendIcon from '@mui/icons-material/Send';
import { useDispatch, useSelector } from 'react-redux';
import { setLikes } from '../../redux/actionCreators/postActionCreator';
import CommentModal from './CommentModel';


const EventPostCard = (props) => {
    const dispatch = useDispatch();
    const { username, timestamp, caption, imageSrc, id,likecount ,item} = props;
    const { posts } = useSelector((state) => state.postReducer);

    const post = posts.find(post => post.id === id);

    const [liked, setLiked] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handleLikeClick = () => {
        if (!liked) {
            dispatch(setLikes({ id, operation: 'inc' }));
        } else {
            dispatch(setLikes({ id, operation: 'dec' }))
        }
        setLiked(prevLiked => !prevLiked);
    };

    const handleCommentCountClick = () => {
        console.log(post.comments);
        setShowModal(true);
    };

    return (
        <div className="rounded-[20px] border border-gray-200 p-4 bg-white w-full">
            <div className='flex justify-between'>
                <div className="flex items-center mb-4">
                    <AccountCircleIcon className='mr-2' style={{ height: "40px", width: "40px" }} />
                    <div className="flex flex-col">
                        <span className="text-[1.15rem] font-bold text-gray-900">{item?.profile?.fname}</span>
                        <div className='flex gap-1 mt-1'>
                            <AccessTimeIcon style={{ height: "15px", width: "15px" }} />
                            <span className="text-xs text-gray-500">{timestamp}</span>
                        </div>
                    </div>
                </div>
                <div>
                    <MoreHorizIcon className='cursor-pointer' />
                </div>
            </div>
            <div className="mb-4">
                <p className="text-sm text-gray-700">{item?.text}</p>
            </div>
            <div className='w-full h-[0.05rem] bg-gray-400 mb-2'></div>
            <div className="mb-4">
                <img src={item?.image} alt="Post" className="w-full h-[300px] rounded-lg" />
            </div>
            <div className='w-full h-[0.05rem] bg-gray-400 mb-2'></div>
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                    <p className='cursor-pointer'>{item?.likecount} Likes</p>
                </div>
                <div>
                    <p className='cursor-pointer' onClick={handleCommentCountClick}>{item?.commentcount} comments</p>
                </div>
            </div>
            <div className='w-full h-[0.05rem] bg-gray-400 mb-3'></div>
            <div className="flex items-center justify-center gap-8 relative">
                <div>
                    {liked && <img src={kicksAfterLike} className='h-[40px] w-[40px] cursor-pointer absolute bottom-[0.03rem] left-1' alt="like" onClick={handleLikeClick} />}
                    {!liked && <img src={kicksBeforeLike} className='h-[40px] w-[40px] cursor-pointer absolute bottom-[0.03rem] left-1' alt="like" onClick={handleLikeClick} />}
                </div>

                <input type="text" placeholder="Add your comment ..." className="w-[80%] py-2 px-3 rounded-lg border border-gray-400 focus:outline-none focus:border-blue-400" />
                <SendIcon className='absolute right-16 bg-[#7991BD] p-1 rounded-[100%] text-white cursor-pointer' style={{ height: "30px", width: "30px" }} />

                <div>
                    <img src={kicksShare} className='h-[40px] w-[40px] cursor-pointer absolute right-0 bottom-1' alt="share" />
                </div>
            </div>
            <CommentModal isOpen={showModal}
                onClose={() => setShowModal(false)}
                // comments={post.comments} 
                />
        </div>
    );
}

export default EventPostCard;



