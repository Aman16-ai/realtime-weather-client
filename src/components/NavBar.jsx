import React, { useEffect, useState } from 'react'
// import logo from "../static/adgitmLogo.jpeg"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
// import profileImg from "../static/profilePic.jpg"
let logo = undefined
let profileImg = undefined
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
export default function NavBar() {
  const navigate = useNavigate()
  const [search,setSearch] = useState("")
  const [searchParams,setSearchParams] = useSearchParams()

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  const handleKeyDown = (e) => {
    if(e.key === 'Enter' && search.trim() !== '') {
      setSearchParams({"search":search})
    }
  }

  useEffect(() => {
    if(!searchParams.get('search')) {
      setSearch("")
    }
  },[searchParams])
  return (
    <div className='w-screen bg-white h-16 shadow-lg flex justify-evenly items-center'>
        <div className='w-auto flex justify-center items-center h-full cursor-pointer' onClick={(e) => navigate("/")}>
        <h4 className='font-bold font-semibold'>Realtime weather data processing</h4>
        </div>
        <input value={search} onKeyDown={handleKeyDown} onChange={handleSearch} className='w-[350px] h-12 bg-slate-100 rounded-xl p-5 focus:outline-none' type="text" name="" placeholder='search' id="" />
        <div className='w-[400px] h-full  border-black flex items-center justify-evenly'>
            <div>
            <Link to={"/"}><HomeOutlinedIcon sx={{ stroke: "#ffffff", strokeWidth: 0.7 }} fontSize='large'/></Link>
            <Link className="ml-2" to={"/notifications"}><NotificationsActiveOutlinedIcon sx={{ stroke: "#ffffff", strokeWidth: 0.7 }} fontSize='large'/></Link>
            </div>
            
        </div>
    </div>
  )
}
