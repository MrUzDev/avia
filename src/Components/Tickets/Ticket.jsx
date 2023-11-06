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

      if(checkbox.currentTarget.checked) {
        dispatch(addFilterAirlines(checkbox.target.value))
      }else {
       dispatch(removeFilterAirlines(checkbox.target.value)) 
      }
      dispatch(checkChangeAir())
  }

  useEffect(() => {
    if(TicketData || props.loading) {
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

            {ticketFilterShow == true &&(
            <Grid item lg={3}>
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
                  <input type="checkbox" id={item.name} value={item.code} onClick={(e) => {filterInputChange(e)}}/>
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
                <Grid item lg={12} sx={{marginBottom: '20px'}}>
                  <div className="box">
                    {item.segments.length == 2 ? (
                      item.segments.map((twoItem, index) => (
                        <div className="container-box" key={index}>
                          <div className="left">
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
                                <h2>{item.segments[index].dep.city.code}</h2>
                                <h2 className="time">
                                  {item.segments[index].dep.time}
                                </h2>
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
                            {/* <button className="bgWhite">Tarif haqida</button> */}
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="container-box" key={inx}>
                        <div className="left">
                          <div className="top">
                            <img src="" alt="" />
                            <h2>
                              <p>{item.provider.supplier.title}</p>
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
                              <AirlineSeatReclineNormalIcon />
                            </h2>
                          </div>

                          <div className="bottom">
                            <div className="dataL">
                              <h2>{item.segments[0].dep.city.code}</h2>
                              <h2 className="time">
                                {item.segments[0].dep.time}
                              </h2>
                              <p className="data">
                                <span>
                                  <CalendarMonthIcon />
                                </span>
                                {item.segments[0].dep.date}
                              </p>
                            </div>
                            <div className="map">
                              <div className="from">
                                <p>{item.segments[0].dep.city.code}</p>
                                <LocationOnIcon />
                                <div className="af"></div>
                              </div>
                              <div className="line">
                                <p>
                                  {item.segments[0].duration.flight.hour} soat{" "}
                                  {item.segments[0].duration.flight.minute}{" "}
                                  daqiqa{" "}
                                </p>
                                <div></div>
                                {/* <p>Parvoz: KC 918</p> */}
                              </div>

                              <div className="to">
                                <p>{item.segments[0].arr.city.code}</p>
                                <LocationOnIcon />
                                <div className="af"></div>
                              </div>
                            </div>
                            <div className="dataR">
                              <h2>{item.segments[0].arr.city.code}</h2>
                              <h2 className="time">
                                {item.segments[0].arr.time}
                              </h2>
                              <p className="data">
                                <span>
                                  <CalendarMonthIcon />
                                </span>
                                {item.segments[0].arr.date}
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
                            {item.segments[0].baggage.weight
                              ? item.segments[0].baggage.weight
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

         {props.loading && <TicketSkeleton loading={props.loading}/>}
        </Grid>


        </Grid>

      </div>
    </div>

   
  );
}

export default Ticket;
