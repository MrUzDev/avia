import React, { useContext, useState } from 'react'
import logo from "../../Assets/logo/logo.png"
import discount from "../../Assets/icons/percentage-square.svg"
import message from "../../Assets/icons/message-2.svg"
import heart from "../../Assets/icons/heart.svg"
import bag from "../../Assets/icons/bag-2.svg"
import book from "../../Assets/icons/book.svg"
import globus from "../../Assets/icons/global.svg"
import user from "../../Assets/icons/user.svg"
import menu from "../../Assets/icons/menu.svg"
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Contexts } from "../../contexts/Contexts";


function Navbar() {

  const loggedIn = useSelector((state) => state.loginSlice.loggedIn);

  const navigate = useNavigate();

  const { setOpen } = useContext(Contexts);

  const [logOut, setLogOut] = useState(false);

  const handleLogOutClick = () => {
    setLogOut(true);
  };

  return (
    <div className='h-[92px] bg-[#0057BE]'>
      <div className="container flex justify-between items-center mx-auto h-full">
        <img className='w-[200px] cursor-pointer' src={logo} alt="" onClick={() => navigate('/')}/>
        <ul className='text-white xs:hidden lg:flex'>
          <li className='flex items-center mr-5 cursor-pointer'><img className='mr-2' src={discount} alt="" /> Акции и скидки</li>
          <li className='flex items-center mr-5 cursor-pointer'><img className='mr-2' src={message} alt="" /> Поддержка</li>
          <li className='flex items-center mr-5 cursor-pointer'><img className='mr-2' src={heart} alt="" /> Избранное</li>
          <li className='flex items-center mr-5 cursor-pointer'><img className='mr-2' src={bag} alt="" /> Мои поездки</li>
          <li className='flex items-center mr-5 cursor-pointer'><img className='mr-2' src={book} alt="" /> Журнал</li>
          <li className='flex items-center mr-5 cursor-pointer'><img className='mr-2' src={globus} alt="" /></li>
          {!loggedIn && (
            <li className='flex items-center mr-5 cursor-pointer' onClick={() => setOpen(true)}><img className='mr-2' src={user} alt="" /> Войти</li>
          )}
        </ul>
        <div className='flex lg:hidden'>
          <img className='mr-[10px] cursor-pointer' src={heart} alt="" />
          <img className='cursor-pointer' src={menu} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Navbar