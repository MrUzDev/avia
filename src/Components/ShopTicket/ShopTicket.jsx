import { Container, Grid } from '@mui/material'
import React from 'react'
import "./ShopTicket.css"
function ShopTicket() {
    return (
        <Container className='ShopTicket'>
            <Grid
                container
                sx={{ justifyContent: "space-between", alignItems: "flex-start" }}
            >
                <Grid item lg={9}>
                    <h2>Сабиха Гокчен (Стамбул)-GYD-Ташкент</h2>
                    <div className="contact">
                        <div className="conTitle">
                            <h2>Контактная информация</h2>
                            <p>На почту мы отправим электронный билет, на телефон мы позвоним, если будут изменения в рейсе или в случае других ситуаций</p>
                        </div>
                        <div className="line"></div>
                        <form className="for1">
                            <label htmlFor="">
                                <p> Ism <span>*</span></p>
                                <input required type="text" />
                            </label>
                            <label htmlFor="">
                                <p>Электронная почта (E-mail)</p>
                                <input type="email" />
                            </label>
                            <label htmlFor="">
                                <p>Telefon <span>*</span></p>
                                <input type="tel" />
                            </label>
                        </form>
                        <p className='polya'><span>*</span> Обязательные поля</p>
                    </div>
                    <div className="info">
                        <div className="inTitle">
                            <h2>Информация о пассажирах</h2>
                            <p>Введите личные данные пассажиров, как указано в документе (паспорте), по которому они полетят. Поля нужно заполнять латинскими буквами.</p>
                        </div>
                        <div className="line"></div>
                        <div className="for2">
                            <div className="young">
                                <h3>Взрослый</h3>
                                <button> из файла</button>
                            </div>
                            <div className="threeInp">
                                <label htmlFor="">
                                    Фамилия
                                    <input type="text" />
                                </label>
                                <label htmlFor="">
                                    Имя
                                    <input type="text" />
                                </label>
                                <label htmlFor="">
                                    Гражданство
                                    <input type="text" defaultValue={"Uzbekistan"} />

                                </label>
                            </div>
                            <div className="fourInp">
                                <label htmlFor="">
                                    Пол
                                    <input type="text" />
                                </label>
                                <label htmlFor="">
                                    Дата рождения
                                    <input type="text" />
                                </label>
                                <label htmlFor="">
                                    Серия и № паспорта
                                    <input type="text" />
                                </label>
                                <label htmlFor="">
                                    Срок действия
                                    <input type="text" />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="weight">
                        <h2>  Ваш перелёт включает 1 PC кг багажа и 1 PC кг Обратно</h2>
                    </div>
                    <div className="comment">
                        <p> Комментарий</p>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div className="bron">
                        <p className='time'>20.09.2023 21:15 по Ташкентскому времени</p>
                        <p className='money'>
                            Итого: <span> 3 977 200UZS </span> / 326$
                        </p>
                        <button>Забронировать</button>
                    </div>
                </Grid>
                <Grid lg={3}>
                    <div className="posajir">
                        <h2>Перед вылетом каждый пассажир должен убедиться что:</h2>
                        <ul>
                            <li>- заграничный паспорт с минимальным сроком действия 4 месяца;</li>
                            <li>- наличие визы для въезда в страну (если требуется);</li>
                            <li>- наличие страховки медицинской (если требуется);</li>
                            <li>- наличие ПЦР теста на COVID-19 (если требуется);</li>
                        </ul>
                        <span>В случае несоблюдения этих правил пассажир
                            (турагентство, авиакасса оформляющая турпакет или авиабилет)
                            несет ответственность за свои действия.
                        </span>
                    </div>
                </Grid>
            </Grid>
        </Container>
    )
}

export default ShopTicket