import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Nav = ({menuList,setSideWidth,authenticate,setAuthenticate}) => {
  const navigate = useNavigate()
  const [searchArea,setSearchArea]=useState('none')
  const authenticateFunc =()=>{
    authenticate===false?navigate('/login'):setAuthenticate(false)
  }
  const search = (e)=>{
    if(e.key==="Enter"){
      let keyword = e.target.value
      navigate(`/?q=${keyword}`)
      e.target.value=''
    }
  }
  return (
    <div className='nav-area'>
      <div className='nav-top'>
        <div className='search-area'>
          <FontAwesomeIcon onClick={()=>setSideWidth('225px')} id='bar-icon' icon={faBars}/>
          <FontAwesomeIcon onClick={()=>searchArea==='none'?setSearchArea('inline'):setSearchArea('none')} id='search-icon' icon={faSearch}/>
          <input onKeyDown={(e)=>search(e)} style={{display:searchArea}} placeholder='Search'/>
        </div>
        <div onClick={()=>authenticateFunc()} className='login-area'>
          <FontAwesomeIcon id='user-icon' icon={faUser}/>
          {authenticate===false?'로그인':'로그아웃'}
        </div>
      </div>
      <div className='logo-area'>
        <img onClick={()=>navigate('/')} src='https://blog.kakaocdn.net/dn/Yt80C/btqDeJAYUBo/JQbTuukRladq2AUOeqgiEK/img.jpg'/>
      </div>
      <ul className='menu-list-area'>
        {menuList.map((menu)=>{
          return <li>{menu}</li>
        })}
      </ul>
      
    </div>
  )
}

export default Nav