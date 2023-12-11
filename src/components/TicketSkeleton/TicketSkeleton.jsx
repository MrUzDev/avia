import React, { useEffect, useState } from "react";
import Skeleton from "@mui/material/Skeleton";
import "../Tickets/Ticket.css";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import img from "../../Assets/images/logo.svg";
export default function TicketSkeleton(props) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // 10 ta elementni tuzish
    const newItems = Array.from({ length: 3 }, (_, index) => ({
      id: index,
      content: `Element ${index + 1}`,
    }));

    setItems(newItems);
  }, []);

  return (
    <>
      {items?.map((item) => (
        <Grid lg={12} className="mb-5">
          <div className="box w-[100%] flex">
            <div className="w-full md:border-r-4 border-dashed md:border-[#ccc] relative">
              <div className="container-box py-6 md:py-8 pb-3 container-box-2">
                <div className="left w-full md:pr-5">
                  <div className="top">
                    <h2 className="flex w-full justify-between items-center">
                      <>
                        <Skeleton loading={props.isLoading}>
                          <img className="w-10 rounded-full" src={img} alt="" />
                        </Skeleton>
                        <Skeleton loading={props.isLoading}>
                          <p>
                            <span className="hidden w-max sum">
                              1000000 UZS
                            </span>
                          </p>
                        </Skeleton>
                      </>
                    </h2>
                  </div>

                  <div className="bottom flex items-end">
                    <div className="dataL">
                      <Skeleton loading={props.isLoading}>
                        <h2 className="font-mono text-[0.675rem] md:text-lg">
                          08:25
                        </h2>
                      </Skeleton>
                      <Skeleton loading={props.isLoading}>
                        <p className="font-mono text-[0.675rem] md:text-lg">
                          14 November, Tue Tashkent (TAS)
                        </p>
                      </Skeleton>
                      <Skeleton loading={props.isLoading}>
                        <p className="font-mono text-[0.675rem] md:text-lg">
                          TAS
                        </p>
                      </Skeleton>
                    </div>
                    <div>
                      <div className="flex justify-center">
                        <Skeleton loading={props.isLoading}>
                          <p className="font-mono text-[0.675rem] md:text-lg">
                            04 ч 10 мин
                          </p>
                        </Skeleton>
                      </div>
                      <div className="map w-full justify-between">
                        <Skeleton loading={props.isLoading} className="ml-3">
                          <div className="from">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <g clip-path="url(#clip0_865_2363)">
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M4.29285 15.8155C4.02797 15.919 3.91945 16.2356 4.06513 16.4799L5.81319 19.4108C6.06359 19.8306 6.58081 20.0079 7.0361 19.8299L23.9381 13.223C24.7279 12.9143 25.1179 12.0237 24.8092 11.234C24.4883 10.413 23.5436 10.0302 22.7417 10.3961L17.7432 12.6773L10.773 6.27125C10.4838 6.00546 10.0685 5.9276 9.70266 6.0706C9.08963 6.31023 8.85636 7.05604 9.22358 7.60227L13.6983 14.2584L6.85554 17.3571L4.72413 15.8669C4.59802 15.7787 4.43618 15.7594 4.29285 15.8155ZM25.6776 22.9521H5.14764V24.5313H25.6776V22.9521Z"
                                  fill="#AEAEAE"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_865_2363">
                                  <rect
                                    width="24"
                                    height="24"
                                    rx="4"
                                    fill="white"
                                  />
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                        </Skeleton>
                        <Skeleton loading={props.isLoading} className="mr-3">
                          <div className="to">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <g clip-path="url(#clip0_865_2363)">
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M4.29285 15.8155C4.02797 15.919 3.91945 16.2356 4.06513 16.4799L5.81319 19.4108C6.06359 19.8306 6.58081 20.0079 7.0361 19.8299L23.9381 13.223C24.7279 12.9143 25.1179 12.0237 24.8092 11.234C24.4883 10.413 23.5436 10.0302 22.7417 10.3961L17.7432 12.6773L10.773 6.27125C10.4838 6.00546 10.0685 5.9276 9.70266 6.0706C9.08963 6.31023 8.85636 7.05604 9.22358 7.60227L13.6983 14.2584L6.85554 17.3571L4.72413 15.8669C4.59802 15.7787 4.43618 15.7594 4.29285 15.8155ZM25.6776 22.9521H5.14764V24.5313H25.6776V22.9521Z"
                                  fill="#AEAEAE"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_865_2363">
                                  <rect
                                    width="24"
                                    height="24"
                                    rx="4"
                                    fill="white"
                                  />
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                        </Skeleton>
                      </div>
                      <div className="line mt-4 ">
                        <Skeleton loading={props.isLoading}>
                          <div className="relative">
                            <span className="absolute block left-0 bottom-0 translate-y-1 rounded-md bg-[#FFC107] w-10 h-2"></span>
                            <span className="absolute block right-2/4 bottom-0 translate-y-1 translate-x-4  rounded-md bg-[#EF2323] w-6 h-2"></span>
                            <span className="absolute block right-0 bottom-0 translate-y-1 rounded-md bg-[#EF2323] w-10 h-2"></span>
                          </div>
                        </Skeleton>
                      </div>
                      <div className="namCity flex items-center justify-between mt-3">
                        <Skeleton loading={props.isLoading} className="ml-3">
                          <p className="font-mono">TAS</p>
                        </Skeleton>
                        <Skeleton loading={props.isLoading} className="mr-3">
                          <p className="font-mono">DXB</p>
                        </Skeleton>
                      </div>
                    </div>
                    <div className="dataR">
                      <Skeleton loading={props.isLoading}>
                        <p className="font-mono text-[0.675rem] md:text-lg">
                          12 December, Tue Dubai (DXB)
                        </p>
                      </Skeleton>
                      <Skeleton loading={props.isLoading}>
                        <p className="font-mono text-[0.675rem] md:text-lg">
                          DXB
                        </p>
                      </Skeleton>
                    </div>
                  </div>
                </div>
              </div>

              <span className="block absolute top-0 h-3 w-5 bg-[#E8E8E8] right-[-0.747rem] rounded-b-lg"></span>
              <span className="block absolute bottom-0 h-3 w-5 bg-[#E8E8E8] right-[-0.747rem] rounded-t-lg"></span>
            </div>

            <div className="right px-3 py-2 md:py-5">
              <Skeleton loading={props.isLoading}>
                <h2 className="text-3xl w-max	">100000000 UZS</h2>
              </Skeleton>
              <Skeleton loading={props.isLoading}>
                <p className="font-mono">&nbsp;за всех пассажиров</p>
              </Skeleton>
              <Skeleton loading={props.isLoading}>
                <button className="bgBlue mt-4">купить</button>
              </Skeleton>
            </div>
          </div>
        </Grid>
      ))}
    </>
  );
}
