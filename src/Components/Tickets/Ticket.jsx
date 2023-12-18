import React, { useEffect, useState } from "react";
// import "./Ticket.css";
import { Container, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import "./Ticket.css";
import { setTicketId, addFilterAirlines, removeFilterAirlines, checkChangeAir, setFilterDirect, setFilterDirectChange } from "../../Slice/AllSlice";
import { useNavigate } from "react-router-dom";
import TicketSkeleton from "../TicketSkeleton/TicketSkeleton";
import moment from "moment";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import cirClose from '../../Assets/icons/close-circle.svg'
import airplane from '../../Assets/icons/airplane.svg'
import line from '../../Assets/icons/line.svg'
import Fade from '@mui/material/Fade';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Skeleton from "@mui/material/Skeleton";

const style = {
  position: 'absolute',
  bottom: '0',
  left: '0',
  width: '100%',
  bgcolor: 'background.paper',
  boxShadow: '0px -24px 24px rgba(0, 0, 0, 0.2)',
  paddingLeft: "20px",
  paddingRight: "20px",
  paddingBottom: "20px",
  borderTopLeftRadius: "8px",
  borderTopRightRadius: "8px",
  height: "95vh",
  overflowY: "scroll",
  transition: '1s'
};

function Ticket(props) {
  const [open, setOpen] = React.useState(false);
  const [ticketDetail, setTicketDetail] = useState([])
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [ticketHourAll, setTicketHourAll] = useState(0)
  const TicketData = useSelector((state) => state.loginSlice.ticketData);
  const allAirlinesName = useSelector((state) => state.loginSlice.allAirlinesName);

  const [ticketFilterShow, setTicketFilterShow] = useState(false)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [skeletonNum, setSkeletonNum] = useState([]);

  const toShoppingTicket = (id, price, item) => {
    if (id) {
      console.log(item);
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
    console.log(TicketData);
    if (TicketData || props.loading) {
      setTicketFilterShow(true)
    }
  }, [TicketData, props.loading])

  useEffect(() => {
    // 10 ta elementni tuzish
    const newItems = Array.from({ length: 3 }, (_, index) => ({
      id: index,
      content: `Element ${index + 1}`,
    }));

    setSkeletonNum(newItems);
  }, []);

  console.log(ticketDetail)


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
                  <h3>Пересадки</h3>

                  <div className="checkbox">
                    <input type="radio" id="1" name="direct" onClick={() => { dispatch(setFilterDirect(0)); dispatch(setFilterDirectChange('Все')) }} defaultChecked />
                    <label htmlFor="1">Все</label>
                  </div>

                  <div className="checkbox">
                    <input type="radio" id="wout" name="direct" onClick={() => { dispatch(setFilterDirect(1)); dispatch(setFilterDirectChange('Прямой')) }} />
                    <label htmlFor="wout">Прямой</label>
                  </div>


                </div>

                <div className="company">
                  <h3>Авиакомпании</h3>
                  {!allAirlinesName && skeletonNum?.map((item) =>
                    <Skeleton loading={props.isLoading}>
                      <div className="checkbox">
                        <input type="checkbox" />
                        <label>Uzbekistan Air</label>
                      </div>
                    </Skeleton>
                  )}

                  {allAirlinesName.length > 0 ? (
                    allAirlinesName.map((item, airIndex) =>
                      <div className="checkbox" key={airIndex}>
                        <input type="checkbox" id={item.name} value={item.code} onClick={(e) => { filterInputChange(e) }} />
                        <label htmlFor={item.name}>{item.name}</label>
                      </div>
                    )
                  ) : (
                    skeletonNum?.map((item, index) =>
                      <Skeleton loading={props.isLoading}>
                        <div className="checkbox">
                          <input type="checkbox" />
                          <label>Uzbekistan Air</label>
                          <label>{index === 1 && "Flydubai"}</label>
                        </div>
                      </Skeleton>
                    )
                  )}
                </div>
              </div>
            </Grid>
          )
          }
          <Grid item lg={9} className="w-full">
            {TicketData && TicketData.flights.length > 0
              ? TicketData.flights.map((item, inx) => (
                <Grid item lg={12} sx={{ marginBottom: '20px' }} key={inx}>
                  <div onClick={() => setTicketDetail(item)} className="box w-[100%] flex">
                    <>
                      <div className="w-full md:border-r-4 border-dashed md:border-[#ccc] relative">
                        <div className="container-box py-2 md:py-5 pb-3 container-box-2" key={inx} onClick={() => window.innerWidth < 768 && handleOpen()}>
                          <div className="left w-full md:pr-5">
                            <div className="top">
                              <h2 className="flex w-full justify-between items-center">
                                <>
                                  <div className="flex items-center justify-center gap-3">
                                    <img className="w-10 rounded-full" src={`https://mpics.avs.io/al_square/240/240/${item.segments[0].provider.supplier.code}.png`} alt="" />
                                    {item.segments[1] && <img className="w-10 rounded-full" src={`https://mpics.avs.io/al_square/240/240/${item.segments[1].provider.supplier.code}.png`} alt="" />}
                                    {item.segments[2] && <img className="w-10 rounded-full" src={`https://mpics.avs.io/al_square/240/240/${item.segments[2].provider.supplier.code}.png`} alt="" />}
                                    {item.segments[3] && <img className="w-10 rounded-full" src={`https://mpics.avs.io/al_square/240/240/${item.segments[3].provider.supplier.code}.png`} alt="" />}
                                    {item.segments[4] && <img className="w-10 rounded-full" src={`https://mpics.avs.io/al_square/240/240/${item.segments[4].provider.supplier.code}.png`} alt="" />}
                                  </div>
                                  <p>

                                    <span className="hidden w-max sum">
                                      {
                                        item.price.UZS.amount && currency(item.price.UZS.amount, 'UZS').replace("UZS", "")
                                          .replace("soʻm", "").replace(/,/g, " ").slice(0, -3).replace('.', " ") + " UZS"
                                      }
                                    </span>
                                  </p>
                                </>
                              </h2>
                            </div>

                            <div className="bottom flex items-end">
                              <div className="dataL">
                                <h2 className="font-mono text-[0.675rem] md:text-lg">
                                  {item.segments[0].dep.time}
                                </h2>

                                <p className="font-mono text-[0.675rem] md:text-lg">
                                  {moment(item.segments[0].arr.date, 'DD.MM.YYYY').format("DD MMMM")},
                                  {moment(item.segments[0].arr.date, 'DD.MM.YYYY').format(" dddd").slice(0, 4)}
                                </p>
                                <p className="font-mono text-[0.675rem] md:text-lg"> {item.segments[0].dep.city.title} ({item.segments[0].dep.city.code})</p>

                              </div>
                              <div>
                                <div className="flex justify-center">
                                  <p className="font-mono text-[0.675rem] md:text-lg">
                                    {moment.utc().startOf('year').add({ minutes: item.duration }).format('d[день ]HH[ч ]mm[мин]')}
                                  </p>
                                </div>
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
                                      <g clip-path="url(#clip0_1413_5731)">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.84152 9.47881C6.57104 9.39093 6.28638 9.56695 6.24415 9.84821L5.73752 13.223C5.66495 13.7064 5.95251 14.1715 6.41742 14.3225L23.6767 19.9304C24.4832 20.1924 25.3494 19.7511 25.6114 18.9446C25.8838 18.1063 25.396 17.2113 24.5439 16.9858L19.2322 15.5804L17.9041 6.20726C17.849 5.81835 17.5772 5.4948 17.2037 5.37342C16.5777 5.17003 15.9244 5.59884 15.862 6.25407L15.1019 14.2384L7.84571 12.2958L7.14239 9.79207C7.10078 9.64392 6.98787 9.52637 6.84152 9.47881ZM25.6776 22.9521H5.14758V24.5313H25.6776V22.9521Z" fill="#AEAEAE" />
                                      </g>
                                      <defs>
                                        <clipPath id="clip0_1413_5731">
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
                                  <p className="font-mono">{item.segments[item.segments.length - 1].arr.city.code}</p>
                                </div>
                              </div>
                              <div className="dataR">
                                <h2 className="font-mono text-[0.675rem] md:text-lg">
                                  {item.segments[item.segments.length - 1].arr.time}
                                </h2>
                                <p className="font-mono text-[0.675rem] md:text-lg">
                                  {moment(item.segments[item.segments.length - 1].arr.date, 'DD.MM.YYYY').format("DD MMMM")},
                                  {moment(item.segments[item.segments.length - 1].arr.date, 'DD.MM.YYYY').format(" dddd").slice(0, 4)}
                                </p>
                                <p className="font-mono text-[0.675rem] md:text-lg"> {item.segments[item.segments.length - 1].arr.city.title} ({item.segments[item.segments.length - 1].arr.city.code})</p>
                              </div>

                            </div>

                          </div>
                        </div>
                        <Accordion className="flex" style={{ flexDirection: 'column-reverse' }} TransitionProps={{ timeout: 800 }} onChange={() => setIsAccordionOpen(!isAccordionOpen)}>

                          <AccordionSummary
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                          >
                            <Typography>{isAccordionOpen ? 'Скрыть детали' : 'Детали маршрута'}.</Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography>
                              {item.segments.map((twoItem, index) => (

                                <>

                                  <div className="container-box py-2 md:py-5 pb-3 container-box-2" key={inx} onClick={() => window.innerWidth < 768 && handleOpen()}>
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
                                              <p className="font-mono text-[0.675rem] md:text-lg ml-3">{item.segments[index].dep.time}</p>
                                              <p className="font-mono text-[0.675rem] md:text-lg ml-3">{item.segments[index].arr.time}</p>
                                            </p>
                                          </div>
                                          <div>
                                            <p className="font-mono text-[0.675rem] md:text-lg">{item.segments[index].dep.city.title}</p>
                                            <p className="font-mono text-[0.675rem] md:text-lg">{item.segments[index].arr.city.title}</p>
                                          </div>

                                          <div>
                                            <p className="font-mono text-[0.675rem] md:text-lg ml-3">
                                              {moment(item.segments[index].dep.date, 'DD.MM.YYYY').format("DD MMMM")}
                                            </p>
                                            <p className="font-mono text-[0.675rem] md:text-lg ml-3">
                                              {moment(item.segments[index].arr.date, 'DD.MM.YYYY').format("DD MMMM")}
                                            </p>

                                          </div>
                                          <p className="font-mono text-[0.675rem] md:text-lg"> {item.segments[index].duration.flight.hour}ч {item.segments[index].duration.flight.minute}мин </p>
                                          <img className="w-10 rounded-full" src={`https://mpics.avs.io/al_square/240/240/${item.segments[index].provider.supplier.code}.png`} alt="" />

                                        </div>

                                      </div>

                                      <div className="flex justify-between">
                                        <div>

                                          <p className="font-mono text-[0.675rem] mt-3 md:text-lg">Рейс: {item.segments[index].fare_code}</p>
                                          <p className="font-mono text-[0.675rem] md:text-lg">Авиакомпания: {item.segments[index].provider.supplier.title}</p>
                                          {item.segments[index].aircraft.title && <p className="font-mono text-[0.675rem] md:text-lg">Самолет: {item.segments[index].aircraft.title}</p>}
                                        </div>

                                        <div>
                                          {item.segments[index].dep.terminal && <p className="font-mono text-[0.675rem] md:text-lg mt-5">Терминал: {item.segments[index].dep.terminal}</p>}
                                          {item.segments[index].cbaggage.weight && <p className="font-mono text-[0.675rem] md:text-lg">Багаж: {item.segments[index].cbaggage.weight} </p>}
                                          <p className="font-mono text-[0.675rem] md:text-lg">
                                            Класс: {item.segments[index].class.name.toUpperCase() === "E" ? "Ekonom" :
                                              item.segments[index].class.name.toUpperCase() === "B" &&
                                              "Biznes"}
                                          </p>

                                        </div>
                                      </div>
                                      {item.segments[index].duration.transfer?.minute >= 0 && (
                                        <div className="flex items-center justify-center border-[3px] border-[#0057BE] text-[#0057BE] py-2 px-1 rounded-lg mt-2">
                                          {item.segments[index].duration.transfer?.hour}ч {item.segments[index].duration.transfer?.minute}мин пересадка
                                        </div>
                                      )}
                                    </div>
                                  </div>


                                  <div className="pr-3">
                                    {index !== item.segments.length - 1 && (
                                      <span className="w-full h-0.5 block bg-[#ccc]"></span>
                                    )}
                                  </div>
                                </>
                              ))}
                            </Typography>
                          </AccordionDetails>
                        </Accordion>
                        <span className="block absolute top-0 h-3 w-5 bg-[#E8E8E8] right-[-0.747rem] rounded-b-lg"></span>
                        <span className="block absolute bottom-0 h-3 w-5 bg-[#E8E8E8] right-[-0.747rem] rounded-t-lg"></span>
                      </div>

                      <div className="right px-3 py-2 md:py-5">
                        <h2 className="text-3xl w-max	">
                          {item.price.UZS.amount && currency(item.price.UZS.amount, 'UZS').replace("UZS", "")
                            .replace("soʻm", "").replace(/,/g, " ").slice(0, -3).replace('.', " ")} UZS
                        </h2>
                        <p className="font-mono">&nbsp;за всех пассажиров</p>

                        <button
                          className="bgBlue mt-4"
                          onClick={() => toShoppingTicket(item.id, item.price.UZS.amount, item)}
                        >
                          купить
                        </button>
                      </div>
                    </>

                  </div>
                </Grid>
              ))
              : TicketData && (
                <h2 style={{ textAlign: "center" }}>Chipta topilmadi</h2>
              )}

            {props.loading && <TicketSkeleton loading={props.loading} />}
          </Grid>


        </Grid>
        <div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            closeAfterTransition
            BackdropProps={{
              timeout: 1500,
            }}

          >
            <Fade in={open}>
              <Box sx={style}>
                <div className="flex items-center justify-between mb-[20px] sticky top-0 bg-white z-50 h-[60px]">
                  <h1 className="text-[18px] font-semibold">Подробнее о маршруте</h1>
                  <img onClick={() => handleClose()} src={cirClose} alt="" />
                </div>
                < div className="mb-[10px] flex w-[40%] items-center">
                  <p className="font-mono">{ticketDetail?.segments?.length > 0 && ticketDetail.segments[0].dep.city.title}</p>
                  <div className="w-full border border-[black] h-[2px] mx-[5px]">
                  </div>
                  <p className="font-mono">{ticketDetail?.segments?.length > 0 && ticketDetail.segments[ticketDetail.segments_direction[0].length - 1].arr.city.title}</p>
                </div>

                {
                  < div className="mb-[10px]">
                    <p className="text-[14px] font-normal text-[#222222] font-mono" >{moment.utc().startOf('year').add({ minutes: ticketDetail.duration }).format('d[день ]HH[ч ]mm[мин]')},{ticketDetail.segments_count} пересадки</p>
                  </div>
                }
                {
                  ticketDetail && ticketDetail.segments_count > 0 ?
                    ticketDetail.segments.map((item, index) => (

                      <div key={index}>
                        <div className="flex justify-between mb-[15px]">
                          <div>
                            <h1 className="text-[18px] font-semibold flex">
                              {item.carrier.title} <img className="ml-[8px]" src={airplane} alt="" /></h1>
                            <p className="text-[14px] font-normal text-[#222222] font-mono" >{item.duration.flight.hour}ч {item.duration.flight.minute} мин в пути </p>
                            {/* <p className="text-[14px] font-normal text-[#222222]">5ч 20 мин в пути, Airbus A330, рейс HH-437</p> */}
                          </div>
                          <div className="flex items-center justify-center gap-3">
                            {<img className="w-10 rounded-full" src={`https://mpics.avs.io/al_square/240/240/${item.provider.supplier.code}.png`} alt="" />}
                          </div>
                        </div>
                        <div className="flex justify-between w-[90%] md:w-[60%] mb-[15px]">
                          <div>
                            <h1 className="text-[18px] font-semibold mb-[20px]"> {item.dep.time}
                              <p className="text-[14px] font-normal text-[#222222] md:text-lg">
                                {moment(item.dep.date, 'DD.MM.YYYY').format("DD MMMM")},
                                {moment(item.dep.date, 'DD.MM.YYYY').format(" dddd").slice(0, 4)}
                              </p>
                            </h1>
                            <h1 className="text-[18px] font-semibold"> {item.arr.time}
                              <p className="text-[14px] font-normal text-[#222222] md:text-lg">
                                {moment(item.arr.date, 'DD.MM.YYYY').format("DD MMMM")},
                                {moment(item.arr.date, 'DD.MM.YYYY').format(" dddd").slice(0, 4)}
                              </p>
                            </h1>
                          </div>
                          <img src={line} alt="" />
                          <div>
                            <h1 className="text-[18px] font-semibold mb-[20px]"> {item.dep.city.title}
                              <p className="text-[14px] font-normal text-[#222222]">{item.dep.city.title} ({item.dep.city.code})</p>
                            </h1>
                            <h1 className="text-[18px] font-semibold"> {item.arr.city.title}
                              <p className="text-[14px] font-normal text-[#222222]"> {item.arr.city.title} ({item.arr.city.code})</p>
                            </h1>
                          </div>
                        </div>
                      </div>
                    ))
                    : ""
                }
                <button className="mt-[20px] bg-[#0064FA] w-full p-[16px] text-white text-[16px] font-thin rounded-lg">Купить</button>
              </Box>
            </Fade>
          </Modal>
        </div>
      </div>
    </div >
  );
}

export default Ticket;
