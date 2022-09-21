import React from 'react'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import PostCard from '../../components/reusable/PostCard'
import API from '../../services/apiClient'
import ProfileCard from '../../components/reusable/ProfileCard'
export default function Profile() {
    const [userData, setUserData] = useState(null)
    const location = useLocation()
    useEffect(() => {
      async function fetchUser(){
        const { data } = await API.fetchUserData(location.pathname)
        setUserData(data) 
    }
      fetchUser()
    }, [])
  return (
    <>
    <div className="max-w-[1240px] ">
     {userData ? 
     <>
      <div className="container columns-2 flex gap-2 items-baseline">
        {userData?.writtenPosts?.map((post, index) => {
        return <PostCard key={index} post={post} />
        })}
      </div>
      <ProfileCard user={userData} />
    </>
      : <> User Does Not Exist </>}
    </div>
    </>
    )
}


