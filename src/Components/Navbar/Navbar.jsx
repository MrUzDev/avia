import React, { useContext, useEffect, useState } from 'react'
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
import { useTranslation } from 'react-i18next'


function Navbar() {
  const loggedIn = useSelector((state) => state.loginSlice.loggedIn);

  const navigate = useNavigate();

  const { setOpen } = useContext(Contexts);

  const [logOut, setLogOut] = useState(false);
  const [showLang, setShowLang] = useState(false);
  const [lang, setLang] = useState("uz");


  const handleLogOutClick = () => {
    setLogOut(true);
  };

  // useEffect(() => {
  //   setLang(window.location.search.replace('?lng=', ''));
  // }, [])


//   const languages = [
//     { value: "", text: "Options" },
//     { value: "en", text: "English" },
//     { value: "ru", text: "Russian" },
//     { value: "uz", text: "Uzbek" },
// ];

    const { t } = useTranslation();
 
    // This function put query that helps to
    // change the language
    // const handleChange = (e) => {
    //     setLang(e.target.value);
    //     let loc = "http://localhost:3000/";
    //     window.location.replace(
    //         loc + "?lng=" + e.target.value
    //     );
    // };

   

  return (
    <div className=' bg-[#0057BE] py-4 sticky top-0 left-0 w-full z-50'>
      <div className="container flex justify-between items-center mx-auto h-full">
        <img className='w-[200px] cursor-pointer' src={logo} alt="" onClick={() => navigate('/')}/>
        <ul className='text-white xs:hidden lg:flex'>
          <li className='flex items-center mr-5 cursor-pointer'><img className='mr-2' src={heart} alt="" /> Избранное</li>
          <li className='flex items-center mr-5 cursor-pointer'><img className='mr-2' src={bag} alt="" /> Мои поездки</li>
          {/* <li className='flex items-center mr-5 cursor-pointer'><img className='mr-2' src={book} alt="" /> Журнал</li> */}
            <span className='relative'>
              <li className='flex items-center mr-5 cursor-pointer' onClick={() => setShowLang(!showLang)}><img className='mr-2' src={globus} alt="" /></li>
              {showLang && (
                <div className='absolute top-[calc(100%+10px)] bg-white rounded-md text-[#222222] py-3 px-5 right-0 w-auto shadow-[0_8px_15px_0px_rgba(0,0,0,0.2)]'>
                  <h5 className='text-[#000] font-bold text-xl'>Язык</h5>

                  <ul className='mt-3'>
                    <li className='w-full flex text-[#0064FA] cursor-pointer'><span className='mr-4'>RU </span> <span className='mr-5 flex'>Русский </span> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none"><path d="M10.5799 16.0801C10.3799 16.0801 10.1899 16.0001 10.0499 15.8601L7.21994 13.0301C6.92994 12.7401 6.92994 12.2601 7.21994 11.9701C7.50994 11.6801 7.98994 11.6801 8.27994 11.9701L10.5799 14.2701L15.7199 9.1301C16.0099 8.8401 16.4899 8.8401 16.7799 9.1301C17.0699 9.4201 17.0699 9.9001 16.7799 10.1901L11.1099 15.8601C10.9699 16.0001 10.7799 16.0801 10.5799 16.0801Z" fill="#0064FA"/></svg></li>
                    <li className='w-full flex py-2 hover:text-[#0064FA] cursor-pointer'><span className='mr-4'>EN</span> <span className='mr-5'>English</span></li>
                    <li className='w-full flex hover:text-[#0064FA] cursor-pointer'><span className='mr-4 '>UZ </span> <span className='mr-5'>O’zbekcha</span></li>
                  </ul>
                </div>
              )}
            </span>
          {!loggedIn && (
            <li className='flex items-center mr-5 cursor-pointer' onClick={() => setOpen(true)}><img className='mr-2' src={user} alt="" /> Войти</li>
          )}
        </ul>
        <div className='flex lg:hidden'>
          <img className='mr-[10px] cursor-pointer' src={heart} alt="" />
          <img className='cursor-pointer' src={menu} alt="" />
        </div>

        {/* <p>{t('welcome_msg')}</p> */}
            {/* <label>{t("choose")}</label> */}
            {/* <select value={lang} defaultValue={lang} onChange={(e) => handleChange(e)}>
                {languages.map((item) => {
                    return (
                        <option
                            key={item.value}
                            value={item.value}
                        >
                            {item.text}
                        </option>
                    );
                })}
            </select> */}
      </div>
    </div>
  )
}

export default Navbar