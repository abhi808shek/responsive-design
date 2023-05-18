import React, { useState } from "react";
import { BsImage } from "react-icons/bs";
import Portals from "../../Portals/Portals";
import CreatePostModal from "../Modal/CreatePostModal/CreatePostModal";

const PostForm = ({ width, bgColor }) => {
  // const [showCreatePostModal, setShowCreatePostModal] = useState(false);
  const [state,setState] = useState({});
  const { showModal} = state
  const createPostModal = () => {
    setState({...state, showModal: true})
  };
  return (
    <div className="flex justify-between w-full" onClick={createPostModal}>
        <input
          type="text"
          placeholder="Write Your Thoughts....."
          className="outline-none rounded-md"
        />
        <span className="mr-2">
          <BsImage size={25} />
        </span>
      {showModal && (
        <Portals>
          <CreatePostModal
            title={"Create"}
            // setShowCreatePostModal={setShowCreatePostModal}
            handleCloseModal={() => {
              setState(prev => ({...prev, showModal: false}))
            }}
          />
        </Portals>
      )}
    </div>
  );
};

export default PostForm;
