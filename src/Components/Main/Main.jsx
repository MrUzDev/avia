import React, { useContext, useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import AirplaneTicketIcon from "@mui/icons-material/AirplaneTicket";
import ConnectingAirportsIcon from "@mui/icons-material/ConnectingAirports";

import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import FlightLandIcon from "@mui/icons-material/FlightLand";

import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import "./Main.css";
import { Contexts } from "../../contexts/Contexts";
import { Button } from "@mui/material";
import TypeModal from "../ClassType/ClassType";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useSearchAirportsMutation, useSearchAirportsToMutation, useGetRecommendationMutation } from "../../RTKQueryApi/LoginApi";

function Main() {
  const { show, setShow } = useContext(Contexts);
  const [airlinesDataFrom, setAirlinesDataFrom] = useState()
  const [airlinesDataTo, setAirlinesDataTo] = useState()
  const [myAirlines, setMyAirlines] = useState()
  const [myAirlinesCode, setMyAirlinesCode] = useState()

  const [myAirlinesTo, setMyAirlinesTo] = useState()
  const [myAirlinesCodeTo, setMyAirlinesCodeTo] = useState()

  const [myAirlinesDate, setMyAirlinesDate] = useState()

  const handleShow = () => {
    setShow(true);
  };

  const [searchAirports, {data : searchAirportsFrom, isSuccess: searchAirportsFromSuc}] = useSearchAirportsMutation()
  const [searchAirportsto, {data: searchAirportsTo, isSuccess: searchAirportsToSuc}] = useSearchAirportsToMutation()
  const [getRecommendation, {data: getRecommendationData, isSuccess: getRecommendationSuc}] = useGetRecommendationMutation()


  // search airports from start
  const searchAirportsFnc = (e) => {
    console.log(e.length);
    if(e.length >= 3) {
      const searchData = {
        lang: 'ru',
        part: e
      }
      
      searchAirports(searchData)
    }
  }

  useEffect(() => {
    if(searchAirportsFromSuc) {
      const keys = Object.values(searchAirportsFrom.data.cities);
      console.log(keys);

      setAirlinesDataFrom(Object.values(searchAirportsFrom.data.cities))
    }
  }, [searchAirportsFrom])

  // search airports from end


  // search airports to start


  const searchAirportsToFnc = (e) => {
    console.log(e.length);
    if(e.length >= 3) {
      const searchData = {
        lang: 'ru',
        part: e
      }
      
      searchAirportsto(searchData)
    }
  }

  useEffect(() => {
    if(searchAirportsToSuc) {
      const keys = Object.values(searchAirportsTo.data.cities);
      console.log(keys);

      setAirlinesDataTo(Object.values(searchAirportsTo.data.cities))
    }
  }, [searchAirportsTo])


  // search airports to end


  // get recommendation start

  const getRecommendationFnc = (e) => {
      const recomData = {
          adt: 1,
          chd: 0,
          inf: 0,
          ins: 0,
          src: 0,
          yth: 0,
          lang: "ru",
          segments: [
            {
              from: myAirlinesCode,
              to: myAirlinesCodeTo,
              date: myAirlinesDate.split('-').reverse().join('-')
            }
          ],
          filter_airlines: [],
          is_direct_only: 0,
          gds_white_list: [],
          gds_black_list: [],
          class_: "a"
      }
      
      getRecommendation(recomData)
  }

  useEffect(() => {
    if(getRecommendationSuc) {
      console.log(getRecommendationData.data.flights);
      console.log(getRecommendationData.data);
    }
  }, [getRecommendationData])

  // get recommendation end


  useEffect(() => {
    console.log(myAirlines, myAirlinesCode);
    console.log(myAirlinesDate);
  }, [myAirlines, myAirlinesDate])

  return (
    <div className="main">
      <Container>
        <div className="flights">
          <h2>
            <AirplaneTicketIcon />
            Aviachipta
          </h2>

          <Grid
            sx={{
              justifyContent: "space-between",
              alignItems: "center",
            }}
            container
            spacing={2}
          >
            <Grid item lg={3} md={6} xs={12} sx={{ position: "relative" }}>
              <label htmlFor="">
                <p>
                  Qayerdan <FlightTakeoffIcon />
                </p>
                <input type="text" name="" id="" placeholder="Tashkent" value={myAirlines} onChange={(e) => {setMyAirlines(e.target.value) ;searchAirportsFnc(e.target.value)}}/>

                <ChangeCircleIcon
                  sx={{
                    position: "absolute",
                    bottom: "8px",
                    right: "-22px",
                    fontSize: "30px",
                  }}
                />
              </label>
              {airlinesDataFrom && (
                <div className="searchDataList">
                  {airlinesDataFrom.map((item, index) => 
                  <div key={index} onClick={() => {setMyAirlines(item.cityName); setMyAirlinesCode(item.cityIataCode); setAirlinesDataFrom()}}>
                      <p>{item.cityName}</p>
                      <p>{item.cityIataCode}</p>
                  </div>
                  )}
                </div>
              )}
            </Grid>

            <Grid item lg={3} md={6} xs={12} sx={{ position: "relative" }}>
              <label htmlFor="">
                <p>
                  Qayerga
                  <FlightLandIcon />
                </p>
                <input type="text" name="" id="" value={myAirlinesTo} placeholder="Istanbul" onChange={(e) => {setMyAirlinesTo(e.target.value); searchAirportsToFnc(e.target.value)}}/>
              </label>

              {airlinesDataTo && (
                <div className="searchDataList2">
                  {airlinesDataTo.map((item, index) => 
                  <div key={index} onClick={() => {setMyAirlinesTo(item.cityName); setMyAirlinesCodeTo(item.cityIataCode); setAirlinesDataTo()}}>
                      <p>{item.cityName}</p>
                      <p>{item.cityIataCode}</p>
                  </div>
                  )}
                </div>
              )}
            </Grid>

            <Grid item lg={2} xs={6}>
              <label htmlFor="">
                Ketish sanasi
                <input type="date" name="" id="" onChange={(e) => setMyAirlinesDate(e.target.value)}/>
              </label>
            </Grid>

            {/* <Grid item lg={2} xs={6}>
              <label htmlFor="">
                Kelish sanasi
                <input type="date" name="" id=""/>
              </label>
            </Grid> */}

            <Grid
              item
              sx={{
                position: "relative",
              }}
              lg={2}
              xs={12}
            >
              <label htmlFor="">
                Yo'lovchilar va klass
                {/* <input
                  onFocus={() => setShow(true)}
                  type="text"
                  name=""
                  id=""
                /> */}
                <div onClick={handleShow} className="passengers">
                  <h3>
                    1, <span>Istalgan</span>{" "}
                  </h3>
                  <ArrowDropDownIcon />
                </div>
                {/* <Button onClick={handleShow}>show modal</Button> */}
              </label>
              <TypeModal />
            </Grid>

            <Grid item lg={12} xs={12}>
              <button className="find" onClick={(e) => getRecommendationFnc()}>
                Chipta izlash
                <ConnectingAirportsIcon />
              </button>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
}

export default Main;
