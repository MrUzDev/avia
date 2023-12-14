import { Button, Container, Grid } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import "./ShopTicket.css";
import {
  useBookingCreateMutation,
  useBookingConfirmMutation,
  usePaymentConfirmMutation,
  useRefreshMutation,
  useFlightInfoMutation,
} from "../../RTKQueryApi/AllApi";
import { MuiTelInput } from "mui-tel-input";
import Typography from "@mui/material/Typography";
import TicketSkeleton from "../TicketSkeleton/TicketSkeleton";
import Modal from "@mui/material/Modal";
import PropTypes from "prop-types";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
import OTPInput from "otp-input-react";
import { useSelector } from "react-redux";
import { Contexts } from "../../contexts/Contexts";
import Loader from "../Loader/Loader";
import { useNavigate, useParams } from "react-router-dom";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import DatePicker from "react-multi-date-picker";
import moment from "moment";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import arrowLeft from "../../Assets/icons/arrow-left.svg";
import arrowSwap from "../../Assets/icons/arrow-swap-horizontal — black.svg";
import airplane from "../../Assets/icons/airplane.svg";
import arrowUp from "../../Assets/icons/arrow-up.png";
import arrLeft from "../../Assets/icons/arrow-leftBalck.svg";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import lineReys from "../../Assets/icons/Rectangle 40.svg";
import jwt_decode from "jwt-decode";
import { useRegisterApiMutation } from "../../RTKQueryApi/AllApi";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { ReactComponent as Bilet } from "../../Assets/icons/biletLine.svg";
import { ReactComponent as Bilet2 } from "../../Assets/icons/biletLine2.svg";
import { ReactComponent as Coin } from "../../Assets/icons/coinLine.svg";
import { ReactComponent as Coin2 } from "../../Assets/icons/coinLine2.svg";
import { ReactComponent as CalendarTick } from "../../Assets/icons/calendar-tick.svg";
import { ReactComponent as CalendarTick2 } from "../../Assets/icons/calendar-tick2.svg";
import { Email } from "@mui/icons-material";
import "../Tickets/Ticket.css";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
function TabPanel(props) {
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
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function ShopTicket() {
  const [
    bookingCreate,
    {
      data: bookingCreateData,
      isSuccess: bookingCreateSuc,
      error: bookingCreateErr,
      isError: isErrorCreate,
    },
  ] = useBookingCreateMutation();

  const [
    bookingConfirm,
    { data: bookingConfirmData, isSuccess: bookingConfirmSuc },
  ] = useBookingConfirmMutation();

  const [
    refresh,
    { data: refreshData, isSuccess: refreshSuc, isError: refreshError },
  ] = useRefreshMutation();

  const [
    paymentConfirm,
    { data: paymentConfirmData, isSuccess: paymentConfirmSuc },
  ] = usePaymentConfirmMutation();

  const [
    flightInfo,
    { data: flightInfoData, isSuccess: flightInfoSuc, error: flightInfoError },
  ] = useFlightInfoMutation();

  const [name, setName] = useState();
  const [lastName, setLastName] = useState();
  const [citizen, setCitizen] = useState("UZ");
  const [value, setValue] = useState(0);
  const [gmail, setGmail] = useState();
  const [phoneNum, setPhoneNum] = useState("+998");
  const [middleName, setMiddleName] = useState();
  const [gender, setGender] = useState("");
  const [birthdatePic, setBirthdatePic] = useState(
    moment().format("DD.MM.YYYY")
  );
  const [passportNum, setPassportNum] = useState();
  const [passportExp, setPassportExp] = useState(moment().format("DD.MM.YYYY"));
  const [confirmModal, setConfirmModal] = useState(false);
  const [cardNum, setCardNum] = useState();
  const [cardExp, setCardExp] = useState();
  const [flyData, setFlyData] = useState([]);
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [ticketDetail, setTicketDetail] = useState([]);
  const [disableOtp, setDisableOtp] = useState(true);

  const [timer, setTimer] = useState(90);
  const [OTP, setOTP] = useState("");
  const [otp_token, setOtp_token] = useState();
  const [tr_id, setTr_id] = useState();
  const [loader, setLoader] = useState(true);
  const [ticketPrice, setTicketPrice] = useState(0);
  const [paymentType, setPaymentType] = useState();
  const [tabIndex, setTabIndex] = useState(0);
  const [movePay, setMovePay] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const [doxType, setDoxType] = useState('P')

  const loggedIn = useSelector((state) => state.loginSlice.loggedIn);

  const { setOpen, open, loginModal, setLoginModal } = useContext(Contexts);
  const params = useParams();
  const navigate = useNavigate();
  const handleOpen = () => setOpen(true);

  const clientId =
    "428493911231-e8ipsql0crd7loti8t96cun9u397valg.apps.googleusercontent.com";

  const [registerApi, { data: registerApiData, isSuccess: registerApiSuc }] =
    useRegisterApiMutation();

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    boxShadow: 24,
    borderRadius: "25px",
    padding: "20px 0",
    overflow: "hidden",
  };

  const dataError = () => toast.error(errorMsg);

  useEffect(() => {
    try {
      if (params.id) {
        setLoader(true);
        const flighId = {
          lang: "ru",
          tid: params.id,
        };

        flightInfo(flighId);
      }
    } catch (error) { }
  }, [params.id, registerApiData]);

  const bookingCreateFnc = (e) => {
    e.preventDefault();
    setLoader(true);

    if (
      birthdatePic &&
      passportExp &&
      name &&
      phoneNum &&
      lastName &&
      passportNum &&
      gmail &&
      gender &&
      citizen
    ) {
      const day =
        birthdatePic.day && birthdatePic.day > 9
          ? String(birthdatePic.day)
          : "0" + birthdatePic.day;
      const mounth =
        birthdatePic.month && birthdatePic.month > 9
          ? birthdatePic.month
          : "0" + birthdatePic.month;
      const year = birthdatePic.year && String(birthdatePic.year);
      const birthdate = day + "." + mounth + "." + year;

      const dayPass =
        passportExp.day && passportExp.day > 9
          ? String(passportExp.day)
          : "0" + passportExp.day;
      const mounthPass =
        passportExp.month && passportExp.month > 9
          ? passportExp.month
          : "0" + passportExp.month;
      const yearPass = passportExp.year && String(passportExp.year);
      const birthdatePass = dayPass + "." + mounthPass + "." + yearPass;

      try {
        const bookingCreatee = {
          lang: "ru",
          tid: params.id,
          client_email: gmail,
          client_phone: phoneNum,
          payer_name: name,
          passengers: [
            {
              firstname: name,
              lastname: lastName,
              middlename: middleName,
              age: "adt",
              birthdate: birthdate,
              doctype: doxType,
              docnum: passportNum.replace(/ /g, ""),
              docexp: birthdatePass,
              gender: gender,
              citizen: citizen,
              phone: phoneNum.replace(/ /g, ""),
              email: gmail,
              send_email: 1,
            },
          ],
          accompanying_adult: [],
          bonus_card: "",
          is_health_declaration_checked: 0,
        };

        bookingCreate(bookingCreatee);
      } catch (error) { }
    } else {
      dataError();
    }
  };

  useEffect(() => {
    if (
      (bookingCreateErr && bookingCreateErr.status === 401) ||
      (flightInfoError && flightInfoError.status === 401)
    ) {
      setOpen(true);
    }
  }, [bookingCreateErr, flightInfoError]);

  useEffect(() => {
    if (!localStorage.getItem("access")) {
      setOpen(true);
    }
    if (loginModal) {
      setOpen(false);
    }
  }, [open, loginModal]);

  const confirmBooking = (e) => {
    e.preventDefault();
    const ChangeCardExp = cardExp.split("/").reverse("").join("");
    const conBookingg = {
      transaction_type: paymentType,
      tr_id: tr_id,
      card_number: cardNum.replace(/ /g, ""),
      expire: ChangeCardExp,
    };
    bookingConfirm(conBookingg);
  };

  const changeTimer = () => {
    setTimer((timerr) => (timerr > 0 ? timerr - 1 : timerr));
  };

  const paymentConfirmFnc = (e) => {
    e.preventDefault();
    const paymentConff = {
      otp: OTP.replace(/ /g, ''),
      otp_token: otp_token,
      tr_id: tr_id,
    };
    paymentConfirm(paymentConff);
  };

  useEffect(() => {
    if (bookingCreateSuc) {
      setLoader(false);
      if (bookingCreateData.tr_id) {
        localStorage.setItem("trId", bookingCreateData.tr_id);
        setTr_id(bookingCreateData.tr_id);
        handleChange(1, 1);
      }
      if (bookingCreateData.data && bookingCreateData.data.message) {
        setErrorMsg(bookingCreateData.data.message);
      }
    }
    if (bookingConfirmSuc) {
      setDisableOtp(false);
      if (paymentType == "MTS") {
        if (bookingConfirmData.result) {
          window.location.href =
            bookingConfirmData.result.payment.debit.form_url;
        }
      } else {
        const confirmModalContainer = document.querySelector(
          ".confirmModalContainer"
        );
        confirmModalContainer && confirmModalContainer.classList.add("active");

        setInterval(() => {
          changeTimer();
        }, 1000);

        setOtp_token(bookingConfirmData.otp_token);
      }
      console.log(bookingConfirmData);
    }
    if (paymentConfirmSuc) {
      console.log(
        paymentConfirmData.data.book.tickets[0].documents.ticket_receipt
      );

      const a = document.createElement("a");
      a.href = paymentConfirmData.data.book.tickets[0].documents.ticket_receipt;
      a.download = "ticket.pdf";
      a.target = "_blank";
      a.click();

      window.URL.revokeObjectURL(
        paymentConfirmData.data.book.tickets[0].documents.ticket_receipt
      );
    }
    if (refreshSuc) {
      localStorage.setItem("access", refreshData.access);
      window.location.reload();
    }
  }, [bookingCreateData, bookingConfirmData, paymentConfirmData, refreshData]);

  useEffect(() => {
    if (refreshError) {
      localStorage.removeItem("access", refreshData.access);
      localStorage.removeItem("refresh", refreshData.access);
    }
  }, [refreshError]);

  useEffect(() => {
    if (flightInfoSuc) {
      console.log(flightInfoData);
      if (flightInfoData.data.search) {
        setLoader(false);
        flightInfoData.data.flight.price &&
          setTicketPrice(flightInfoData.data.flight.price.UZS.amount);
        setFlyData(flightInfoData.data.search);
      } else if (flightInfoData.data.message) {
        setErrorMsg(flightInfoData.data.message);
      }
    }
  }, [flightInfoSuc]);

  const login = (response) => {
    console.log(response);
    var token = jwt_decode(response.credential);
    const registerData = {
      email: token.email,
      token: response.credential,
      type: "web",
    };
    registerApi(registerData);
  };

  useEffect(() => {
    if (errorMsg) {
      dataError();
      setErrorMsg(false);
    }
  }, [errorMsg]);

  React.useEffect(() => {
    if (registerApiSuc) {
      localStorage.setItem("access", registerApiData.jwt_token.access);
      localStorage.setItem("refresh", registerApiData.jwt_token.refresh);
      window.location.reload();
    }
  }, [registerApiData]);

  const currency = (number, currency, lang = undefined) =>
    Intl.NumberFormat(lang, { style: "currency", currency }).format(number);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handlePasInputChange = (e) => {
    const inputValue = e.target.value.toUpperCase();
    const cleanedValue = inputValue.replace(/[^A-Z0-9]/g, "").substring(0, 9);
    const formattedValue = cleanedValue.slice(0, 2).replace(/[^a-zA-Z]/g, "");
    const formattedValue2 = cleanedValue.slice(2).replace(/[^0-9]/g, "");
    setPassportNum(`${formattedValue} ${formattedValue2}`);
  };

  const checkPhoneInput = (e) => {
    if (e.length < 12) {
      setPhoneNum(e);
    }
  };

  return (
    <>
      {flightInfoData?.data.search && (
        <>
          <Container className="ShopTicket">
            <Grid
              container
              sx={{ justifyContent: "space-between", alignItems: "flex-start" }}
            >
              <Grid item lg={12}>
                <div className="mb-[2%] ">
                  <div className="flex w-[100%]">
                    <h2
                      className="flex text-[16px] whitespace-nowrap items-center font-medium text-[#0064FA] cursor-pointer mr-[10%]"
                      onClick={() => navigate("/")}
                    >
                      {" "}
                      <img src={arrowLeft} alt="" /> Поиск билетов
                    </h2>
                    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                      <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="basic tabs example"
                      >
                        <Tab
                          iconPosition="start"
                          icon={
                            tabIndex >= 0 ? <CalendarTick /> : <CalendarTick2 />
                          }
                          label={
                            <span
                              className="hidden md:block"
                              style={
                                tabIndex >= 0
                                  ? { color: "#0063FA" }
                                  : { color: "#AEAEAE" }
                              }
                            >
                              Бронирование
                            </span>
                          }
                          {...a11yProps(0)}
                        />
                        <Tab
                          iconPosition="start"
                          icon={tabIndex >= 1 ? <Coin2 /> : <Coin />}
                          label={
                            <span
                              className="hidden md:block"
                              style={
                                tabIndex >= 1
                                  ? { color: "#0063FA" }
                                  : { color: "#AEAEAE" }
                              }
                            >
                              Оплата
                            </span>
                          }
                          {...a11yProps(1)}
                        />
                        <Tab
                          iconPosition="start"
                          icon={tabIndex >= 2 ? <Bilet2 /> : <Bilet />}
                          label={
                            <span
                              className="hidden md:block"
                              style={
                                tabIndex >= 2
                                  ? { color: "#0063FA" }
                                  : { color: "#AEAEAE" }
                              }
                            >
                              Получение билета
                            </span>
                          }
                          {...a11yProps(2)}
                        />
                      </Tabs>
                    </Box>
                  </div>
                  <TabPanel value={value} index={0}>
                    <form
                      onSubmit={(e) => {
                        bookingCreateFnc(e);
                        setPaymentType("UZCARD/HUMO");
                      }}
                    >
                      <div>
                        <h2 className="text-[16px] font-semibold font-mono">
                          Бронирование билета
                        </h2>
                        <div className="flex items-center">
                          {flightInfoData &&
                            flightInfoData.data.search?.segments.map((item) => (
                              <h1 className="font-bold text-[28px]">
                                {item.from.name}
                              </h1>
                            ))}
                          <img
                            className="mx-[1%] cursor-pointer"
                            src={arrowSwap}
                            alt=""
                          />
                          {flightInfoData &&
                            flightInfoData.data.search?.segments.map((item) => (
                              <h1 className="font-bold text-[28px]">
                                {item.to.name}
                              </h1>
                            ))}
                        </div>
                        <p className="text-[18px] font-normal text-[#222222] font-mono">
                          {moment(
                            flightInfoData?.data.flight?.segments[0].arr.date,
                            "DD.MM.YYYY"
                          ).format("DD MMMM")}
                          ,
                          {moment(
                            flightInfoData?.data.flight?.segments[0].arr.date,
                            "DD.MM.YYYY"
                          )
                            .format(" dddd")
                            .slice(0, 4)}
                        </p>
                      </div>

                      <div className="md:border-[1px] md:p-[32px] md:rounded-lg border-[#CCCCCC] w-full mt-[2%]">
                        {flightInfoData ? (
                          <div className="box w-full flex">
                            <>
                              <div className="w-full relative">
                                <div className="container-box pb-3 container-box-2">
                                  <div className="left w-full md:pr-5">
                                    <div className="top flex">
                                      <h2 className="flex w-full justify-between items-center log">
                                        <img
                                          className="w-10 rounded-full"
                                          src={`https://mpics.avs.io/al_square/240/240/${flightInfoData?.data.flight.segments[0].provider.supplier.code}.png`}
                                          alt=""
                                        />
                                      </h2>
                                    </div>

                                    <div className="bottom flex md:flex-row flex-col  md:items-center md:justify-between">
                                      <div className="dataL">
                                        <h2 className="font-mono text-[0.675rem] md:text-lg">
                                          {
                                            flightInfoData?.data.flight
                                              .segments[0].dep.time
                                          }
                                        </h2>

                                        <p className="font-mono text-[0.675rem] md:text-lg">
                                          {moment(
                                            flightInfoData?.data.flight
                                              .segments[0].arr.date,
                                            "DD.MM.YYYY"
                                          ).format("DD MMMM")}
                                          ,
                                          {moment(
                                            flightInfoData?.data.flight
                                              .segments[0].arr.date,
                                            "DD.MM.YYYY"
                                          )
                                            .format(" dddd")
                                            .slice(0, 4)}
                                        </p>
                                        <p className="font-mono text-[0.675rem] md:text-lg">
                                          {" "}
                                          {
                                            flightInfoData?.data.flight
                                              .segments[0].dep.city.title
                                          }{" "}
                                          (
                                          {
                                            flightInfoData?.data.flight
                                              .segments[0].dep.city.code
                                          }
                                          )
                                        </p>
                                      </div>
                                      <div className="my-[5%] md:my-[0%]">
                                        <div className="flex justify-center">
                                          <p className="font-mono text-[0.675rem] md:text-lg">
                                            {moment
                                              .utc()
                                              .startOf("day")
                                              .add(
                                                flightInfoData?.data.flight
                                                  .duration,
                                                "minutes"
                                              )
                                              .format("hh ч mm мин")}
                                          </p>
                                        </div>
                                        <div className="map w-full justify-between ">
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
                                        </div>

                                        <div className="my-4 w-full border-[1px] border-[black] ">
                                          <div className="relative w-full">
                                            <span className="absolute block left-0 bottom-0 translate-y-1 rounded-md bg-[#FFC107] md:w-10 w-20 h-2"></span>
                                            <span className="absolute block right-2/4 bottom-0 translate-y-1 translate-x-4  rounded-md bg-[#EF2323] w-20 md:w-6 h-2"></span>
                                            <span className="absolute block right-0 bottom-0 translate-y-1 rounded-md bg-[#EF2323] md:w-10 w-20 h-2"></span>
                                          </div>
                                        </div>
                                        <div className="namCity flex items-center justify-between mt-3">
                                          <p className="font-mono">
                                            {
                                              flightInfoData?.data.flight
                                                .segments[0].dep.city.code
                                            }
                                          </p>
                                          <p className="font-mono">
                                            {
                                              flightInfoData?.data.flight
                                                .segments[
                                                flightInfoData?.data.flight
                                                  .segments.length - 1
                                              ].arr.city.code
                                            }
                                          </p>
                                        </div>
                                      </div>
                                      <div className="dataR">
                                        <h2 className="font-mono text-[0.675rem] md:text-lg">
                                          {
                                            flightInfoData?.data.flight
                                              .segments[
                                              flightInfoData?.data.flight
                                                .segments.length - 1
                                            ].arr.time
                                          }
                                        </h2>
                                        <p className="font-mono text-[0.675rem] md:text-lg">
                                          {moment(
                                            flightInfoData?.data.flight
                                              .segments[
                                              flightInfoData?.data.flight
                                                .segments.length - 1
                                            ].arr.date,
                                            "DD.MM.YYYY"
                                          ).format("DD MMMM")}
                                          ,
                                          {moment(
                                            flightInfoData?.data.flight
                                              .segments[
                                              flightInfoData?.data.flight
                                                .segments.length - 1
                                            ].arr.date,
                                            "DD.MM.YYYY"
                                          )
                                            .format(" dddd")
                                            .slice(0, 4)}
                                        </p>
                                        <p className="font-mono text-[0.675rem] md:text-lg">
                                          {" "}
                                          {
                                            flightInfoData?.data.flight
                                              .segments[
                                              flightInfoData?.data.flight
                                                .segments.length - 1
                                            ].arr.city.title
                                          }{" "}
                                          (
                                          {
                                            flightInfoData?.data.flight
                                              .segments[
                                              flightInfoData?.data.flight
                                                .segments.length - 1
                                            ].arr.city.code
                                          }
                                          )
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <Accordion
                                  className="flex"
                                  style={{ flexDirection: "column-reverse" }}
                                  TransitionProps={{ timeout: 800 }}
                                  onChange={() =>
                                    setIsAccordionOpen(!isAccordionOpen)
                                  }
                                >
                                  <AccordionSummary
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                  >
                                    <Typography>
                                      {isAccordionOpen
                                        ? "Скрыть детали"
                                        : "Дали маршрута"}
                                      .
                                    </Typography>
                                  </AccordionSummary>
                                  <AccordionDetails>
                                    <Typography>
                                      {flightInfoData?.data.flight.segments.map(
                                        (twoItem, index) => (
                                          <>
                                            <div
                                              className="container-box py-2 md:py-5 pb-3 container-box-2"
                                              onClick={() =>
                                                window.innerWidth < 768 &&
                                                handleOpen()
                                              }
                                            >
                                              <div className="left w-full md:pr-5">
                                                <div className="">
                                                  <div className="flex items-center	justify-between w-full">
                                                    <div className="from flex">
                                                      <div>
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
                                                      <p>
                                                        <p className="font-mono text-[0.675rem] md:text-lg ml-3">
                                                          {
                                                            flightInfoData?.data
                                                              .flight.segments[
                                                              index
                                                            ].dep.time
                                                          }
                                                        </p>
                                                        <p className="font-mono text-[0.675rem] md:text-lg ml-3">
                                                          {
                                                            flightInfoData?.data
                                                              .flight.segments[
                                                              index
                                                            ].arr.time
                                                          }
                                                        </p>
                                                      </p>
                                                    </div>
                                                    <div>
                                                      <p className="font-mono text-[0.675rem] md:text-lg">
                                                        {
                                                          flightInfoData?.data
                                                            .flight.segments[
                                                            index
                                                          ].dep.city.title
                                                        }
                                                      </p>
                                                      <p className="font-mono text-[0.675rem] md:text-lg">
                                                        {
                                                          flightInfoData?.data
                                                            .flight.segments[
                                                            index
                                                          ].arr.city.title
                                                        }
                                                      </p>
                                                    </div>

                                                    <div>
                                                      <p className="font-mono text-[0.675rem] md:text-lg ml-3">
                                                        {moment(
                                                          flightInfoData?.data
                                                            .flight.segments[
                                                            index
                                                          ].dep.date,
                                                          "DD.MM.YYYY"
                                                        ).format("DD MMMM")}
                                                      </p>
                                                      <p className="font-mono text-[0.675rem] md:text-lg ml-3">
                                                        {moment(
                                                          flightInfoData?.data
                                                            .flight.segments[
                                                            index
                                                          ].arr.date,
                                                          "DD.MM.YYYY"
                                                        ).format("DD MMMM")}
                                                      </p>
                                                    </div>

                                                    <p className="font-mono text-[0.675rem] md:text-lg">
                                                      {moment
                                                        .utc()
                                                        .startOf("day")
                                                        .add(
                                                          flightInfoData?.data
                                                            .flight.segments[
                                                            index
                                                          ].dep.data,
                                                          "minutes"
                                                        )
                                                        .format("hhч mmмин")}
                                                    </p>
                                                    <img
                                                      className="w-10 rounded-full"
                                                      src={`https://mpics.avs.io/al_square/240/240/${flightInfoData?.data.flight.segments[index].provider.supplier.code}.png`}
                                                      alt=""
                                                    />
                                                  </div>
                                                </div>

                                                <div className="flex justify-between">
                                                  <div>
                                                    <p className="font-mono text-[0.675rem] mt-3 md:text-lg">
                                                      Рейс:{" "}
                                                      {
                                                        flightInfoData?.data
                                                          .flight.segments[
                                                          index
                                                        ].fare_code
                                                      }
                                                    </p>
                                                    <p className="font-mono text-[0.675rem] md:text-lg">
                                                      Самолет:{" "}
                                                      {
                                                        flightInfoData?.data
                                                          .flight.segments[
                                                          index
                                                        ].provider.supplier
                                                          .title
                                                      }
                                                    </p>
                                                    {flightInfoData?.data.flight
                                                      .segments[index].aircraft
                                                      .title && (
                                                        <p className="font-mono text-[0.675rem] md:text-lg">
                                                          Самолет:{" "}
                                                          {
                                                            flightInfoData?.data
                                                              .flight.segments[
                                                              index
                                                            ].aircraft.title
                                                          }
                                                        </p>
                                                      )}
                                                  </div>

                                                  <div>
                                                    {flightInfoData?.data.flight
                                                      .segments[index].dep
                                                      .terminal && (
                                                        <p className="font-mono text-[0.675rem] md:text-lg mt-5">
                                                          Терминал:{" "}
                                                          {
                                                            flightInfoData?.data
                                                              .flight.segments[
                                                              index
                                                            ].dep.terminal
                                                          }
                                                        </p>
                                                      )}
                                                    {flightInfoData?.data.flight
                                                      .segments[index].cbaggage
                                                      .weight && (
                                                        <p className="font-mono text-[0.675rem] md:text-lg">
                                                          Багаж:{" "}
                                                          {
                                                            flightInfoData?.data
                                                              .flight.segments[
                                                              index
                                                            ].cbaggage.weight
                                                          }{" "}
                                                        </p>
                                                      )}
                                                    <p className="font-mono text-[0.675rem] md:text-lg">
                                                      Класс:{" "}
                                                      {flightInfoData?.data.flight.segments[
                                                        index
                                                      ].class.name.toUpperCase() ===
                                                        "E"
                                                        ? "Ekonom"
                                                        : flightInfoData?.data.flight.segments[
                                                          index
                                                        ].class.name.toUpperCase() ===
                                                        "B" && "Biznes"}
                                                    </p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>

                                            <div className="pr-3">
                                              {index !==
                                                flightInfoData?.data.flight
                                                  .segments.length -
                                                1 && (
                                                  <span className="w-full h-0.5 block bg-[#ccc]"></span>
                                                )}
                                            </div>
                                          </>
                                        )
                                      )}
                                    </Typography>
                                  </AccordionDetails>
                                </Accordion>
                              </div>
                            </>
                          </div>
                        ) : (
                          flightInfoData && (
                            <h2 style={{ textAlign: "center" }}>
                              Chipta topilmadi
                            </h2>
                          )
                        )}

                        {!flightInfoSuc && (
                          <TicketSkeleton loading={!flightInfoSuc} />
                        )}
                      </div>

                      <div className="border-y md:border border-[#CCCCCC] py-[10px] md:rounded-lg my-[1%] md:p-[32px] flex flex-col w-full">
                        <div>
                          <h2 className="font-bold text-[20px] md:text-[24px]">
                            Контактная информация
                          </h2>
                          <p className="font-normal text-[13px] md:text-[16px] text-[#AEAEAE] font-mono">
                            На почту мы отправим электронный билет, на телефон
                            мы позвоним, если будут изменения в рейсе или в
                            случае других ситуаций
                          </p>
                        </div>
                        <div className="flex-col md:flex-row flex items-center gap-[20px] md:w-[70%] w-[100%] mt-[2%]">
                          <label className="w-full " htmlFor="">
                            <p>Электронная почта (E-mail)</p>
                            <input
                              className="border-[1px] rounded-lg p-[12px] h-[48px] w-[100%] mt-[8px]"
                              onChange={(e) => setGmail(e.target.value)}
                              type="email"
                              placeholder="Электронная почта"
                              required
                              value={gmail}
                            />
                          </label>
                          <label className="w-full" htmlFor="">
                            <p>
                              Telefon <span>*</span>
                            </p>
                            <PhoneInput
                              defaultCountry="ua"
                              value={phoneNum}
                              inputClassName="w-[100%] h-[48px]"
                              required
                              onChange={(phone) => setPhoneNum(phone)}
                            />
                          </label>
                        </div>
                      </div>
                      <div className="md:border-[1px] border-[#CCC] py-[10px] md:rounded-lg my-[1%] md:p-[32px]">
                        <div>
                          <h2 className="text-[24px] font-bold">
                            Введите данные пассажиров
                          </h2>
                          <h1 className="font-bold text-[20px] my-[1%]">
                            Пассажир 1 (12 лет и старше)
                          </h1>
                        </div>
                        <div>
                          <div className="flex-col md:flex-row flex gap-[20px] w-[100%] md:w-[62%]">
                            <label className="w-full" htmlFor="">
                              <p>Гражданство</p>
                              <FormControl sx={{ width: "100%", height: "48px", marginTop: "8px" }} size="small"
                                required
                              >
                                <InputLabel id="demo-select-small-label">
                                  Гражданство
                                </InputLabel>
                                <Select
                                  labelId="demo-select-small-label"
                                  id="demo-select-small"
                                  value={citizen}
                                  label="Age"
                                  onChange={(e) => setCitizen(e.target.value)}
                                  sx={{
                                    borderRadius: "10px",
                                    padding: "0px !important",
                                    height: "100%",
                                    marginTop: "2px",
                                    width: "100%",
                                    ".css-jedpe8-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input": {
                                      border: "none !important",
                                      padding: "15px 15px !important",
                                    },
                                    ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                                      borderColor: "#e5e7eb",
                                      marginTop: "1px",
                                    },
                                  }}
                                >
                                  <MenuItem value={"UZ"}>Uzbekistan</MenuItem>
                                  <MenuItem value={"RU"}>Rossiya</MenuItem>
                                </Select>
                              </FormControl>
                            </label>
                            <label className="w-full" htmlFor="">
                              Отчество
                              <input
                                value={middleName}
                                className="border-[1px] rounded-lg p-[12px] h-[48px] w-full mt-[10px]"
                                onChange={(e) => setMiddleName(e.target.value)}
                                type="text"
                                placeholder="Asadov"
                                required
                              />
                            </label>
                          </div>
                          <div className="my-[3%] flex items-center  gap-[20px] w-[62%]">
                            <div className="flex items-center">
                              <label className="w-[100%] mr-2" htmlFor="P">
                                пасспорты
                              </label>
                              <input type="radio" name="P" id="P" value={doxType} onChange={() => setDoxType('P')} />
                            </div>
                            <div className="flex items-center">
                              <label className="w-[100%] mr-2" htmlFor="A">
                                ID карты
                              </label>
                              <input type="radio" name="P" id="A" value={doxType} onChange={() => setDoxType('A')} />
                            </div>
                          </div>
                          <div className="my-[1%] flex-col md:flex-row flex items-center  gap-[20px] w-full md:w-[62%]">
                            <label className="w-[100%]" htmlFor="">
                              <p>Данные пасспорта или ID карты</p>
                              <input
                                className="border-[1px] rounded-lg p-[12px] h-[48px] w-full mt-[8px]"
                                onChange={(e) => handlePasInputChange(e)}
                                type="text"
                                value={passportNum}
                                placeholder="AA 000000"
                                required
                              />
                            </label>
                            <label className="w-[100%]" htmlFor="">
                              Срок действительности пасспорта
                              <DatePicker
                                required
                                inputClass="border-[1px] rounded-lg p-[12px]  h-[48px] w-full mt-[8px]"
                                style={{ width: "100%" }}
                                value={passportExp}
                                onChange={setPassportExp}
                                format="DD/MM/YYYY"
                              />
                            </label>
                          </div>

                          <div className="my-[1%] flex-col md:flex-row flex items-center  gap-[20px] w-full md:w-[62%]">
                            <label className="w-full" htmlFor="">
                              Имя
                              <input
                                value={name}
                                className="border-[1px] rounded-lg p-[12px] h-[48px] w-full mt-[8px]"
                                onChange={(e) => setName(e.target.value)}
                                type="text"
                                placeholder="Asad"
                                required
                              />
                            </label>
                            <label className="w-full" htmlFor="">
                              Фамилия
                              <input
                                required
                                className="border-[1px] rounded-lg p-[12px] h-[48px] w-full mt-[8px]"
                                type="text"
                                value={lastName}
                                placeholder="Asadov"
                                onChange={(e) => setLastName(e.target.value)}
                              />
                            </label>
                          </div>
                          <div className="my-[1%] flex-col md:flex-row flex items-center  gap-[20px] w-full  md:w-[62%]">
                            <label className="w-[100%]" htmlFor="">
                              Дата рождение
                              <DatePicker
                                required
                                inputClass="border-[1px] rounded-lg p-[12px]  h-[48px] w-full mt-[8px]"
                                style={{ width: "100%", height: "48px" }}
                                value={birthdatePic}
                                onChange={setBirthdatePic}
                                format="DD/MM/YYYY"
                              />
                            </label>
                            <label className="w-full " htmlFor="">
                              Пол
                              <FormControl
                                sx={{ width: "100%", height: "48px", marginTop: "6px" }}
                                size="small"
                                required
                              >
                                <InputLabel id="demo-select-small-label">
                                  Пол
                                </InputLabel>
                                <Select
                                  labelId="demo-select-small-label"
                                  id="demo-select-small"
                                  value={gender}
                                  label="Age"
                                  onChange={(e) => setGender(e.target.value)}
                                  sx={{
                                    borderRadius: "10px",
                                    padding: "0px !important",
                                    height: "100%",
                                    marginTop: "2px",
                                    width: "100%",
                                    ".css-jedpe8-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input":
                                    {
                                      border: "none !important",
                                      padding: "15px 15px !important",
                                    },
                                    ".css-1d3z3hw-MuiOutlinedInput-notchedOutline":
                                    {
                                      borderColor: "#e5e7eb",
                                      marginTop: "1px",
                                    },
                                  }}
                                >
                                  <MenuItem value={"M"}>Mужской</MenuItem>
                                  <MenuItem value={"F"}>Женский</MenuItem>
                                </Select>
                              </FormControl>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="flex-col md:flex-row flex md:items-center md:justify-between md:border md:rounded-lg md:p-[32px]">
                        <p className="font-bold text-[20px] mb-[12px]">
                          Стоимость:
                          <span className="text-[#0064FA] ml-[6px] ">
                            {ticketPrice &&
                              currency(ticketPrice, "UZS")
                                .replace("UZS", "")
                                .replace("soʻm", "")
                                .replace(/,/g, " ")
                                .slice(0, -3)
                                .replace(".", " ") + " UZS"}
                          </span>
                        </p>
                        <button
                          type="submit"
                          className="bg-[#0057BE] text-[16px] font-normal text-[#FFF] py-[8px] px-[25px] rounded-lg"
                        >
                          Продолжить
                        </button>
                      </div>
                    </form>

                    {/* <div className="bron" style={{ justifyContent: 'end' }}>

                  <button
                    onClick={(e) => { bookingCreateFnc(e); setPaymentType("MTS") }}
                    type="submit"
                  >
                    оплатить российской картой
                  </button>
                </div> */}
                  </TabPanel>
                  <TabPanel value={value} index={1}>
                    <form action="">
                      <div>
                        <h2 className="text-[16px] font-semibold font-mono">
                          Бронирование билета
                        </h2>
                        <div className="flex items-center">
                          {flightInfoData &&
                            flightInfoData.data.search?.segments.map((item) => (
                              <h1 className="font-bold text-[28px]">
                                {item.from.name}
                              </h1>
                            ))}
                          <img
                            className="mx-[1%] cursor-pointer"
                            src={arrowSwap}
                            alt=""
                          />
                          {flightInfoData &&
                            flightInfoData.data.search?.segments.map((item) => (
                              <h1 className="font-bold text-[28px]">
                                {item.to.name}
                              </h1>
                            ))}
                        </div>
                        <p className="text-[18px] font-normal text-[#222222] font-mono">
                          {moment(
                            flightInfoData?.data.flight?.segments[0].arr.date,
                            "DD.MM.YYYY"
                          ).format("DD MMMM")}
                          ,
                          {moment(
                            flightInfoData?.data.flight?.segments[0].arr.date,
                            "DD.MM.YYYY"
                          )
                            .format(" dddd")
                            .slice(0, 4)}
                        </p>
                      </div>
                      <div className="md:border-[1px] md:p-[32px] md:rounded-lg border-[#CCCCCC] w-full mt-[2%]">
                        {flightInfoData ? (
                          <div className="box w-full flex">
                            <>
                              <div className="w-full relative">
                                <div className="container-box pb-3 container-box-2">
                                  <div className="left w-full md:pr-5">
                                    <div className="top flex">
                                      <h2 className="flex w-full justify-between items-center log">
                                        <img
                                          className="w-10 rounded-full"
                                          src={`https://mpics.avs.io/al_square/240/240/${flightInfoData?.data.flight.segments[0].provider.supplier.code}.png`}
                                          alt=""
                                        />
                                      </h2>
                                    </div>

                                    <div className="bottom flex md:flex-row flex-col  md:items-center md:justify-between">
                                      <div className="dataL">
                                        <h2 className="font-mono text-[0.675rem] md:text-lg">
                                          {
                                            flightInfoData?.data.flight
                                              .segments[0].dep.time
                                          }
                                        </h2>

                                        <p className="font-mono text-[0.675rem] md:text-lg">
                                          {moment(
                                            flightInfoData?.data.flight
                                              .segments[0].arr.date,
                                            "DD.MM.YYYY"
                                          ).format("DD MMMM")}
                                          ,
                                          {moment(
                                            flightInfoData?.data.flight
                                              .segments[0].arr.date,
                                            "DD.MM.YYYY"
                                          )
                                            .format(" dddd")
                                            .slice(0, 4)}
                                        </p>
                                        <p className="font-mono text-[0.675rem] md:text-lg">
                                          {" "}
                                          {
                                            flightInfoData?.data.flight
                                              .segments[0].dep.city.title
                                          }{" "}
                                          (
                                          {
                                            flightInfoData?.data.flight
                                              .segments[0].dep.city.code
                                          }
                                          )
                                        </p>
                                      </div>
                                      <div className="my-[5%] md:my-[0%]">
                                        <div className="flex justify-center">
                                          <p className="font-mono text-[0.675rem] md:text-lg">
                                            {moment
                                              .utc()
                                              .startOf("day")
                                              .add(
                                                flightInfoData?.data.flight
                                                  .duration,
                                                "minutes"
                                              )
                                              .format("hh ч mm мин")}
                                          </p>
                                        </div>
                                        <div className="map w-full justify-between ">
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
                                        </div>

                                        <div className="my-4 w-full border-[1px] border-[black] ">
                                          <div className="relative w-full">
                                            <span className="absolute block left-0 bottom-0 translate-y-1 rounded-md bg-[#FFC107] md:w-10 w-20 h-2"></span>
                                            <span className="absolute block right-2/4 bottom-0 translate-y-1 translate-x-4  rounded-md bg-[#EF2323] w-20 md:w-6 h-2"></span>
                                            <span className="absolute block right-0 bottom-0 translate-y-1 rounded-md bg-[#EF2323] md:w-10 w-20 h-2"></span>
                                          </div>
                                        </div>
                                        <div className="namCity flex items-center justify-between mt-3">
                                          <p className="font-mono">
                                            {
                                              flightInfoData?.data.flight
                                                .segments[0].dep.city.code
                                            }
                                          </p>
                                          <p className="font-mono">
                                            {
                                              flightInfoData?.data.flight
                                                .segments[
                                                flightInfoData?.data.flight
                                                  .segments.length - 1
                                              ].arr.city.code
                                            }
                                          </p>
                                        </div>
                                      </div>
                                      <div className="dataR">
                                        <h2 className="font-mono text-[0.675rem] md:text-lg">
                                          {
                                            flightInfoData?.data.flight
                                              .segments[
                                              flightInfoData?.data.flight
                                                .segments.length - 1
                                            ].arr.time
                                          }
                                        </h2>
                                        <p className="font-mono text-[0.675rem] md:text-lg">
                                          {moment(
                                            flightInfoData?.data.flight
                                              .segments[
                                              flightInfoData?.data.flight
                                                .segments.length - 1
                                            ].arr.date,
                                            "DD.MM.YYYY"
                                          ).format("DD MMMM")}
                                          ,
                                          {moment(
                                            flightInfoData?.data.flight
                                              .segments[
                                              flightInfoData?.data.flight
                                                .segments.length - 1
                                            ].arr.date,
                                            "DD.MM.YYYY"
                                          )
                                            .format(" dddd")
                                            .slice(0, 4)}
                                        </p>
                                        <p className="font-mono text-[0.675rem] md:text-lg">
                                          {" "}
                                          {
                                            flightInfoData?.data.flight
                                              .segments[
                                              flightInfoData?.data.flight
                                                .segments.length - 1
                                            ].arr.city.title
                                          }{" "}
                                          (
                                          {
                                            flightInfoData?.data.flight
                                              .segments[
                                              flightInfoData?.data.flight
                                                .segments.length - 1
                                            ].arr.city.code
                                          }
                                          )
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <Accordion
                                  className="flex"
                                  style={{ flexDirection: "column-reverse" }}
                                  TransitionProps={{ timeout: 800 }}
                                  onChange={() =>
                                    setIsAccordionOpen(!isAccordionOpen)
                                  }
                                >
                                  <AccordionSummary
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                  >
                                    <Typography>
                                      {isAccordionOpen
                                        ? "Скрыть детали"
                                        : "Дали маршрута"}
                                      .
                                    </Typography>
                                  </AccordionSummary>
                                  <AccordionDetails>
                                    <Typography>
                                      {flightInfoData?.data.flight.segments.map(
                                        (twoItem, index) => (
                                          <>
                                            <div
                                              className="container-box py-2 md:py-5 pb-3 container-box-2"
                                              onClick={() =>
                                                window.innerWidth < 768 &&
                                                handleOpen()
                                              }
                                            >
                                              <div className="left w-full md:pr-5">
                                                <div className="">
                                                  <div className="flex items-center	justify-between w-full">
                                                    <div className="from flex">
                                                      <div>
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
                                                      <p>
                                                        <p className="font-mono text-[0.675rem] md:text-lg ml-3">
                                                          {
                                                            flightInfoData?.data
                                                              .flight.segments[
                                                              index
                                                            ].dep.time
                                                          }
                                                        </p>
                                                        <p className="font-mono text-[0.675rem] md:text-lg ml-3">
                                                          {
                                                            flightInfoData?.data
                                                              .flight.segments[
                                                              index
                                                            ].arr.time
                                                          }
                                                        </p>
                                                      </p>
                                                    </div>
                                                    <div>
                                                      <p className="font-mono text-[0.675rem] md:text-lg">
                                                        {
                                                          flightInfoData?.data
                                                            .flight.segments[
                                                            index
                                                          ].dep.city.title
                                                        }
                                                      </p>
                                                      <p className="font-mono text-[0.675rem] md:text-lg">
                                                        {
                                                          flightInfoData?.data
                                                            .flight.segments[
                                                            index
                                                          ].arr.city.title
                                                        }
                                                      </p>
                                                    </div>

                                                    <div>
                                                      <p className="font-mono text-[0.675rem] md:text-lg ml-3">
                                                        {moment(
                                                          flightInfoData?.data
                                                            .flight.segments[
                                                            index
                                                          ].dep.date,
                                                          "DD.MM.YYYY"
                                                        ).format("DD MMMM")}
                                                      </p>
                                                      <p className="font-mono text-[0.675rem] md:text-lg ml-3">
                                                        {moment(
                                                          flightInfoData?.data
                                                            .flight.segments[
                                                            index
                                                          ].arr.date,
                                                          "DD.MM.YYYY"
                                                        ).format("DD MMMM")}
                                                      </p>
                                                    </div>

                                                    <p className="font-mono text-[0.675rem] md:text-lg">
                                                      {moment
                                                        .utc()
                                                        .startOf("day")
                                                        .add(
                                                          flightInfoData?.data
                                                            .flight.segments[
                                                            index
                                                          ].dep.data,
                                                          "minutes"
                                                        )
                                                        .format("hhч mmмин")}
                                                    </p>
                                                    <img
                                                      className="w-10 rounded-full"
                                                      src={`https://mpics.avs.io/al_square/240/240/${flightInfoData?.data.flight.segments[index].provider.supplier.code}.png`}
                                                      alt=""
                                                    />
                                                  </div>
                                                </div>

                                                <div className="flex justify-between">
                                                  <div>
                                                    <p className="font-mono text-[0.675rem] mt-3 md:text-lg">
                                                      Рейс:{" "}
                                                      {
                                                        flightInfoData?.data
                                                          .flight.segments[
                                                          index
                                                        ].fare_code
                                                      }
                                                    </p>
                                                    <p className="font-mono text-[0.675rem] md:text-lg">
                                                      Самолет:{" "}
                                                      {
                                                        flightInfoData?.data
                                                          .flight.segments[
                                                          index
                                                        ].provider.supplier
                                                          .title
                                                      }
                                                    </p>
                                                    {flightInfoData?.data.flight
                                                      .segments[index].aircraft
                                                      .title && (
                                                        <p className="font-mono text-[0.675rem] md:text-lg">
                                                          Самолет:{" "}
                                                          {
                                                            flightInfoData?.data
                                                              .flight.segments[
                                                              index
                                                            ].aircraft.title
                                                          }
                                                        </p>
                                                      )}
                                                  </div>

                                                  <div>
                                                    {flightInfoData?.data.flight
                                                      .segments[index].dep
                                                      .terminal && (
                                                        <p className="font-mono text-[0.675rem] md:text-lg mt-5">
                                                          Терминал:{" "}
                                                          {
                                                            flightInfoData?.data
                                                              .flight.segments[
                                                              index
                                                            ].dep.terminal
                                                          }
                                                        </p>
                                                      )}
                                                    {flightInfoData?.data.flight
                                                      .segments[index].cbaggage
                                                      .weight && (
                                                        <p className="font-mono text-[0.675rem] md:text-lg">
                                                          Багаж:{" "}
                                                          {
                                                            flightInfoData?.data
                                                              .flight.segments[
                                                              index
                                                            ].cbaggage.weight
                                                          }{" "}
                                                        </p>
                                                      )}
                                                    <p className="font-mono text-[0.675rem] md:text-lg">
                                                      Класс:{" "}
                                                      {flightInfoData?.data.flight.segments[
                                                        index
                                                      ].class.name.toUpperCase() ===
                                                        "E"
                                                        ? "Ekonom"
                                                        : flightInfoData?.data.flight.segments[
                                                          index
                                                        ].class.name.toUpperCase() ===
                                                        "B" && "Biznes"}
                                                    </p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>

                                            <div className="pr-3">
                                              {index !==
                                                flightInfoData?.data.flight
                                                  .segments.length -
                                                1 && (
                                                  <span className="w-full h-0.5 block bg-[#ccc]"></span>
                                                )}
                                            </div>
                                          </>
                                        )
                                      )}
                                    </Typography>
                                  </AccordionDetails>
                                </Accordion>
                              </div>
                            </>
                          </div>
                        ) : (
                          flightInfoData && (
                            <h2 style={{ textAlign: "center" }}>
                              Chipta topilmadi
                            </h2>
                          )
                        )}

                        {!flightInfoSuc && (
                          <TicketSkeleton loading={!flightInfoSuc} />
                        )}
                      </div>
                      <div className="border-y-[1px] md:border md:rounded-lg my-[1%] md:p-[32px]">
                        <h1 className="text-[20px]  md:text-[24px] my-[5%]">
                          Введите данные для оплаты
                        </h1>
                        <div className=" border border-[#CCCCCC] bg-[#F7F7F7] p-[20px] md:py-[64px] md:px-[24px] rounded-lg">
                          <h1 className="text-[24px] mb-[1%]">
                            Банковская карта
                          </h1>
                          <div>
                            <label className="w-full md:w-[50%]" htmlFor="">
                              <TextField
                                fullWidth
                                type="text"
                                value={cardNum}
                                label="Karta raqamingiz"
                                id="fullWidth"
                                InputProps={{
                                  style: {
                                    borderRadius: "10px",
                                    marginBottom: "20px",
                                  },
                                }}
                                onChange={(e) => {
                                  let res = e.target.value
                                    .replace(/[^\dA-Z]/g, "")
                                    .replace(/(.{4})/g, "$1 ")
                                    .trim();
                                  res.length > 20
                                    ? e.preventDefault()
                                    : setCardNum(res);
                                }}
                              />
                            </label>
                            <div className="flex flex-col md:flex-row md:items-center">
                              <label className="w-full md:w-[50%] mr-[20px]" htmlFor="">
                                <TextField
                                  fullWidth
                                  type="text"
                                  value={cardExp}
                                  label="Amal qilish muddati"
                                  id="fullWidth"
                                  InputProps={{
                                    style: {
                                      borderRadius: "10px",
                                    },
                                  }}
                                  onChange={(e) => {
                                    let res = e.target.value
                                      .replace(/[^0-9]/g, "")
                                      .replace(/^([2-9])$/g, "0$1")
                                      .replace(/^(1{1})([3-9]{1})$/g, "0$1/$2")
                                      .replace(
                                        /^([0-1]{1}[0-9]{1})([0-9]{1,2}).*/g,
                                        "$1/$2"
                                      );
                                    setCardExp(res);
                                  }}
                                />
                              </label>
                              <button
                                onClick={(e) => confirmBooking(e)}
                                type="submit"
                                className="bg-[#0057BE] text-[16px] font-normal text-[#FFF] w-full md:w-[40%] py-[16px] px-[25px]  rounded-lg my-[15px]"
                              >
                                SMS kodni olish
                              </button>
                            </div>

                            {/* <OTPInput
                                value={OTP}
                                onChange={setOTP}
                                OTPLength={5}
                                otpType="number"
                                disabled={disableOtp}
                                type="number"
                              /> */}
                            <div style={{ marginBottom: "15px" }}>
                              <TextField
                                className="inputs"
                                disabled={disableOtp}
                                required={true}
                                label="Raqamga yuborilgan parolni kiriting"
                                variant="outlined"
                                placeholder="X X X X X"
                                sx={{
                                  width: "100%",
                                  "& .MuiOutlinedInput-notchedOutline": {
                                    borderRadius: "10px",
                                  }
                                }}
                                onChange={(e) => {
                                  let res = e.target.value
                                    .replace(/[^0-9]/g, "")
                                    .replace(/(\d)(?=(\d{1})+$)/g, '$1 ');
                                  setOTP(res.slice(0, 9))
                                }}
                                value={OTP}
                                type="text"
                              />
                            </div>
                          </div>
                        </div>
                        <p className="text-[18px] md:my-[2%] md:mt-[2%]">
                          Данные паспорта и банковской карты под защитой!
                        </p>
                      </div>
                      <div className="md:border md:rounded-lg py-[10px] md:p-[32px] my-[2%]">
                        <h2 className="text-[24px]">Детали заказа</h2>
                        <div className="flex items-center justify-between mt-[3%]">
                          <h1 className="text-[20px]">Данные пассажиров</h1>
                          <img
                            className="rotate-[270deg] cursor-pointer"
                            src={arrLeft}
                            alt=""
                          />
                        </div>
                        <div className="bg-[#F7F7F7] py-[8px]  px-[16px] rounded-lg mt-[1%]">
                          <h1 className="text-[18px]">Контакты для связи</h1>
                          <p className="text-[18px] font-normal">
                            {phoneNum}, {gmail}
                          </p>
                        </div>
                        <div className="mt-[1%]">
                          <h1 className="text-[20px]">Asad Asadov</h1>
                          {/* <p className="text-[18px] mt-[1%]">Дата рождение: {birthdatePic}</p> */}
                          <p className="text-[18px]">
                            Данные пасспорта или ID карты: {passportNum}
                          </p>
                        </div>
                        <div className="border border-[#CCCCCC] my-[3%]"></div>
                        <div className="flex justify-between items-center">
                          <h1 className="flex gap-[5px] text-[20px]">
                            {" "}
                            <img
                              className="rotate-[270deg]"
                              src={airplane}
                              alt=""
                            />
                            Ташкент - Париж
                          </h1>
                          <h2 className="flex gap-[5px] text-[20px] text-[#0064FA] cursor-pointer">
                            {ticketPrice &&
                              currency(ticketPrice, "UZS")
                                .replace("UZS", "")
                                .replace("soʻm", "")
                                .replace(/,/g, " ")
                                .slice(0, -3)
                                .replace(".", " ") + " UZS"}
                            <img
                              className="rotate-[270deg]"
                              src={arrLeft}
                              alt=""
                            />
                          </h2>
                        </div>
                        <h1 className="text-[20px] mt-[1%]">
                          {name} {lastName}
                        </h1>
                        <p className="text-[18px] ">Тариф: Бизнес</p>
                        <p className="text-[18px] my-[1%] ">
                          Базовый тариф: 25 000 000 UZS
                        </p>
                        <p className="text-[18px] my-[1%]">
                          Налоги и сборы: 4 000 000 UZS
                        </p>
                        <p className="text-[18px] ">
                          Сервисный сбор AVIA: 1 900 000 UZS
                        </p>
                      </div>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between md:border md:rounded-lg md:p-[32px]">
                        <p className="font-bold text-[20px] mb-[10px]">
                          Итоговая стоимость:
                          <span className="text-[#0064FA] ml-[6px]">
                            29 487 942 UZS
                          </span>
                        </p>
                        <button
                          onClick={(e) => paymentConfirmFnc(e)}
                          type="submit"
                          className="bg-[#0057BE] text-[16px] font-normal text-[#FFF] py-[8px] px-[25px] rounded-lg"
                        >
                          Купить билет
                        </button>
                      </div>
                    </form>
                  </TabPanel>
                  <TabPanel value={value} index={2}></TabPanel>
                </div>
              </Grid>
            </Grid>
          </Container>
          <ToastContainer />
        </>
      )}

      {!loggedIn && (
        <GoogleOAuthProvider clientId={clientId}>
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              login(credentialResponse);
            }}
            onError={() => {
              console.log("Login Failed");
            }}
            useOneTap
          />
        </GoogleOAuthProvider>
      )}
      {loader && <Loader />}
    </>
  );
}

export default ShopTicket;
