import React from 'react'
import { IoIosLogIn } from "react-icons/io"


const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebarWrapper'>
        <ul className='sidebarList'>
          <li className='flex '>
            <IoIosLogIn size={30} className='mx-2' />
            <span className='hidden xl:inline'>ホーム</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
