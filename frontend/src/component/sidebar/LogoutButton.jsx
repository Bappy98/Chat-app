import React from 'react'
import { CiLogout } from "react-icons/ci";
import useLogout from '../../hook/useLogout';
function LogoutButton() {
  const {loading,logout} = useLogout()
  return (
    <div className='mt-auto absolute bg-blue-400 p-2 rounded-full opacity-90 inline-block bottom-1'>
        {!loading?(
          <CiLogout className='h-6 w-full font-bold text-white cursor-pointer  ' onClick={logout} />
        ):(
          <span className='loading loading-spinner'></span>
        )}
    </div>
  )
}

export default LogoutButton