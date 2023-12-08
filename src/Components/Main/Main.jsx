import React, { useContext, useEffect, useRef, useState } from "react";
import "./Main.css";
import { Contexts } from "../../contexts/Contexts";
import { useSearchAirportsMutation, useSearchAirportsToMutation, useGetRecommendationMutation, useRegisterApiMutation } from "../../RTKQueryApi/AllApi";
import { useGetMyCityQuery } from "../../RTKQueryApi/MyCityApi";
import { changeTicketData, addFilterAirlinesName, clearFilterAirlinesName, clearFilterAirlines } from "../../Slice/AllSlice";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Ticket from "../Tickets/Ticket";
import moment from 'moment';
import jwt_decode from "jwt-decode";
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import Loader from "../Loader/Loader";
import DatePicker from "react-multi-date-picker";
import transition from "react-element-popper/animations/transition"
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import TrainOutlinedIcon from '@mui/icons-material/TrainOutlined';
import arrowSwap from "../../Assets/icons/arrow-swap-horizontal.svg"
import kalendar from "../../Assets/icons/calendar.svg";
import arrowDown from "../../Assets/icons/arrow-down.svg"
import arrowSwap2 from "../../Assets/icons/arrow-3.svg"
import girlImg from "../../Assets/images/girl.png"
import Switch from '@mui/material/Switch';
import { setTicketAdult, setTicketChild, setTicketBabies, setTicketTarif } from "../../Slice/AllSlice";


function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}



