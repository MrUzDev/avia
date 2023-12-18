import React from 'react'
import moment from 'moment'

export default function TicketAccardion(props) {
  return (
    <div>
            {(
                              props.item.segments.map((twoItem, index) => (
                                props.item.segments_direction[props.direction].map((drInx) => 
                                  drInx === index && (
                                    <div className="container-box py-2 md:py-5 pb-3 container-box-2" key={props.inx} 
                                    // onClick={() => window.innerWidth < 768 && handleOpen()}
                                    >
                                            <div className="left w-full md:pr-5">

                                              <div className="">
                                                <div className="flex items-center	justify-between w-full">
                                                  <div className="from flex">
                                                    <div>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                          <g clip-path="url(#clip0_865_2363)">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.29285 15.8155C4.02797 15.919 3.91945 16.2356 4.06513 16.4799L5.81319 19.4108C6.06359 19.8306 6.58081 20.0079 7.0361 19.8299L23.9381 13.223C24.7279 12.9143 25.1179 12.0237 24.8092 11.234C24.4883 10.413 23.5436 10.0302 22.7417 10.3961L17.7432 12.6773L10.773 6.27125C10.4838 6.00546 10.0685 5.9276 9.70266 6.0706C9.08963 6.31023 8.85636 7.05604 9.22358 7.60227L13.6983 14.2584L6.85554 17.3571L4.72413 15.8669C4.59802 15.7787 4.43618 15.7594 4.29285 15.8155ZM25.6776 22.9521H5.14764V24.5313H25.6776V22.9521Z" fill="#AEAEAE" />
                                                          </g>
                                                          <defs>
                                                            <clipPath id="clip0_865_2363">
                                                              <rect width="24" height="24" rx="4" fill="white" />
                                                            </clipPath>
                                                          </defs>
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                          <g clip-path="url(#clip0_865_2363)">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.29285 15.8155C4.02797 15.919 3.91945 16.2356 4.06513 16.4799L5.81319 19.4108C6.06359 19.8306 6.58081 20.0079 7.0361 19.8299L23.9381 13.223C24.7279 12.9143 25.1179 12.0237 24.8092 11.234C24.4883 10.413 23.5436 10.0302 22.7417 10.3961L17.7432 12.6773L10.773 6.27125C10.4838 6.00546 10.0685 5.9276 9.70266 6.0706C9.08963 6.31023 8.85636 7.05604 9.22358 7.60227L13.6983 14.2584L6.85554 17.3571L4.72413 15.8669C4.59802 15.7787 4.43618 15.7594 4.29285 15.8155ZM25.6776 22.9521H5.14764V24.5313H25.6776V22.9521Z" fill="#AEAEAE" />
                                                          </g>
                                                          <defs>
                                                            <clipPath id="clip0_865_2363">
                                                              <rect width="24" height="24" rx="4" fill="white" />
                                                            </clipPath>
                                                          </defs>
                                                        </svg>
                                                    </div>
                                                  <p>
                                                    <p className="font-mono text-[0.675rem] md:text-lg ml-3">{twoItem.dep.time}</p>
                                                    <p className="font-mono text-[0.675rem] md:text-lg ml-3">{twoItem.arr.time}</p>
                                                  </p>
                                                  </div>
                                                  <div>
                                                    <p className="font-mono text-[0.675rem] md:text-lg">{twoItem.dep.city.title}</p>
                                                    <p className="font-mono text-[0.675rem] md:text-lg">{twoItem.arr.city.title}</p>
                                                  </div>
                                                  
                                                  <div>
                                                    <p className="font-mono text-[0.675rem] md:text-lg ml-3">
                                                    {moment(twoItem.dep.date, 'DD.MM.YYYY').format("DD MMMM")}
                                                    </p>
                                                    <p className="font-mono text-[0.675rem] md:text-lg ml-3">
                                                    {moment(twoItem.arr.date, 'DD.MM.YYYY').format("DD MMMM")}
                                                    </p>

                                                  </div>
                                                  <p className="font-mono text-[0.675rem] md:text-lg"> {twoItem.duration.flight.hour}ч {twoItem.duration.flight.minute}мин </p>
                                                  <img className="w-10 rounded-full" src={`https://mpics.avs.io/al_square/240/240/${twoItem.provider.supplier.code}.png`} alt="" />
                                                        
                                                </div>

                                                </div>

                                              <div className="flex justify-between">
                                                <div>

                                                  <p className="font-mono text-[0.675rem] mt-3 md:text-lg">Рейс: {twoItem.fare_code}</p>
                                                  <p className="font-mono text-[0.675rem] md:text-lg">Авиакомпания: {twoItem.provider.supplier.title}</p>
                                                  {twoItem.aircraft.title && <p className="font-mono text-[0.675rem] md:text-lg">Самолет: {twoItem.aircraft.title}</p>} 
                                                </div>

                                                <div>
                                                  {twoItem.dep.terminal && <p className="font-mono text-[0.675rem] md:text-lg mt-5">Терминал: {twoItem.dep.terminal}</p>} 
                                                  {twoItem.cbaggage.weight && <p className="font-mono text-[0.675rem] md:text-lg">Багаж: {twoItem.cbaggage.weight} </p>} 
                                                  <p className="font-mono text-[0.675rem] md:text-lg">
                                                    Класс: {twoItem.class.name.toUpperCase() === "E" ? "Ekonom" : 
                                                                  twoItem.class.name.toUpperCase() === "B" &&
                                                                  "Biznes"}
                                                    </p>

                                                </div>
                                              </div>
                                              {twoItem.duration.transfer?.minute >= 0 && (
                                                    <div className="flex items-center justify-center border-[3px] border-[#0057BE] text-[#0057BE] py-2 px-1 rounded-lg mt-2">
                                                      {twoItem.duration.transfer?.hour}ч {twoItem.duration.transfer?.minute}мин пересадка
                                                    </div>
                                              )}
                                              
                                            </div>
                                    </div>

                                  )
                                )

                              )))}
    </div>
  )
}
