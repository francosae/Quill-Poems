import React, {useState, useEffect} from 'react'
import PostCard from '../../components/reusable/PostCard'
import { useLocation } from 'react-router-dom'
import API from '../../services/apiClient'
import CommentCard from '../../components/reusable/CommentCard'
import CommentCreationModal from '../../components/CommentCreationModal'
export default function Post({}) {
    const location = useLocation()
    const [postData, setPostData] = useState(null)
    useEffect(() => {
        async function fetchPostData(){
            const { data } = await API.fetchUserPost(location.pathname)
            setPostData(data)
        }
        fetchPostData()
    }, [])

  if (postData !== null) 
  return (
    <>
    <PostCard post={postData} />
    <label  htmlFor="createcomment" className='bg-[#180F70] w-[150px] rounded-md font-medium my-6 mx-auto py-3 text-[#EAE8FF] btn btn-primary modal-button'>
        Post Comment
    </label >
    <CommentCreationModal post={postData.id} />

    {postData?.comments?.map((comment, index) => {
        return <CommentCard key={index} data={comment} />
      })}

    </>
  )

  else return(
    <>
    Post Not Found
    </>
  )
}
