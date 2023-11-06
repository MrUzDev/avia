import React, { useContext, useState } from 'react'
import logo from "../../assets/logo/logo.png"
import discount from "../../assets/icons/percentage-square.svg"
import message from "../../assets/icons/message-2.svg"
import heart from "../../assets/icons/heart.svg"
import bag from "../../assets/icons/bag-2.svg"
import book from "../../assets/icons/book.svg"
import globus from "../../assets/icons/global.svg"
import user from "../../assets/icons/user.svg"
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
                <img className='w-[200px] cursor-pointer' src={logo} alt="" />
                <ul className='flex text-white'>
                    <li className='flex items-center mr-5 cursor-pointer'><img className='mr-2' src={discount} alt="" /> Акции и скидки</li>
                    <li className='flex items-center mr-5 cursor-pointer'><img className='mr-2' src={message} alt="" /> Поддержка</li>
                    <li className='flex items-center mr-5 cursor-pointer'><img className='mr-2' src={heart} alt="" /> Избранное</li>
                    <li className='flex items-center mr-5 cursor-pointer'><img className='mr-2' src={bag} alt="" /> Мои поездки</li>
                    <li className='flex items-center mr-5 cursor-pointer'><img className='mr-2' src={book} alt="" /> Журнал</li>
                    <li className='flex items-center mr-5 cursor-pointer'><img className='mr-2' src={globus} alt="" /></li>
                    {!loggedIn && (
                      <li className='flex items-center mr-5 cursor-pointer' onClick={() => setOpen(true)}><img className='mr-2' src={user} alt=""/> Войти</li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default Navbar