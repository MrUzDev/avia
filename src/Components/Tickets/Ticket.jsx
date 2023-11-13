import React, { useEffect, useState } from "react";
import AirlineSeatReclineNormalIcon from "@mui/icons-material/AirlineSeatReclineNormal";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
// import "./Ticket.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LuggageIcon from "@mui/icons-material/Luggage";
import { Container, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import "./Ticket.css";
import { setTicketId, addFilterAirlines, removeFilterAirlines, checkChangeAir, addFilterAirlinesName } from "../../Slice/AllSlice";
import { useNavigate } from "react-router-dom";
import TicketSkeleton from "../TicketSkeleton/TicketSkeleton";
import moment from "moment";

function Ticket(props) {
  const TicketData = useSelector((state) => state.loginSlice.ticketData);
  const allAirlinesName = useSelector((state) => state.loginSlice.allAirlinesName);

  const [ticketFilterShow, setTicketFilterShow] = useState(false)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toShoppingTicket = (id, price) => {
    if (id) {
      navigate(`/order/${id}`);
      window.scrollTo(0, 0);
      dispatch(setTicketId(id));
    }
  };

  const currency = (number, currency, lang = undefined) =>
    Intl.NumberFormat(lang, { style: "currency", currency }).format(number);


  const filterInputChange = (checkbox) => {

    if (checkbox.currentTarget.checked) {
      dispatch(addFilterAirlines(checkbox.target.value))
    } else {
      dispatch(removeFilterAirlines(checkbox.target.value))
    }
    dispatch(checkChangeAir())
  }

  useEffect(() => {
    if (TicketData || props.loading) {
      setTicketFilterShow(true)
    }
  }, [TicketData, props.loading])


  return (
    <div className="aviaTicket container mx-auto">
      <div className="Ticket mt-6">
        <Grid
          container
          spacing={2}
          sx={{ justifyContent: "space-between", alignItems: "flex-start" }}>
          {ticketFilterShow === true && (
            <Grid item lg={3} className="w-full">
              <div className="checklist">
                <div className="transfer">
                  <h3>O'tkazish</h3>

                  <div className="checkbox ">
                    <input type="checkbox" id="wout" />
                    <label htmlFor="wout">O'tkazishsiz</label>
                  </div>

                  <div className="checkbox">
                    <input type="checkbox" id="1" />
                    <label htmlFor="1">1ta O'tkazish</label>
                  </div>

                  <div className="checkbox">
                    <input type="checkbox" id="2" />

                    <label htmlFor="2">2 O'tkazish</label>

                  </div>

                </div>

                <div className="company">
                  <h3>O'tkazish</h3>
                  {allAirlinesName && allAirlinesName.map((item) =>
                    <div className="checkbox">
                      <input type="checkbox" id={item.name} value={item.code} onClick={(e) => { filterInputChange(e) }} />
                      <label htmlFor={item.name}>{item.name}</label>
                    </div>
                  )}
                </div>
              </div>
            </Grid>
          )
          }
          <Grid item lg={9} >

            {TicketData && TicketData.flights.length > 0
              ? TicketData.flights.map((item, inx) => (
                <Grid item lg={12} sx={{ marginBottom: '20px' }}>
                  <div className="box w-[100%]">
                    {item.segments.length == 2 ? (
                      item.segments.map((twoItem, index) => (
                        <div className="container-box" key={index}>
                          <div className="left border border-[#ccc] w-full">
                            <div className="top">
                              <img src="" alt="" />

                              <h2>
                                <p>{item.provider.supplier.title}</p>
                                <span className="type">
                                  {item.segments[index].class.name == "E"
                                    ? "Ekonom"
                                    : item.segments[index].class.name == "e"
                                      ? "Ekonom"
                                      : item.segments[index].class.name == "A"
                                        ? "Istalgan"
                                        : item.segments[index].class.name ==
                                        "B" && "Biznes"}
                                </span>
                                <span className="class">
                                  ({item.segments[index].class.name})
                                </span>
                                <AirlineSeatReclineNormalIcon />
                              </h2>

                            </div>

                            <div className="bottom">
                              <div className="dataL">
                                <h2 className="time">
                                  {item.segments[index].dep.time}
                                </h2>
                                <h2>{item.segments[index].dep.city.code}</h2>

                                <p className="data">
                                  <span>
                                    <CalendarMonthIcon />
                                  </span>
                                  {item.segments[index].dep.date}
                                </p>
                              </div>
                              <div className="map">
                                <div className="from">
                                  <p>{item.segments[index].dep.city.code}</p>
                                  <LocationOnIcon />
                                  <div className="af"></div>
                                </div>
                                <div className="line">
                                  <p>
                                    {item.segments[index].duration.flight.hour}{" "}
                                    soat{" "}
                                    {
                                      item.segments[index].duration.flight
                                        .minute
                                    }{" "}
                                    daqiqa{" "}
                                  </p>
                                  <div></div>
                                  {/* <p>Parvoz: KC 918a</p> */}
                                </div>

                                <div className="to">
                                  <p>{item.segments[index].arr.city.code}</p>
                                  <LocationOnIcon />
                                  <div className="af"></div>
                                </div>
                              </div>
                              <div className="dataR">
                                <h2>{item.segments[index].arr.city.code}</h2>
                                <h2 className="time">
                                  {item.segments[index].arr.time}
                                </h2>
                                <p className="data">
                                  <span>
                                    <CalendarMonthIcon />
                                  </span>
                                  {item.segments[index].arr.date}
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="right">
                            <p
                              className="luggage"
                              style={{ display: "flex", alignItems: "center" }}
                            >
                              <LuggageIcon /> Chamadon:{" "}
                              {item.segments[index].baggage.weight
                                ? item.segments[index].baggage.weight
                                : 0}{" "}
                              kg
                            </p>
                            <button
                              className="bgBlue"
                              onClick={() => toShoppingTicket(item.id, item.price.UZS.amount)}
                            >
                              {item.price.UZS.amount && currency(item.price.UZS.amount, 'UZS').replace("UZS", "")
                                .replace("soʻm", "").replace(/,/g, ".").slice(0, -3)} UZS
                            </button>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="container-box" key={inx}>
                        <div className="left border-r pr-5 border-[#ccc]">
                          <div className="top">
                            <h2 className="flex w-full justify-between items-center log">
                              <img className="w-10 rounded-full" src={`https://mpics.avs.io/al_square/240/240/${item.provider.supplier.code}.png`} alt="" />
                              {/* <p>{item.provider.supplier.title}</p> */}
                              <p>
                                <span className="type">
                                  {item.segments[0].class.name == "E"
                                    ? "Ekonom"
                                    : item.segments[0].class.name == "e"
                                      ? "Ekonom"
                                      : item.segments[0].class.name == "A"
                                        ? "Istalgan"
                                        : item.segments[0].class.name == "B" &&
                                        "Biznes"}
                                </span>
                                <span className="class">
                                  ({item.segments[0].class.name})
                                </span>
                                <span className="hidden w-max sum">
                                  {item.price.UZS.amount && currency(item.price.UZS.amount, 'UZS').replace("UZS", "")
                                    .replace("soʻm", "").replace(/,/g, " ").slice(0, -3).replace('.', " ")} UZS
                                </span>
                              </p>
                            </h2>
                          </div>

                          <div className="bottom">
                            <div className="dataL">
                              <h2 className="time">
                                {item.segments[0].dep.time}
                              </h2>
                              <p className="font-mono tex">
                                {moment(item.segments[0].dep.date).format("MM MMMM ")}
                                {moment(item.segments[0].arr.date).format("dddd").slice(0, 3)}

                              </p>
                              <p className="font-mono tex"> {item.segments[0].dep.city.title} ({item.segments[0].dep.city.code})</p>
                            </div>
                            <div>
                              <div className="map w-full justify-between">
                                <div className="from">
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

                                <div className="to">
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
                              </div>

                              <div className="line mt-4">
                                <div className="relative">
                                  <span className="absolute block left-0 bottom-0 translate-y-1 rounded-md bg-[#FFC107] w-10 h-2"></span>
                                  <span className="absolute block right-2/4 bottom-0 translate-y-1 translate-x-4  rounded-md bg-[#EF2323] w-6 h-2"></span>
                                  <span className="absolute block right-0 bottom-0 translate-y-1 rounded-md bg-[#EF2323] w-10 h-2"></span>
                                </div>
                              </div>
                              <div className="namCity flex items-center justify-between mt-3">
                                <p className="font-mono">{item.segments[0].dep.city.code}</p>
                                <p className="font-mono">{item.segments[0].arr.city.code}</p>
                              </div>
                            </div>
                            <div className="dataR">
                              <h2 className="time">
                                {item.segments[0].arr.time}
                              </h2>
                              <p className="font-mono tex">
                                {moment(item.segments[0].arr.date).format("MM MMMM ")}
                                {moment(item.segments[0].arr.date).format("dddd").slice(0, 3)}
                              </p>
                              <p className="font-mono tex"> {item.segments[0].arr.city.title} {item.segments[0].arr.city.code}</p>
                            </div>

                            <div>
                              <h2 className="text-[16px]">
                                <span >
                                  {item.segments[0].duration.flight.hour}
                                </span>
                                <span className="mx-[3px]">
                                  ч
                                </span>
                                <span>
                                  {item.segments[0].duration.flight.minute}
                                </span>
                                м
                              </h2>
                            </div>
                          </div>
                        </div>

                        <div className="right px-3">
                          <h2 className="text-3xl w-max	">
                            {item.price.UZS.amount && currency(item.price.UZS.amount, 'UZS').replace("UZS", "")
                              .replace("soʻm", "").replace(/,/g, " ").slice(0, -3).replace('.', " ")} UZS
                          </h2>
                          <p className="font-mono">&nbsp;за всех пассажиров</p>
                          <p
                            className="luggage"
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                              <path d="M10.5801 15.5804C10.3801 15.5804 10.1901 15.5004 10.0501 15.3604L7.22006 12.5304C6.93006 12.2404 6.93006 11.7604 7.22006 11.4704C7.51006 11.1804 7.99006 11.1804 8.28006 11.4704L10.5801 13.7704L15.7201 8.6304C16.0101 8.3404 16.4901 8.3404 16.7801 8.6304C17.0701 8.9204 17.0701 9.4004 16.7801 9.6904L11.1101 15.3604C10.9701 15.5004 10.7801 15.5804 10.5801 15.5804Z" fill="#27AE60" />
                            </svg>
                            Багаж:{" "}
                            {item.segments[0].baggage.weight
                              ? item.segments[0].baggage.weight
                              : 0}{" "}
                            кг
                          </p>
                          <button
                            className="bgBlue"
                            onClick={() => toShoppingTicket(item.id, item.price.UZS.amount)}
                          >
                            купить
                          </button>
                          {/* <button className="bgWhite">Tarif haqida</button> */}
                        </div>
                      </div>
                    )}
                  </div>
                </Grid>
              ))
              : TicketData && (
                <h2 style={{ textAlign: "center" }}>Chipta topilmadi</h2>
              )}

            {props.loading && <TicketSkeleton loading={props.loading} />}
          </Grid>


        </Grid>

      </div>
    </div>


  );
}

export default Ticket;
