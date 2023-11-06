import React from "react";
import Skeleton from "@mui/material/Skeleton";
import "../Tickets/Ticket.css";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
export default function TicketSkeleton(props) {
  return (
    <>
    
        <Grid lg={12}>
          <div className="box" style={{ marginBottom: "20px" }}>
            <div className="container-box">
              <div className="left">
                <div className="top">
                  <img src="" alt="" />

                  <h2>
                    <Skeleton loading={props.isLoading}>
                      <h2>Uzbekistn airways</h2>
                    </Skeleton>

                    <Skeleton loading={props.isLoading}>
                      <p></p>
                      <span className="type">Ekanomhd awjhdija hidh</span>
                      <span className="class">E</span>
                    </Skeleton>
                  </h2>
                </div>

                <div className="bottom">
                  <div className="dataL">
                    <Skeleton loading={props.isLoading}>
                      <h2>TAS</h2>
                    </Skeleton>
                    <Skeleton loading={props.isLoading}>
                      <h2 className="time">10 da wda </h2>
                    </Skeleton>

                    <Skeleton loading={props.isLoading}>
                      <p className="data">
                        <span></span>
                        2021 wada ad
                      </p>
                    </Skeleton>
                  </div>
                  <div className="map">
                    <Skeleton loading={props.isLoading}>
                      <div className="from">
                        <p>tas</p>
                        <div className="af"></div>
                      </div>
                    </Skeleton>
                    <Skeleton loading={props.isLoading}>
                      <div className="line">
                        <p> 20 daqiqa dawdaw</p>
                        <div></div>
                        {/* <p>Parvoz: KC 918a</p> */}
                      </div>
                    </Skeleton>

                    <Skeleton loading={props.isLoading}>
                      <div className="to">
                        <p>TAS</p>
                        <div className="af"></div>
                      </div>
                    </Skeleton>
                  </div>

                  <div className="dataR">
                    <Skeleton loading={props.isLoading}>
                      <h2>TAsdaw</h2>
                    </Skeleton>

                    <Skeleton loading={props.isLoading}>
                      <h2 className="time">20</h2>
                    </Skeleton>

                    <Skeleton loading={props.isLoading}>
                      <p className="data">
                        <span></span>
                        2022
                      </p>
                    </Skeleton>
                  </div>
                </div>
              </div>

              <div className="right">
                <Skeleton loading={props.isLoading}>
                  <p
                    className="luggage"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    Chamadon: 20 kg
                  </p>
                </Skeleton>

                <Skeleton loading={props.isLoading}>
                  <button className="bgBlue">100000 UZS</button>
                </Skeleton>
                {/* <button className="bgWhite">Tarif haqida</button> */}
              </div>
            </div>
          </div>
        </Grid>

        <Grid lg={12}>
          <div className="box" style={{ marginBottom: "20px" }}>
            <div className="container-box">
              <div className="left">
                <div className="top">
                  <img src="" alt="" />

                  <h2>
                    <Skeleton loading={props.isLoading}>
                      <h2>Uzbekistn airways</h2>
                    </Skeleton>

                    <Skeleton loading={props.isLoading}>
                      <p></p>
                      <span className="type">Ekanomhd awjhdija hidh</span>
                      <span className="class">E</span>
                    </Skeleton>
                  </h2>
                </div>

                <div className="bottom">
                  <div className="dataL">
                    <Skeleton loading={props.isLoading}>
                      <h2>TAS</h2>
                    </Skeleton>
                    <Skeleton loading={props.isLoading}>
                      <h2 className="time">10 da wda </h2>
                    </Skeleton>

                    <Skeleton loading={props.isLoading}>
                      <p className="data">
                        <span></span>
                        2021 wada ad
                      </p>
                    </Skeleton>
                  </div>
                  <div className="map">
                    <Skeleton loading={props.isLoading}>
                      <div className="from">
                        <p>tas</p>
                        <div className="af"></div>
                      </div>
                    </Skeleton>
                    <Skeleton loading={props.isLoading}>
                      <div className="line">
                        <p> 20 daqiqa dawdaw</p>
                        <div></div>
                        {/* <p>Parvoz: KC 918a</p> */}
                      </div>
                    </Skeleton>

                    <Skeleton loading={props.isLoading}>
                      <div className="to">
                        <p>TAS</p>
                        <div className="af"></div>
                      </div>
                    </Skeleton>
                  </div>

                  <div className="dataR">
                    <Skeleton loading={props.isLoading}>
                      <h2>TAsdaw</h2>
                    </Skeleton>

                    <Skeleton loading={props.isLoading}>
                      <h2 className="time">20</h2>
                    </Skeleton>

                    <Skeleton loading={props.isLoading}>
                      <p className="data">
                        <span></span>
                        2022
                      </p>
                    </Skeleton>
                  </div>
                </div>
              </div>

              <div className="right">
                <Skeleton loading={props.isLoading}>
                  <p
                    className="luggage"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    Chamadon: 20 kg
                  </p>
                </Skeleton>

                <Skeleton loading={props.isLoading}>
                  <button className="bgBlue">100000 UZS</button>
                </Skeleton>
                {/* <button className="bgWhite">Tarif haqida</button> */}
              </div>
            </div>
          </div>
        </Grid>

        <Grid lg={12}>
          <div className="box" style={{ marginBottom: "20px" }}>
            <div className="container-box">
              <div className="left">
                <div className="top">
                  <img src="" alt="" />

                  <h2>
                    <Skeleton loading={props.isLoading}>
                      <h2>Uzbekistn airways</h2>
                    </Skeleton>

                    <Skeleton loading={props.isLoading}>
                      <p></p>
                      <span className="type">Ekanomhd awjhdija hidh</span>
                      <span className="class">E</span>
                    </Skeleton>
                  </h2>
                </div>

                <div className="bottom">
                  <div className="dataL">
                    <Skeleton loading={props.isLoading}>
                      <h2>TAS</h2>
                    </Skeleton>
                    <Skeleton loading={props.isLoading}>
                      <h2 className="time">10 da wda </h2>
                    </Skeleton>

                    <Skeleton loading={props.isLoading}>
                      <p className="data">
                        <span></span>
                        2021 wada ad
                      </p>
                    </Skeleton>
                  </div>
                  <div className="map">
                    <Skeleton loading={props.isLoading}>
                      <div className="from">
                        <p>tas</p>
                        <div className="af"></div>
                      </div>
                    </Skeleton>
                    <Skeleton loading={props.isLoading}>
                      <div className="line">
                        <p> 20 daqiqa dawdaw</p>
                        <div></div>
                        {/* <p>Parvoz: KC 918a</p> */}
                      </div>
                    </Skeleton>

                    <Skeleton loading={props.isLoading}>
                      <div className="to">
                        <p>TAS</p>
                        <div className="af"></div>
                      </div>
                    </Skeleton>
                  </div>

                  <div className="dataR">
                    <Skeleton loading={props.isLoading}>
                      <h2>TAsdaw</h2>
                    </Skeleton>

                    <Skeleton loading={props.isLoading}>
                      <h2 className="time">20</h2>
                    </Skeleton>

                    <Skeleton loading={props.isLoading}>
                      <p className="data">
                        <span></span>
                        2022
                      </p>
                    </Skeleton>
                  </div>
                </div>
              </div>

              <div className="right">
                <Skeleton loading={props.isLoading}>
                  <p
                    className="luggage"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    Chamadon: 20 kg
                  </p>
                </Skeleton>

                <Skeleton loading={props.isLoading}>
                  <button className="bgBlue">100000 UZS</button>
                </Skeleton>
                {/* <button className="bgWhite">Tarif haqida</button> */}
              </div>
            </div>
          </div>
        </Grid>

    </>
  );
}
