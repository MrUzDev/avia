import React from 'react'
import tRus from "../../assets/images/t-rossiya.png"
import newYork from "../../assets/images/newyork.png"
import parij from "../../assets/images/parij.png"
import maldiva from "../../assets/images/maldiva.png"
import puket from "../../assets/images/puket.png"
import london from "../../assets/images/london.png"
import samarkand from "../../assets/images/samarkand.png"
import kair from "../../assets/images/kair.png"

function Reys() {
    const reysData = [
        {
            img: tRus,
            reys_name: "Ташкент - Москва",
            sum: "1 250 000"
        },
        {
            img: newYork,
            reys_name: "Ташкент - Нью-Йорк",
            sum: "1 250 000"
        },
        {
            img: parij,
            reys_name: "Ташкент - Париж",
            sum: "1 250 000"
        },
        {
            img: maldiva,
            reys_name: "Ташкент - Мальдивы",
            sum: "1 250 000"
        },
        {
            img: puket,
            reys_name: "Ташкент - Пхукет",
            sum: "1 250 000"
        },
        {
            img: london,
            reys_name: "Ташкент - Лондон",
            sum: "1 250 000"
        },
        {
            img: samarkand,
            reys_name: "Ташкент - Самаркнд",
            sum: "1 250 000"
        },
        {
            img: kair,
            reys_name: "Ташкент - Каир",
            sum: "1 250 000"
        },

    ]
    return (
        <div className='container mx-auto mt-[2%]'>
            <div className="grid grid-cols-4 gap-[20px]">
                {
                    reysData.map(item => (
                        <div className='flex items-center mb-[10px]'>
                            <img className='mr-[15px]' src={item.img} alt="" />
                            <div>
                                <h4 className='text-[20px] font-bold mb-[5px]'>{item.reys_name}</h4>
                                <p className='text-[16px]'>От {item.sum} сум</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Reys