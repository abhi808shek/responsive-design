import React, { useState } from "react";
import { BsImage } from "react-icons/bs";
import Portals from "../../Portals/Portals";
import CreatePostModal from "../Modal/CreatePostModal/CreatePostModal";

const PostForm = ({ width, bgColor }) => {
  const [showCreatePostModal, setShowCreatePostModal] = useState(false);
  const createPostModal = () => {
    setShowCreatePostModal(true);
  };
  return (
    <>
      
        <input
          type="text"
          placeholder="Write Your Thoughts....."
          className="  outline-none rounded-md"
        />
        <span className="mr-2">
          <BsImage size={25} />
        </span>
      {showCreatePostModal && (
        <Portals>
          <CreatePostModal
            title={"Create"}
            setShowCreatePostModal={setShowCreatePostModal}
            handleCloseModal={() => setShowCreatePostModal(false)}
          />

        </Portals>
      )}
    </>
  );
};

export default PostForm;
