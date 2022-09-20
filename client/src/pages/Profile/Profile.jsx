import React from 'react'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import API from '../../services/apiClient'

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
    
    console.log(userData)
  return (
    <div>Profile</div>
  )
}
