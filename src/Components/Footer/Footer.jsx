import React from 'react'
import logo from "../../Assets/icons/footerLogo.svg"
import appStore from "../../Assets/icons/app store.svg"
import googlePlay from "../../Assets/icons/google play.svg"
import twitter from "../../Assets/icons/twitter.svg"
import instagram from "../../Assets/icons/instagram.svg"
import facebook from "../../Assets/icons/facebook.svg"

function Footer() {
    const ulData = [
        {
            title: "О нас",
            body: [
                { title: "Об Авия" },
                { title: "Акции и скидки" },
                { title: "Избранные" },
                { title: "Мои поездки" },
                { title: "Журнал" }
            ]
        },
        {
            title: "Сотрудничайте с нами",
            body: [
                { title: "Партнёрские программы" },
                { title: "Акции и мероприятия" },
                { title: "Интеграции" },
                { title: "Коммьюнити" },
            ]
        },
        {
            title: "Поддержка",
            body: [
                { title: "Центр помощи" },
                { title: "Связаться с нами" },
                { title: "Политика конфиденциальности" },
                { title: "Доверие и безопасность" },
            ]
        },
        {
            title: "Скачать приложение",
            body: [
                { title: "Авиа для Android" },
                { title: "Авиа для iOS" },
                { title: "Мобильный сайт" },
                { img: appStore },
                { img: googlePlay }
            ]
        },
    ]
    return (
<div className=''>
            <div className="container mx-auto mt-[100px]">
                <div className='grid xs:grid-cols-1 gap-[20px] sm:grid-cols-3 lg:grid-cols-5'>
                    <img src={logo} alt="" />
                    {
                        ulData.map((item, index) => (
                            <ul key={index}>
                                <li className='font-bold mb-[12px]'>{item.title}</li>
                                {item.body.map((body, index) => (
                                    <>
                                        <li className='mb-[10px] cursor-pointer'>{body.title}</li>
                                        <li className='mb-[8px] cursor-pointer'><img src={body.img && body.img} alt="" /></li>
                                    </>
                                ))}
                            </ul>
                        ))
                    }
                </div>
            </div>
            <div className='border border-[#CBD4E6] mt-[40px]'>
            </div>
            <div className="container mx-auto flex items-center justify-between my-[32px]">
                <div className="flex gap-[12px]">
                    <img className='cursor-pointer' src={twitter} alt="" />
                    <img className='cursor-pointer' src={instagram} alt="" />
                    <img className='cursor-pointer' src={facebook} alt="" />
                </div>
                <p>© 2023 IT unisoft</p>
            </div>

        </div>
    )
}

export default Footer