function Main() {
  const { show, setShow } = useContext(Contexts);
  const [airlinesDataFrom, setAirlinesDataFrom] = useState()
  const [airlinesDataTo, setAirlinesDataTo] = useState()
  const [myAirlines, setMyAirlines] = useState()
  const [myAirlinesCode, setMyAirlinesCode] = useState()

  const [myAirlinesTo, setMyAirlinesTo] = useState()
  const [myAirlinesCodeTo, setMyAirlinesCodeTo] = useState()

  const [myAirlinesDate, setMyAirlinesDate] = useState([])
  const [myAirlinesDateTo, setMyAirlinesDateTo] = useState()
  const [loader, setLoader] = useState(true);
  const [tokenAirlines, setTokenAirlines] = useState()
  const [value, setValue] = React.useState(0);
  const [classModalShow, setClassModalShow] = useState(false)
  const [checkedBiznes, setCheckedBiznes] = useState(false);
  const [ticketLoad, setTicketLoad] = useState(false)


  const ticketAdults = useSelector((state) => state.loginSlice.ticketAdults);
  const ticketChild = useSelector((state) => state.loginSlice.ticketChild);
  const ticketBabies = useSelector((state) => state.loginSlice.ticketBabies);
  const ticketTarif = useSelector((state) => state.loginSlice.ticketTarif);
  const filterAirlines = useSelector((state) => state.loginSlice.filterAirlines);
  const changeFilterAir = useSelector((state) => state.loginSlice.changeFilterAir);
  const loggedIn = useSelector((state) => state.loginSlice.loggedIn);


  const clientId = "428493911231-e8ipsql0crd7loti8t96cun9u397valg.apps.googleusercontent.com";

  const datePickerRef = useRef()


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const dispatch = useDispatch()
  const handleShow = () => {
    setShow(true);
  };


  const [searchAirports, { data: searchAirportsFrom, isSuccess: searchAirportsFromSuc }] = useSearchAirportsMutation()
  const [searchAirportsto, { data: searchAirportsTo, isSuccess: searchAirportsToSuc }] = useSearchAirportsToMutation()
  const [getRecommendation, { data: getRecommendationData, isLoading: loadingGetRecommendation, isSuccess: getRecommendationSuc }] = useGetRecommendationMutation()
  const { data: getMyCityData, isLoading: getMyCityLoading, isSuccess: getMyCitySuc, isError: getMyCiryErr } = useGetMyCityQuery()
  const [registerApi, { data: registerApiData, isSuccess: registerApiSuc }] = useRegisterApiMutation()

  const dataError = () => toast.error("Ma'lumotlar to'liq kiritilmadi!");

  // search airports from start
  const searchAirportsFnc = (e) => {
    setAirlinesDataFrom()
    if (e.length >= 2) {
      const searchData = {
        lang: 'ru',
        part: e
      }

      searchAirports(searchData)
    } else {
      setMyAirlinesCode()
    }

  }

  useEffect(() => {
    if (searchAirportsFromSuc && searchAirportsFrom) {
      let cities = searchAirportsFrom.data.cities
      cities && setMyAirlinesCode(Object.values(cities)[0].cityIataCode);
      cities && setAirlinesDataFrom(Object.values(cities))
      getMyCityData && myAirlines === getMyCityData.city && setAirlinesDataFrom()
      cities == undefined && setMyAirlines()

      setLoader(false)
    }
  }, [searchAirportsFrom])

  // search airports from end


  // search airports to start


  const searchAirportsToFnc = (e) => {
    setAirlinesDataTo()
    if (e.length >= 2) {
      const searchData = {
        lang: 'ru',
        part: e
      }
      searchAirportsto(searchData)
    } else {
      setMyAirlinesCodeTo()
    }
  }

  useEffect(() => {
    if (searchAirportsToSuc && searchAirportsTo) {
      let cities = searchAirportsTo.data.cities
      cities && setAirlinesDataTo(Object.values(cities))
    }
  }, [searchAirportsTo])


  useEffect(() => {
    if (changeFilterAir) {
      changeFilterAir && getRecommendationFnc()
    }
  }, [changeFilterAir, filterAirlines])


  // search airports to end


  // get recommendation start

  const getRecommendationFnc = (e) => {
    dispatch(changeTicketData(undefined))
    if (e == 'for_btn') {
      dispatch(clearFilterAirlinesName())
      dispatch(clearFilterAirlines())
    }
    if (myAirlinesCode && myAirlinesCodeTo && myAirlinesDate.length > 0 && ticketAdults) {

      const recomData = {
        adt: ticketAdults,
        chd: ticketChild,
        inf: ticketBabies,
        ins: 0,
        src: 0,
        yth: 0,
        lang: "en",
        segments: myAirlinesDate[1] ? [
          {
            from: myAirlinesCode,
            to: myAirlinesCodeTo,
            date: myAirlinesDate[0].format?.("DD-MM-YYYY")
          },
          {
            from: myAirlinesCodeTo,
            to: myAirlinesCode,
            date: myAirlinesDate[1].format?.("DD-MM-YYYY")
          }
        ] : [{
          from: myAirlinesCode,
          to: myAirlinesCodeTo,
          date: myAirlinesDate[0].format?.("DD-MM-YYYY")
        }],
        filter_airlines: filterAirlines,
        is_direct_only: 0,
        gds_white_list: [],
        gds_black_list: [],
        class_: ticketTarif,
        token: filterAirlines.length >= 1 ? tokenAirlines : '',
        is_baggage: true,
        price_order: 1,
        is_charter: false,
      }

      setTicketLoad(true)

      getRecommendation(recomData)
    } else dataError()
  }

  useEffect(() => {
    if (getRecommendationSuc) {
      console.log(getRecommendationData.data);
      dispatch(changeTicketData(getRecommendationData.data))
      console.log(getRecommendationData.data);
      getRecommendationData.data && setTokenAirlines(getRecommendationData.data.search.token)
      getRecommendationData.data && filterAirlines.length == 0 && getRecommendationData.data.flights.forEach((item) => item.provider.supplier.title && dispatch(addFilterAirlinesName({ name: item.provider.supplier.title, code: item.provider.supplier.code })))
    }
  }, [getRecommendationData])

  // get recommendation end


  // reverse Airport Name start
  const reverseAirportName = () => {
    let myAirlinesToDef = myAirlinesTo
    let myAirlinesDef = myAirlines
    let myAirlinesCodeDef = myAirlinesCode
    let myAirlinesCodeToDef = myAirlinesCodeTo

    setMyAirlinesTo(myAirlinesDef)
    setMyAirlines(myAirlinesToDef)
    setMyAirlinesCode(myAirlinesCodeToDef)
    setMyAirlinesCodeTo(myAirlinesCodeDef)
  }

  useEffect(() => {
    console.log(myAirlinesTo);
  }, [myAirlinesTo]);

  // reverse Airport Name end

  useEffect(() => {
    moment().add(1, 'days').endOf('day').format('YYYY-MM-DD').toString()
    if (getMyCitySuc) {
      setMyAirlines(getMyCityData.city)

      searchAirportsFnc(getMyCityData.city.split(' ')[0])
    }
  }, [getMyCityData])


  const login = (response) => {
    var token = jwt_decode(response.credential)

    const registerData = {
      email: token.email,
      token: response.credential,
      type: "web"
    }
    registerApi(registerData)
  }

  useEffect(() => {
    if (registerApiSuc) {
      localStorage.setItem('access', registerApiData.jwt_token.access)
      localStorage.setItem('refresh', registerApiData.jwt_token.refresh)
    }
  }, [registerApiData])

  useEffect(() => {
    if (getMyCiryErr) {
      setLoader(false)
    }
  }, [getMyCiryErr])

  useEffect(() => {
    if (classModalShow) {
      document.querySelector('.classBg').style.height = `${document.body.scrollHeight + 30}px`
    }
  }, [classModalShow])

  useEffect(() => {

  }, [myAirlinesCode])


  return (
    <>
      {!loggedIn && (
        <GoogleOAuthProvider clientId={clientId}>
          <GoogleLogin
            onSuccess={credentialResponse => {
              login(credentialResponse)
            }}
            onError={() => {
              console.log('Login Failed');
            }}
            useOneTap
          />
        </GoogleOAuthProvider>
      )}

      <div className='mt-[5%] mb-11 main'>
        <div className="container mx-auto">
          <h1 className='hidden lg:block text-center text-[64px] text-[#0057BE] mb-[2%] font-bold' style={{ fontFamily: 'GilroyBlack' }}> Самый правильный путь к путешествиям</h1>
          <Box sx={{ width: '100%' }}>
            <Box>
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab iconPosition='start' icon={<AirplanemodeActiveIcon />} label="Авиа" {...a11yProps(0)} />
                <Tab iconPosition='start' icon={<CorporateFareIcon />} label="Отели" {...a11yProps(1)} />
                <Tab iconPosition='start' icon={<TrainOutlinedIcon />} label="Ж/д" {...a11yProps(2)} />
              </Tabs>
            </Box>


            <CustomTabPanel value={value} index={0} className="mt-5 pb-5">
              <div className='bg-[#0057BE] h-[66px] hidden lg:flex items-center rounded-lg'>
                <div className="h-full w-full flex items-center" style={{ padding: '3px' }}>
                  <div className="relative col-4 h-full" style={{ padding: '0' }}>
                    <input className='h-full w-full rounded-l-lg border border-[#c0bfbf] capitalize outline-none px-[10px]' type="text" placeholder='Откуда' value={myAirlines || ''} onChange={(e) => { setMyAirlines(e.target.value); searchAirportsFnc(e.target.value) }} />
                    {airlinesDataFrom && (
                      <div className="searchDataList z-10">
                        {airlinesDataFrom.map((item, index) =>
                          <div key={index} onClick={() => { setMyAirlines(item.cityName); setMyAirlinesCode(item.cityIataCode); setAirlinesDataFrom() }}>
                            <p>{item.cityName}</p>
                            <p className="text-[#AEAEAE] hover:text-[#fff]">{item.cityIataCode}</p>
                          </div>
                        )}
                      </div>
                    )}

                  </div>
                  <div className='h-full col-1 border border-[#c0bfbf] outline-none bg-white w-[60px] flex items-center justify-center'>
                    <img src={arrowSwap} className="cursor-pointer w-full" alt="" onClick={() => reverseAirportName()} />
                  </div>
                  <div className="relative col-4 h-full" style={{ padding: '0' }}>
                    <input className='h-full w-full border border-[#c0bfbf] outline-none px-[10px]' type="text" placeholder='Куда' value={myAirlinesTo || ''} onChange={(e) => { setMyAirlinesTo(e.target.value); searchAirportsToFnc(e.target.value) }} />
                    {airlinesDataTo && (
                      <div className="searchDataList2 z-10">
                        {airlinesDataTo.map((item, index) =>
                          <div key={index} onClick={() => { setMyAirlinesTo(item.cityName); setMyAirlinesCodeTo(item.cityIataCode); setAirlinesDataTo() }}>
                            <p>{item.cityName}</p>
                            <p className="text-[#AEAEAE] cityCode">{item.cityIataCode}</p>
                          </div>
                        )}
                      </div>
                    )}

                  </div>
                  <div className="col-4 h-full" style={{ padding: '0' }}>
                    <label htmlFor="">
                      <DatePicker
                        onChange={(e) => { setMyAirlinesDate(e) }}
                        minDate={new Date()}
                        animations={[transition()]}
                        headerOrder={["MONTH_YEAR", "LEFT_BUTTON", "RIGHT_BUTTON"]}
                        numberOfMonths={2}
                        portal={true}
                        range
                        value={myAirlinesDate}
                        ref={datePickerRef}
                        style={{ display: 'none' }}
                      />
                      <input type="text" placeholder="Когда" className='h-full w-full border border-[#c0bfbf] outline-none px-[10px]' value={myAirlinesDate[0] ? myAirlinesDate[0].format?.("DD-MM-YYYY") : ''} onClick={() => datePickerRef.current.openCalendar()} />

                    </label>
                  </div>
                  <input type="text" placeholder="Обратно" className='h-full w-full border border-[#c0bfbf] outline-none px-[10px] col-3' style={{ padding: '0 10px' }} value={myAirlinesDate[1] ? myAirlinesDate[1].format?.("DD-MM-YYYY") : ''} onClick={() => datePickerRef.current.openCalendar()} />

                  <div className='h-full rounded-r-lg border border-[#c0bfbf] outline-none px-[10px] bg-white w-[226px]  flex items-center justify-between relative col-4'>
                    <div className="flex items-center justify-between w-full cursor-pointer" onClick={() => setClassModalShow(!classModalShow)}>
                      <div>
                        <h3>{ticketAdults + ticketChild + ticketBabies} пассажир</h3>
                        <p className='text-[#AEAEAE]'>{ticketTarif === 'b' ? 'Бизнес' : 'все'} класс</p>
                      </div>

                      <img src={arrowDown} alt="" />
                    </div>



                    {classModalShow && (
                      <div className="absolute p-5 min-w-full right-0 bg-[white] z-10 text-[#222] shadow-2xl rounded-lg" style={{ top: 'calc(100% + 10px)', width: '190%', maxWidth: '200%' }}>
                        <div><h3>{ticketAdults + ticketChild + ticketBabies} пассажир</h3></div>
                        <div className="flex items-center justify-between my-3">
                          <p className="text-lg mr-5 text-[#222] font-light">12 лет и старше</p>
                          <div className="flex items-center justify-between">
                            <button className={`${ticketAdults > 0 ? 'bg-[#3379CB]' : 'bg-[#AEAEAE]'} p-3 rounded-lg text-white`} style={{ lineHeight: '0.5' }} onClick={() => ticketAdults > 1 && dispatch(setTicketAdult(ticketAdults - 1))}>-</button>
                            <h1 className="mx-3">{ticketAdults}</h1>
                            <button className="bg-[#3379CB] p-3 rounded-lg text-white" style={{ lineHeight: '0.5' }} onClick={() => dispatch(setTicketAdult(ticketAdults + 1))}>+</button>
                          </div>
                        </div>

                        <div className="flex items-center justify-between mb-3">
                          <h2 className="text-lg mr-5 text-[#222] font-light">от 2 до 12 лет</h2>
                          <div className="flex items-center justify-between">
                            <button className={`${ticketChild > 0 ? 'bg-[#3379CB]' : 'bg-[#AEAEAE]'} p-3 rounded-lg text-white`} style={{ lineHeight: '0.5' }} onClick={() => ticketChild > 0 && dispatch(setTicketChild(ticketChild - 1))}>-</button>
                            <h1 className="mx-3">{ticketChild}</h1>
                            <button className="bg-[#3379CB] p-3 rounded-lg text-white" style={{ lineHeight: '0.5' }} onClick={() => dispatch(setTicketChild(ticketChild + 1))}>+</button>
                          </div>
                        </div>

                        <div className="flex items-center justify-between mb-3">
                          <h2 className="text-lg mr-5 text-[#222] font-light">до 2 лет</h2>
                          <div className="flex items-center justify-between">
                            <button className={`${ticketBabies > 0 ? 'bg-[#3379CB]' : 'bg-[#AEAEAE]'} p-3 rounded-lg text-white`} style={{ lineHeight: '0.5' }} onClick={() => ticketBabies > 0 && dispatch(setTicketBabies(ticketBabies - 1))}>-</button>
                            <h1 className="mx-3">{ticketBabies}</h1>
                            <button className="bg-[#3379CB] p-3 rounded-lg text-white" style={{ lineHeight: '0.5' }} onClick={() => dispatch(setTicketBabies(ticketBabies + 1))}>+</button>
                          </div>
                        </div>

                        <div className="border-b-4 pb-4 pt-2">
                          <p className="text-sm">Укажите возраст на момент отправления</p>
                        </div>

                        <div>
                          <Switch
                            checked={checkedBiznes}
                            onChange={(e) => { setCheckedBiznes(e.target.checked); e.target.checked ? dispatch(setTicketTarif('b')) : dispatch(setTicketTarif('a')) }}
                            inputProps={{ 'aria-label': 'controlled' }}
                          />
                          <label htmlFor="">Бизнес класс</label>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className='flex items-center justify-center col-4'>
                    <button className='bg-[transparent] mr-3 text-white h-[66px] w-full' onClick={(e) => getRecommendationFnc('for_btn')}>
                      Найти
                    </button>
                  </div>

                </div>
              </div>




              <div className='flex lg:hidden flex-col'>
                <div className='p-[15px] relative flex flex-col border border-[#c0bfbf] rounded-lg'>
                  <input className='outline-none px-[10px]' type="text" placeholder='Откуда' value={myAirlines || ''} onChange={(e) => { setMyAirlines(e.target.value); searchAirportsFnc(e.target.value) }} />

                  {airlinesDataFrom && (
                    <div className="searchDataList z-10">
                      {airlinesDataFrom.map((item, index) =>
                        <div key={index} onClick={() => { setMyAirlines(item.cityName); setMyAirlinesCode(item.cityIataCode); setAirlinesDataFrom() }}>
                          <p>{item.cityName}</p>
                          <p>{item.cityIataCode}</p>
                        </div>
                      )}
                    </div>
                  )}

                  <div className='flex w-full items-center relative'>
                    <div className='border border-[#c0bfbf] w-full'></div>
                    <div className='h-[40px] w-[50px] flex items-center justify-center rounded-[50%] bg-[#AEAEAE]'>
                      <img className='' src={arrowSwap2} alt="" onClick={() => reverseAirportName()} />
                    </div>
                  </div>
                  <input className='outline-none px-[10px]' type="text" placeholder='Куда' value={myAirlinesTo || ''} onChange={(e) => { setMyAirlinesTo(e.target.value); searchAirportsToFnc(e.target.value) }} />

                  {airlinesDataTo && (
                    <div className="searchDataList2 z-10">
                      {airlinesDataTo.map((item, index) =>
                        <div key={index} onClick={() => { setMyAirlinesTo(item.cityName); setMyAirlinesCodeTo(item.cityIataCode); setAirlinesDataTo() }}>
                          <p>{item.cityName}</p>
                          <p>{item.cityIataCode}</p>
                        </div>
                      )}
                    </div>
                  )}

                </div>
                <div className='flex items-center justify-between mt-[15px] gap-3'>
                  <div className='h-[60px] bg-white w-full flex items-center justify-between rounded-lg'>
                    <label htmlFor="" className="h-full w-full ">

                      <input type="text" placeholder="Когда" className='h-full w-full border rounded-lg border-[#c0bfbf] outline-none px-[10px]' value={myAirlinesDate[0] ? myAirlinesDate[0].format?.("DD-MM-YYYY") : ''} onClick={() => datePickerRef.current.openCalendar()} />

                    </label>
                  </div>
                  <input className='h-[60px] border border-[#c0bfbf] outline-none px-[10px] w-full rounded-lg' type="text" placeholder='Обратно' value={myAirlinesDate[1] ? myAirlinesDate[1].format?.("DD-MM-YYYY") : ''} onClick={() => datePickerRef.current.openCalendar()} />
                </div>
                <div className='h-[60px] mt-[15px] rounded-lg border border-[#c0bfbf] outline-none px-[10px] bg-white w-full  flex items-center justify-between' onClick={() => setClassModalShow(!classModalShow)}>
                  <div>
                    <h3>{ticketAdults + ticketChild + ticketBabies} пассажир</h3>
                    <p className='text-[#AEAEAE]'>{ticketTarif === 'b' ? 'Бизнес' : 'все'} класс</p>
                  </div>
                  <img src={arrowDown} alt="" />
                </div>

                {classModalShow && (
                  <div className="absolute p-5 min-w-full right-0 bg-[white] z-10 shadow-2xl rounded-lg" style={{ top: 'calc(100% + 10px)', width: '100%' }}>
                    <div><h3>{ticketAdults + ticketChild + ticketBabies} пассажир</h3></div>
                    <div className="flex items-center justify-between my-3">
                      <p className="text-lg mr-5 text-[#222] font-light ">12 лет и старше</p>
                      <div className="flex items-center justify-between">
                        <button className="bg-[#3379CB] p-3 rounded-lg text-white" style={{ lineHeight: '0.5' }} onClick={() => dispatch(setTicketAdult(ticketAdults + 1))}>+</button>
                        <h1 className="mx-3">{ticketAdults}</h1>
                        <button className="bg-[#3379CB] p-3 rounded-lg text-white" style={{ lineHeight: '0.5' }} onClick={() => ticketAdults > 1 && dispatch(setTicketAdult(ticketAdults - 1))}>-</button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-3">
                      <h2 className="text-lg mr-5 text-[#222] font-light">от 2 до 12 лет</h2>
                      <div className="flex items-center justify-between">
                        <button className="bg-[#3379CB] p-3 rounded-lg text-white" style={{ lineHeight: '0.5' }} onClick={() => dispatch(setTicketChild(ticketChild + 1))}>+</button>
                        <h1 className="mx-3">{ticketChild}</h1>
                        <button className="bg-[#3379CB] p-3 rounded-lg text-white" style={{ lineHeight: '0.5' }} onClick={() => ticketChild > 0 && dispatch(setTicketChild(ticketChild - 1))}>-</button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-3">
                      <h2 className="text-lg mr-5 text-[#222] font-light">до 2 лет</h2>
                      <div className="flex items-center justify-between">
                        <button className="bg-[#3379CB] p-3 rounded-lg text-white" style={{ lineHeight: '0.5' }} onClick={() => dispatch(setTicketBabies(ticketBabies + 1))}>+</button>
                        <h1 className="mx-3">{ticketBabies}</h1>
                        <button className="bg-[#3379CB] p-3 rounded-lg text-white" style={{ lineHeight: '0.5' }} onClick={() => ticketBabies > 0 && dispatch(setTicketBabies(ticketBabies - 1))}>-</button>
                      </div>
                    </div>

                    <div className="border-b-4 pb-4 pt-2">
                      <p className="text-sm">Укажите возраст на момент отправления</p>
                    </div>

                    <div>
                      <Switch
                        checked={checkedBiznes}
                        onChange={(e) => { setCheckedBiznes(e.target.checked); e.target.checked ? dispatch(setTicketTarif('b')) : dispatch(setTicketTarif('a')) }}
                        inputProps={{ 'aria-label': 'controlled' }}
                      />
                      <label htmlFor="">Бизнес класс</label>
                    </div>
                  </div>
                )}

                <div>
                  <button className='bg-[#0057BE] rounded-lg mt-3 mr-3 text-white h-[66px] w-full' onClick={(e) => getRecommendationFnc('for_btn')}>
                    Найти
                  </button>
                </div>
              </div>





            </CustomTabPanel>
            <CustomTabPanel value={value} index={1} className="mt-5 pb-5">
              <div className='bg-[#0057BE] h-[66px] hidden lg:flex items-center px-[3px] rounded-lg'>
                <div className="h-full w-full flex items-center" style={{ padding: '3px' }}>
                  <div className="relative col-4 h-full" style={{ padding: '0' }}>
                    <input className='h-full w-full rounded-l-lg border border-[#c0bfbf] capitalize outline-none px-[10px]' type="text" placeholder='Откуда' value={myAirlines || ''} onChange={(e) => { setMyAirlines(e.target.value); searchAirportsFnc(e.target.value) }} />
                    {airlinesDataFrom && (
                      <div className="searchDataList z-10">
                        {airlinesDataFrom.map((item, index) =>
                          <div key={index} onClick={() => { setMyAirlines(item.cityName); setMyAirlinesCode(item.cityIataCode); setAirlinesDataFrom() }}>
                            <p>{item.cityName}</p>
                            <p>{item.cityIataCode}</p>
                          </div>
                        )}
                      </div>
                    )}

                  </div>
                  <div className='h-full col-1 border border-[#c0bfbf] outline-none bg-white w-[60px] flex items-center justify-center'>
                    <img src={arrowSwap} className="cursor-pointer w-full" alt="" onClick={() => reverseAirportName()} />
                  </div>
                  <div className="relative col-4 h-full" style={{ padding: '0' }}>
                    <input className='h-full w-full border border-[#c0bfbf] outline-none px-[10px]' type="text" placeholder='Куда' value={myAirlinesTo || ''} onChange={(e) => { setMyAirlinesTo(e.target.value); searchAirportsToFnc(e.target.value) }} />
                    {airlinesDataTo && (
                      <div className="searchDataList2 z-10">
                        {airlinesDataTo.map((item, index) =>
                          <div key={index} onClick={() => { setMyAirlinesTo(item.cityName); setMyAirlinesCodeTo(item.cityIataCode); setAirlinesDataTo() }}>
                            <p>{item.cityName}</p>
                            <p>{item.cityIataCode}</p>
                          </div>
                        )}
                      </div>
                    )}

                  </div>
                  <div className="col-4 h-full" style={{ padding: '0' }}>
                    <label htmlFor="">
                      <DatePicker
                        onChange={(e) => { setMyAirlinesDate(e) }}
                        // format="DD-MM-YYYY"
                        minDate={new Date()}
                        // value={myAirlinesDate}
                        animations={[transition()]}
                        headerOrder={["MONTH_YEAR", "LEFT_BUTTON", "RIGHT_BUTTON"]}
                        numberOfMonths={2}
                        portal={true}
                        range
                        ref={datePickerRef}
                        style={{ display: 'none' }}
                      />
                      <input type="text" placeholder="Когда" className='h-full w-full border border-[#c0bfbf] outline-none px-[10px]' value={myAirlinesDate[0] ? myAirlinesDate[0].format?.("DD-MM-YYYY") : ''} onClick={() => datePickerRef.current.openCalendar()} />

                    </label>
                  </div>
                  <input type="text" placeholder="Обратно" className='h-full w-full border border-[#c0bfbf] outline-none px-[10px] col-3' style={{ padding: '0 10px' }} value={myAirlinesDate[1] ? myAirlinesDate[1].format?.("DD-MM-YYYY") : ''} onClick={() => datePickerRef.current.openCalendar()} />

                  <div className='h-full rounded-r-lg border border-[#c0bfbf] outline-none px-[10px] bg-white w-[226px]  flex items-center justify-between relative col-4'>
                    <div className="flex items-center justify-between w-full cursor-pointer" onClick={() => setClassModalShow(!classModalShow)}>
                      <div>
                        <h3>{ticketAdults + ticketChild + ticketBabies} пассажир</h3>
                        <p className='text-[#AEAEAE]'>{ticketTarif === 'b' ? 'Бизнес' : 'все'} класс</p>
                      </div>

                      <img src={arrowDown} alt="" />
                    </div>



                    {classModalShow && (
                      <div className="absolute p-5 min-w-full right-0 bg-[white] z-10 text-[#222] shadow-2xl rounded-lg" style={{ top: 'calc(100% + 10px)', width: '100%' }}>
                        <div><h3>{ticketAdults + ticketChild + ticketBabies} пассажир</h3></div>
                        <div className="flex items-center justify-between my-3">
                          <p className="text-lg mr-5 text-[#222] font-light">12 лет и старше</p>
                          <div className="flex items-center justify-between">
                            <button className="bg-[#3379CB] p-3 rounded-lg text-white" style={{ lineHeight: '0.5' }} onClick={() => dispatch(setTicketAdult(ticketAdults + 1))}>+</button>
                            <h1 className="mx-3">{ticketAdults}</h1>
                            <button className="bg-[#3379CB] p-3 rounded-lg text-white" style={{ lineHeight: '0.5' }} onClick={() => ticketAdults > 1 && dispatch(setTicketAdult(ticketAdults - 1))}>-</button>
                          </div>
                        </div>

                        <div className="flex items-center justify-between mb-3">
                          <h2 className="text-lg mr-5 text-[#222] font-light">от 2 до 12 лет</h2>
                          <div className="flex items-center justify-between">
                            <button className="bg-[#3379CB] p-3 rounded-lg text-white" style={{ lineHeight: '0.5' }} onClick={() => dispatch(setTicketChild(ticketChild + 1))}>+</button>
                            <h1 className="mx-3">{ticketChild}</h1>
                            <button className="bg-[#3379CB] p-3 rounded-lg text-white" style={{ lineHeight: '0.5' }} onClick={() => ticketChild > 0 && dispatch(setTicketChild(ticketChild - 1))}>-</button>
                          </div>
                        </div>

                        <div className="flex items-center justify-between mb-3">
                          <h2 className="text-lg mr-5 text-[#222] font-light">до 2 лет</h2>
                          <div className="flex items-center justify-between">
                            <button className="bg-[#3379CB] p-3 rounded-lg text-white" style={{ lineHeight: '0.5' }} onClick={() => dispatch(setTicketBabies(ticketBabies + 1))}>+</button>
                            <h1 className="mx-3">{ticketBabies}</h1>
                            <button className="bg-[#3379CB] p-3 rounded-lg text-white" style={{ lineHeight: '0.5' }} onClick={() => ticketBabies > 0 && dispatch(setTicketBabies(ticketBabies - 1))}>-</button>
                          </div>
                        </div>

                        <div className="border-b-4 pb-4 pt-2">
                          <p className="text-sm">Укажите возраст на момент отправления</p>
                        </div>

                        <div>
                          <Switch
                            checked={checkedBiznes}
                            onChange={(e) => { setCheckedBiznes(e.target.checked); e.target.checked ? dispatch(setTicketTarif('b')) : dispatch(setTicketTarif('a')) }}
                            inputProps={{ 'aria-label': 'controlled' }}
                          />
                          <label htmlFor="">Бизнес класс</label>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className='flex items-center justify-center col-4'>
                    <button className='bg-[transparent] mr-3 text-white h-[66px] w-full' onClick={(e) => getRecommendationFnc('for_btn')}>
                      Найти
                    </button>


                  </div>

                </div>
              </div>


              <div className='flex lg:hidden flex-col'>
                <div className='p-[15px] flex relative flex-col border border-[#c0bfbf] rounded-lg'>
                  <input className=' outline-none px-[10px]' type="text" placeholder='Откуда' />
                  <div className='flex w-full items-center'>
                    <div className='border border-[#c0bfbf] w-full relative'></div>
                    <div className='h-[40px] w-[50px] flex items-center justify-center rounded-[50%] bg-[#AEAEAE]'>
                      <img className='' src={arrowSwap2} alt="" />
                    </div>
                  </div>
                  <input className=' outline-none px-[10px]' type="text" placeholder='Куда' />
                </div>


                <div className='flex items-center justify-between mt-[15px] gap-3'>
                  <div className=' h-[60px] border border-[#c0bfbf] outline-none px-[10px] bg-white w-full flex items-center justify-between rounded-lg'>
                    <p className='text-[#AEAEAE]'>Когда</p>
                    <img src={kalendar} alt="" />
                  </div>
                  <input className='h-[60px] border border-[#c0bfbf] outline-none px-[10px] w-full rounded-lg' type="text" placeholder='Обратно' />
                </div>



                <div className='h-[60px] mt-[15px] rounded-lg border border-[#c0bfbf] outline-none px-[10px] bg-white w-full  flex items-center justify-between'>
                  <div>
                    <h3>1 пассажир</h3>
                    <p className='text-[#AEAEAE]'>Эконом класс</p>
                  </div>
                  <img src={arrowDown} alt="" />
                </div>
              </div>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2} className="mt-5 pb-5">
              <div className='bg-[#0057BE] h-[66px] hidden lg:flex items-center px-[3px] rounded-lg'>
                <div className="h-full w-full flex items-center" style={{ padding: '3px' }}>
                  <div className="relative col-4 h-full" style={{ padding: '0' }}>
                    <input className='h-full w-full rounded-l-lg border border-[#c0bfbf] capitalize outline-none px-[10px]' type="text" placeholder='Откуда' value={myAirlines || ''} onChange={(e) => { setMyAirlines(e.target.value); searchAirportsFnc(e.target.value) }} />
                    {airlinesDataFrom && (
                      <div className="searchDataList z-10">
                        {airlinesDataFrom.map((item, index) =>
                          <div key={index} onClick={() => { setMyAirlines(item.cityName); setMyAirlinesCode(item.cityIataCode); setAirlinesDataFrom() }}>
                            <p>{item.cityName}</p>
                            <p>{item.cityIataCode}</p>
                          </div>
                        )}
                      </div>
                    )}

                  </div>
                  <div className='h-full col-1 border border-[#c0bfbf] outline-none bg-white w-[60px] flex items-center justify-center'>
                    <img src={arrowSwap} className="cursor-pointer w-full" alt="" onClick={() => reverseAirportName()} />
                  </div>
                  <div className="relative col-4 h-full" style={{ padding: '0' }}>
                    <input className='h-full w-full border border-[#c0bfbf] outline-none px-[10px]' type="text" placeholder='Куда' value={myAirlinesTo || ''} onChange={(e) => { setMyAirlinesTo(e.target.value); searchAirportsToFnc(e.target.value) }} />
                    {airlinesDataTo && (
                      <div className="searchDataList2 z-10">
                        {airlinesDataTo.map((item, index) =>
                          <div key={index} onClick={() => { setMyAirlinesTo(item.cityName); setMyAirlinesCodeTo(item.cityIataCode); setAirlinesDataTo() }}>
                            <p>{item.cityName}</p>
                            <p>{item.cityIataCode}</p>
                          </div>
                        )}
                      </div>
                    )}

                  </div>
                  <div className="col-4 h-full" style={{ padding: '0' }}>
                    <label htmlFor="">
                      <DatePicker
                        onChange={(e) => { setMyAirlinesDate(e) }}
                        // format="DD-MM-YYYY"
                        minDate={new Date()}
                        // value={myAirlinesDate}
                        animations={[transition()]}
                        headerOrder={["MONTH_YEAR", "LEFT_BUTTON", "RIGHT_BUTTON"]}
                        numberOfMonths={2}
                        portal={true}
                        range
                        ref={datePickerRef}
                        style={{ display: 'none' }}
                      />
                      <input type="text" placeholder="Когда" className='h-full w-full border border-[#c0bfbf] outline-none px-[10px]' value={myAirlinesDate[0] ? myAirlinesDate[0].format?.("DD-MM-YYYY") : ''} onClick={() => datePickerRef.current.openCalendar()} />

                    </label>
                  </div>
                  <input type="text" placeholder="Обратно" className='h-full w-full border border-[#c0bfbf] outline-none px-[10px] col-3' style={{ padding: '0 10px' }} value={myAirlinesDate[1] ? myAirlinesDate[1].format?.("DD-MM-YYYY") : ''} onClick={() => datePickerRef.current.openCalendar()} />

                  <div className='h-full rounded-r-lg border border-[#c0bfbf] outline-none px-[10px] bg-white w-[226px]  flex items-center justify-between relative col-4'>
                    <div className="flex items-center justify-between w-full cursor-pointer" onClick={() => setClassModalShow(!classModalShow)}>
                      <div>
                        <h3>{ticketAdults + ticketChild + ticketBabies} пассажир</h3>
                        <p className='text-[#AEAEAE]'>{ticketTarif === 'b' ? 'Бизнес' : 'все'} класс</p>
                      </div>

                      <img src={arrowDown} alt="" />
                    </div>



                    {classModalShow && (
                      <div className="absolute p-5 min-w-full right-0 bg-[white] z-10 text-[#222] shadow-2xl rounded-lg" style={{ top: 'calc(100% + 10px)', width: '190%', maxWidth: '200%' }}>
                        <div><h3>{ticketAdults + ticketChild + ticketBabies} пассажир</h3></div>
                        <div className="flex items-center justify-between my-3">
                          <p className="text-lg mr-5 text-[#222] font-light">12 лет и старше</p>
                          <div className="flex items-center justify-between">
                            <button className="bg-[#3379CB] p-3 rounded-lg text-white" style={{ lineHeight: '0.5' }} onClick={() => dispatch(setTicketAdult(ticketAdults + 1))}>+</button>
                            <h1 className="mx-3">{ticketAdults}</h1>
                            <button className="bg-[#3379CB] p-3 rounded-lg text-white" style={{ lineHeight: '0.5' }} onClick={() => ticketAdults > 1 && dispatch(setTicketAdult(ticketAdults - 1))}>-</button>
                          </div>
                        </div>

                        <div className="flex items-center justify-between mb-3">
                          <h2 className="text-lg mr-5 text-[#222] font-light">от 2 до 12 лет</h2>
                          <div className="flex items-center justify-between">
                            <button className="bg-[#3379CB] p-3 rounded-lg text-white" style={{ lineHeight: '0.5' }} onClick={() => dispatch(setTicketChild(ticketChild + 1))}>+</button>
                            <h1 className="mx-3">{ticketChild}</h1>
                            <button className="bg-[#3379CB] p-3 rounded-lg text-white" style={{ lineHeight: '0.5' }} onClick={() => ticketChild > 0 && dispatch(setTicketChild(ticketChild - 1))}>-</button>
                          </div>
                        </div>

                        <div className="flex items-center justify-between mb-3">
                          <h2 className="text-lg mr-5 text-[#222] font-light">до 2 лет</h2>
                          <div className="flex items-center justify-between">
                            <button className="bg-[#3379CB] p-3 rounded-lg text-white" style={{ lineHeight: '0.5' }} onClick={() => dispatch(setTicketBabies(ticketBabies + 1))}>+</button>
                            <h1 className="mx-3">{ticketBabies}</h1>
                            <button className="bg-[#3379CB] p-3 rounded-lg text-white" style={{ lineHeight: '0.5' }} onClick={() => ticketBabies > 0 && dispatch(setTicketBabies(ticketBabies - 1))}>-</button>
                          </div>
                        </div>

                        <div className="border-b-4 pb-4 pt-2">
                          <p className="text-sm">Укажите возраст на момент отправления</p>
                        </div>

                        <div>
                          <Switch
                            checked={checkedBiznes}
                            onChange={(e) => { setCheckedBiznes(e.target.checked); e.target.checked ? dispatch(setTicketTarif('b')) : dispatch(setTicketTarif('a')) }}
                            inputProps={{ 'aria-label': 'controlled' }}
                          />
                          <label htmlFor="">Бизнес класс</label>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className='flex items-center justify-center col-4'>
                    <button className='bg-[transparent] mr-3 text-white h-[66px] w-full' onClick={(e) => getRecommendationFnc('for_btn')}>
                      Найти
                    </button>


                  </div>

                </div>
              </div>
              <div className='flex lg:hidden flex-col'>
                <div className='p-[15px] flex flex-col border border-[#c0bfbf] rounded-lg'>
                  <input className=' outline-none px-[10px]' type="text" placeholder='Откуда' />
                  <div className='flex w-full items-center'>
                    <div className='border border-[#c0bfbf] w-full'></div>
                    <div className='h-[40px] w-[50px] flex items-center justify-center rounded-[50%] bg-[#AEAEAE]'>
                      <img className='' src={arrowSwap2} alt="" />
                    </div>
                  </div>
                  <input className=' outline-none px-[10px]' type="text" placeholder='Куда' />
                </div>
                <div className='flex items-center justify-between mt-[15px] gap-3'>
                  <div className=' h-[60px] border border-[#c0bfbf] outline-none px-[10px] bg-white w-full flex items-center justify-between rounded-lg'>
                    <p className='text-[#AEAEAE]'>Когда</p>
                    <img src={kalendar} alt="" />
                  </div>
                  <input className='h-[60px] border border-[#c0bfbf] outline-none px-[10px] w-full rounded-lg' type="text" placeholder='Обратно' />
                </div>
                <div className='h-[60px] mt-[15px] rounded-lg border border-[#c0bfbf] outline-none px-[10px] bg-white w-full  flex items-center justify-between'>
                  <div>
                    <h3>1 пассажир</h3>
                    <p className='text-[#AEAEAE]'>Эконом класс</p>
                  </div>
                  <img src={arrowDown} alt="" />
                </div>
              </div>
            </CustomTabPanel>
          </Box>
          {!ticketLoad && (
            <div className='bg-[#F7F7F7] w-full lg:w-[856px]  flex relative mx-auto mt-[3%] py-[15px] px-[30px]'>
              <div>
                <h1 className='text-[#222222] lg:text-4xl text-xl font-bold  mb-[15px]'>Секономьте на ваших перелетах</h1>
                <p className=' text-[#222222] lg:text-lg text-base xs:text-sm  font-normal mb-[30px] md:w-[76%] sm:w-[65%]'>Покупайте у нас билеты дешевле и при этом получайте бонусы и кэшбэк на каждый свой рейс!</p>
                <button className='text-white text-[18px] bg-[#00A8FF] border-none p-[10px] rounded-lg'>Хочу сэкономить</button>
              </div>
              <img className='absolute md:w-[220px] lg:w-[240px] bottom-0 sm:w-[180px] right-0 xs:hidden sm:block' src={girlImg} alt="" />
            </div>
          )}
        </div>

        {classModalShow && (
          <div className="classBg absolute top-0 left-0 w-full block" style={{ zIndex: '5' }} onClick={() => setClassModalShow(false)}>
          </div>
        )}


        <Ticket loading={loadingGetRecommendation} />
        {loader && <Loader />}
      </div>
    </>
  );
}

export default Main;





