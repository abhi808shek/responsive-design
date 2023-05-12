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
    <div>PostPhotos</div>
  )
}

export default PostPhotos