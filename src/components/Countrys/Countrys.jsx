import React from 'react'
import uzbekistan from "../../assets/images/uzbekistan.png"
import rossiya from "../../assets/images/rossiya.png"
import turkiya from "../../assets/images/turkiya.png"
import Oae from "../../assets/images/Oae.png"
import kazakistan from "../../assets/images/kazakistan.png"
import kitay from "../../assets/images/kitay.png"
import usa from "../../assets/images/usa.png"
import azarbayjan from "../../assets/images/azarbayjan.png"

function Countrys() {
    const countryData = [
        {
            img: uzbekistan,
            name: "Узбекистан",
            sum: "300 000"
        },
        {
            img: rossiya,
            name: "Россия",
            sum: "1 200 000"
        },
        {
            img: turkiya,
            name: "Турция",
            sum: "1 350 000"
        },
        {
            img: Oae,
            name: "ОАЭ",
            sum: "650 000"
        },
        {
            img: kazakistan,
            name: "Казахстан",
            sum: "460 000"
        },
        {
            img: kitay,
            name: "Китай",
            sum: "1 200 000"
        },
        {
            img: usa,
            name: "США",
            sum: "5 990 000"
        },
        {
            img: azarbayjan,
            name: "Азербайджан",
            sum: "1 750 000"
        }
    ]
    return (
        <div>
            <div className="container mx-auto mt-[3%]">
                <h2 className='text-[32px] font-bold mb-[20px]'>Популярные направлении</h2>
                <div className='grid grid-cols-4 gap-[35px]'>
                    {
                        countryData.map(item => (
                            <div className='mb-[20px]'>
                                <img className='rounded-lg mb-[20px] w-full' src={item.img} alt="..." />
                                <h4 className='text-[20px] font-bold mb-[5px]'>{item.name}</h4>
                                <p className='text-[#AEAEAE]'>От {item.sum} сум</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Countrys