import React, {useState, useEffect} from 'react'
import PostCard from '../../components/reusable/PostCard'
import { useLocation } from 'react-router-dom'
import API from '../../services/apiClient'
export default function Post({}) {
    const location = useLocation()
    const [postData, setPostData] = useState(null)
    console.log(location.pathname)
    useEffect(() => {
        async function fetchPostData(){
            const { data } = await API.fetchUserPost(location.pathname)
            setPostData(data)
        }
        fetchPostData()
    }, [])
    console.log(postData)
  return (
    <>
    {postData ? <PostCard post={postData} /> : <>nothing here</>}
    </>
  )
}
