import React from 'react'
const SideNav = ({menuList,sideWidth,setSideWidth}) => {
    return (
    <div style={{width:sideWidth}} className='side-nav'>
        <span onClick={()=>setSideWidth(0)} id='close-side'>&times;</span>
        {menuList.map((menu)=>{
            return <div>{menu}</div>
        })}
    </div>
  )
}

export default SideNav