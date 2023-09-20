import React from "react";
import AirlineSeatReclineNormalIcon from "@mui/icons-material/AirlineSeatReclineNormal";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
// import "./Ticket.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LuggageIcon from "@mui/icons-material/Luggage";
import { Container, Grid } from "@mui/material";
import "./Ticket.css";
function Ticket() {
  return (
    <Container className="aviaTicket">
      <div className="Ticket">
        <Grid
          container
          spacing={2}
          sx={{ justifyContent: "space-between", alignItems: "flex-start" }}
        >
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
                <div className="checkbox">
                  <input type="checkbox" id="Uzbekistan Airways" />
                  <label htmlFor="Uzbekistan Airways">Uzbekistan Airways</label>
                </div>
                <div className="checkbox">
                  <input type="checkbox" id="Azal Airlines" />
                  <label htmlFor="Azal Airlines">Azal Airlines</label>
                </div>
                <div className="checkbox">
                  <input type="checkbox" id="Air Astana" />
                  <label htmlFor="Air Astana">Air Astana</label>
                </div>
                <div className="checkbox">
                  <input
                    type="checkbox"
                    id="Turkish Airlines"
                    name="Turkish Airlines"
                  />
                  <label htmlFor="Turkish Airlines">Turkish Airlines</label>
                </div>
                
              </div>
            </div>
          </Grid>

          <Grid item lg={9}>
            <div className="box">
              <div className="left">
                <div className="top">
                  <img src="" alt="" />
                  <h2>
                    <span className="type">Biznes</span>
                    <span className="class">(Z)</span>
                    <AirlineSeatReclineNormalIcon />
                  </h2>
                </div>

                <div className="bottom">
                  <div className="dataL">
                    <h2>IST</h2>
                    <h2 className="time">22:10</h2>
                    <p className="data">
                      <span>
                        <CalendarMonthIcon />
                      </span>
                      17.09.2023
                    </p>
                  </div>
                  <div className="map">
                    <div className="from">
                      <p>IST</p>
                      <LocationOnIcon />
                      <div className="af"></div>
                    </div>
                    <div className="line">
                      <p>5 soat</p>
                      <div></div>
                      <p>Parvoz: KC 918</p>
                    </div>
                    <div className="middle">
                      <p>ALA</p>
                      <LocationOnIcon />
                      <div className="af"></div>
                    </div>
                    <div className="line">
                      <p>5 soat</p>
                      <div></div>
                      <p>Parvoz: KC 918</p>
                    </div>
                    <div className="to">
                      <p>TAS</p>
                      <LocationOnIcon />
                      <div className="af"></div>
                    </div>
                  </div>
                  <div className="dataR">
                    <h2>UZB</h2>
                    <h2 className="time">22:10</h2>
                    <p className="data">
                      <span>
                        <CalendarMonthIcon />
                      </span>
                      19.09.2023
                    </p>
                  </div>
                </div>
              </div>

              <div className="right">
                <p className="rate">Tarif: klassik</p>
                <p className="luggage">
                  <LuggageIcon /> Chamadon: 23kg
                </p>
                <button className="bgBlue">3 977 200 UZS/326$</button>
                <button className="bgWhite">Tarif haqida</button>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}

export default Ticket;
