import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getImageList } from '../../../../redux/actionCreators/rootsActionCreator'

const PostPhotos = () => {
  const dispatch = useDispatch()
  const reducerData = useSelector((state) => {
    return {
      profile: state.profileReducer.profile
    }
  })
  const { profile } = reducerData;

  useEffect(() => {
    dispatch(getImageList(profile.id))
  }, [])
  return (
    <div className="w-full grid sm:grid-cols-3 lg:grid-cols-4 gap-3 text-center rounded-xl p-2 h-[400px] bg-white">
      {[
        [1, 2, 3, 4].map(() => (
          <img
            src="./images/events.jpg"
            alt=""
            className="w-[150px] h-[100px] rounded-lg object-cover"
          />
        )),
      ]}
    </div>
  );
}

export default PostPhotos