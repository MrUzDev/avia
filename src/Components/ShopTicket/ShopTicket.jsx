import { Button, Container, Grid } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import "./ShopTicket.css";
import {
  useBookingCreateMutation,
  useBookingConfirmMutation,
  usePaymentConfirmMutation,
  useRefreshMutation,
  useFlightInfoMutation,
} from "../../RTKQueryApi/AllApi";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import jwt_decode from "jwt-decode";
import { useRegisterApiMutation } from "../../RTKQueryApi/AllApi";
import {GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

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

  const [refresh, { data: refreshData, isSuccess: refreshSuc }] =
    useRefreshMutation();

  const [
    paymentConfirm,
    { data: paymentConfirmData, isSuccess: paymentConfirmSuc },
  ] = usePaymentConfirmMutation();

  const [flightInfo, { data: flightInfoData, isSuccess: flightInfoSuc, error: flightInfoError }] =
    useFlightInfoMutation();

  const [name, setName] = useState();
  const [lastName, setLastName] = useState();
  const [gmail, setGmail] = useState();
  const [phoneNum, setPhoneNum] = useState();
  const [middleName, setMiddleName] = useState();
  const [gender, setGender] = useState();
  const [birthdatePic, setBirthdatePic] = useState(moment().format("DD.MM.YYYY"));
  const [passportNum, setPassportNum] = useState();
  const [passportExp, setPassportExp] = useState(moment().format("DD.MM.YYYY"));
  const [confirmModal, setConfirmModal] = useState(false);
  const [cardNum, setCardNum] = useState();
  const [cardExp, setCardExp] = useState();
  const [timer, setTimer] = useState(90);
  const [OTP, setOTP] = useState("");
  const [otp_token, setOtp_token] = useState();
  const [tr_id, setTr_id] = useState();
  const [loader, setLoader] = useState(false);
  const [ticketPrice, setTicketPrice] = useState(0)
  const [paymentType, setPaymentType] = useState()

  const loggedIn = useSelector((state) => state.loginSlice.loggedIn);

  const { setOpen } = useContext(Contexts);
  const params = useParams();

  const clientId = "428493911231-e8ipsql0crd7loti8t96cun9u397valg.apps.googleusercontent.com";

  const [registerApi, {data: registerApiData, isSuccess: registerApiSuc}] = useRegisterApiMutation()

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

  const dataError = () => toast.error("Ma'lumotlar to'liq kiritilmadi!");
  const dataFake = () => toast.error("Ma'lumotlar noto'g'ri kiritildi!");
  const dublBron = () => toast.error("Ikkinchi martta buyutma qilinmoqda!");

  useEffect(() => {
    try {
      if(params.id) {
        setLoader(true)
        const flighId = {
          lang: "ru",
          tid: params.id,
        };
  
        flightInfo(flighId)
      }
    } catch (error) {}
  }, [params.id, registerApiData]);

  const bookingCreateFnc = (e) => {
    e.preventDefault();

    if(birthdatePic, passportExp, name, phoneNum, lastName, passportNum, gmail, gender) {
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
  
      setLoader(true);

      try {
        const bookingCreatee = {
          lang: "ru",
          tid: params.id,
          client_email: gmail,
          client_phone: "+" + phoneNum,
          payer_name: name,
          passengers: [
            {
              firstname: name,
              lastname: lastName,
              middlename: middleName,
              age: "adt",
              birthdate: birthdate,
              doctype: "P",
              docnum: passportNum,
              docexp: birthdatePass,
              gender: gender,
              citizen: "UZ",
              phone: "+" + phoneNum,
              email: gmail,
              send_email: 1,
            },
          ],
          accompanying_adult: [],
          bonus_card: "",
          is_health_declaration_checked: 0,
        };
  
        bookingCreate(bookingCreatee);
      } catch (error) {}
    }else {
      dataError()
    }

  };

  useEffect(() => {
    if(bookingCreateErr && bookingCreateErr.status === 401) {
      setOpen(true)
    }
  }, [bookingCreateErr])

  const confirmBooking = () => {
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

  const paymentConfirmFnc = () => {
    const paymentConff = {
      otp: OTP,
      otp_token: otp_token,
      tr_id: tr_id,
    };

    paymentConfirm(paymentConff);
  };

  useEffect(() => {
    if (flightInfoError) {

      if (localStorage.getItem("refresh")) {
        console.log(flightInfoError);
        if (flightInfoError && flightInfoError.status === 401) {
          const getAccessData = {
            refresh: localStorage.getItem("refresh"),
          };

          refresh(getAccessData);
        }
      }
    }
  }, [flightInfoError]);

  useEffect(() => {
    if (bookingCreateSuc) {
      setLoader(false);
      console.log(bookingCreateData, 'data');
      if(bookingCreateData.data && bookingCreateData.data.message === "Дубль бронирования") {
        dublBron()
      }else if(bookingCreateData.success == false) {
        dataFake()
      }
      bookingCreateData.tr_id && setConfirmModal(true);
      localStorage.setItem("trId", bookingCreateData.tr_id);
      setTr_id(bookingCreateData.tr_id);
    }
    if (bookingConfirmSuc) {
      if(paymentType == "MTS") {
        if(bookingConfirmData.result) {
          window.location.href = bookingConfirmData.result.payment.debit.form_url
        }
      }else {
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
      window.location.reload()
    }
  }, [bookingCreateData, bookingConfirmData, paymentConfirmData, refreshData]);

  useEffect(() => {
    if(flightInfoSuc) {
      setLoader(false)
      setTicketPrice(flightInfoData.data.flight.price.UZS.amount);
    }
  }, [flightInfoSuc])

  const login = (response) => {
    console.log(response);
    var token = jwt_decode(response.credential)
  
    const registerData = {
        email: token.email,
        token: response.credential,
        type: "web" 
    }
    registerApi(registerData) 
  }


  React.useEffect(() => {
    if(registerApiSuc) {
      localStorage.setItem('access', registerApiData.jwt_token.access)
      localStorage.setItem('refresh', registerApiData.jwt_token.refresh)
      window.location.reload()
    }
  }, [registerApiData])


  const currency = (number, currency, lang = undefined) =>
    Intl.NumberFormat(lang, { style: "currency", currency }).format(number);

  return (
    <>
      <Container className="ShopTicket">
        <Grid
          container
          sx={{ justifyContent: "space-between", alignItems: "flex-start" }}
        >
          <Grid item lg={12}>
            <form onSubmit={(e) => {bookingCreateFnc(e); setPaymentType("UZCARD/HUMO")}}>
              <h2>Сабиха Гокчен (Стамбул)-GYD-Ташкент</h2>
              <div className="contact">
                <div className="conTitle">
                  <h2>Контактная информация</h2>
                  <p>
                    На почту мы отправим электронный билет, на телефон мы
                    позвоним, если будут изменения в рейсе или в случае других
                    ситуаций
                  </p>
                </div>
                <div className="line"></div>
                <div className="for1">
                  <label htmlFor="">
                    <p>
                      {" "}
                      Ism <span>*</span>
                    </p>
                    <input
                      onChange={(e) => setName(e.target.value)}
                      required
                      type="text"
                      autoFocus
                    />
                  </label>
                  <label htmlFor="">
                    <p>Электронная почта (E-mail)</p>
                    <input
                      onChange={(e) => setGmail(e.target.value)}
                      type="email"
                      required
                    />
                  </label>
                  <label htmlFor="">
                    <p>
                      Telefon <span>*</span>
                    </p>

                    <TextField
                      className="inputs invisibleBg"
                      sx={{
                        width: "100%",
                        "& .MuiOutlinedInput-notchedOutline": {
                          borderRadius: "15px",
                          border: "none",
                        },
                      }}
                      type="number"
                      variant="outlined"
                      required
                      autoComplete="false"
                      defaultValue={+998}
                      onInput={(e) => {
                        e.target.value = Math.max(0, parseInt(e.target.value))
                          .toString()
                          .slice(0, 12);
                      }}
                      onChange={(e) => {
                        setPhoneNum(e.target.value);
                      }}
                    />
                  </label>
                </div>
              </div>
              <div className="info">
                <div className="inTitle">
                  <h2>Информация о пассажирах</h2>
                  <p>
                    Введите личные данные пассажиров, как указано в документе
                    (паспорте), по которому они полетят. Поля нужно заполнять
                    латинскими буквами.
                  </p>
                </div>
                <div className="line"></div>
                <div className="for2">
                  {/* <div className="young">
                  <h3>Взрослый</h3>
                  <button> из файла</button>
                </div> */}
                  <div className="threeInp">
                    <label htmlFor="">
                      Фамилия
                      <input
                        required
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </label>
                    <label htmlFor="">
                      Имя
                      <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        required
                      />
                    </label>
                    <label htmlFor="">
                      имя твоего отца
                      <input
                        onChange={(e) => setMiddleName(e.target.value)}
                        type="text"
                        required
                      />
                    </label>
                  </div>
                  <div className="fourInp">
                    <label htmlFor="">
                      Пол
                      <FormControl sx={{ m: 1 }} size="small" required>
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
                            borderRadius: "1rem",
                            padding: "0px !important",
                            height: "100%",
                            marginTop: "2px",
                            ".css-jedpe8-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input":
                              {
                                border: "none !important",
                                padding: "6px 15px !important",
                              },
                            ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                              borderColor: "#3392ff",
                              marginTop: "1px",
                            },
                          }}
                        >
                          <MenuItem value={"M"}>мужской</MenuItem>
                          <MenuItem value={"F"}>Женский</MenuItem>
                        </Select>
                      </FormControl>
                    </label>
                    <label htmlFor="" style={{ marginRight: "10px" }}>
                      Дата рождения
                      <DatePicker
                        required
                        style={{ width: "100%" }}
                        value={birthdatePic}
                        onChange={setBirthdatePic}
                        format="DD/MM/YYYY"
                      />
                    </label>
                    <label htmlFor="">
                      Серия и № паспорта
                      <input
                        onChange={(e) => setPassportNum(e.target.value)}
                        type="text"
                        required
                      />
                    </label>
                    <label htmlFor="">
                      Срок действия
                   
                      <DatePicker
                        required
                        style={{ width: "100%" }}
                        value={passportExp}
                        onChange={setPassportExp}
                        format="DD/MM/YYYY"
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div className="weight">
                <h2> Ваш перелёт включает 1 PC кг багажа и 1 PC кг Обратно</h2>
              </div>

              <div className="bron">
                <p className="time">20.09.2023 21:15 по Ташкентскому времени</p>
                <p className="money">
                  Итого:{" "}
                  <span>
                    {" "}
                    {currency(ticketPrice, "UZS")
                      .replace("UZS", "")
                      .replace("soʻm", "")
                      .replace(/,/g, ".")
                      .slice(0, -3)}{" "}
                    UZS{" "}
                  </span>
                </p>
                <button
                  // onClick={() => bookingCreateFnc()}
                  type="submit"
                >
                  Забронировать
                </button>
              </div>

            </form>

              <div className="bron" style={{justifyContent: 'end'}}>
               
                <button
                  onClick={(e) => {bookingCreateFnc(e); setPaymentType("MTS")}}
                  type="submit"
                >
                  оплатить российской картой
                </button>
              </div>
          </Grid>
        </Grid>
      </Container>
      <ToastContainer/>

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


      <Modal
        open={confirmModal}
        onClose={() => setConfirmModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            sx={{ textAlign: "center", fontSize: "28px" }}
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            Tasdiqlash
          </Typography>
          <CloseIcon
            sx={{
              fontSize: "30px",
              position: "absolute",
              top: "15px",
              right: "20px",
              cursor: "pointer",
              borderRadius: "50%",
              border: "1px solid black",
              padding: "3px",
            }}
            onClick={() => setConfirmModal(false)}
          />
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2, textAlign: "center", fontSize: "18px" }}
          >
            <div className="confirmModalContainer">
              <div style={{ width: "50%", marginRight: "40px" }}>
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
                    res.length > 20 ? e.preventDefault() : setCardNum(res);
                  }}
                />

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
                      .replace(/^([0-1]{1}[0-9]{1})([0-9]{1,2}).*/g, "$1/$2");
                    setCardExp(res);
                  }}
                />
              </div>

              <div style={{ width: "50%" }}>
                <div
                  style={{ width: "100%", marginBottom: "30px" }}
                  className="otpContainer"
                >
                  <OTPInput
                    value={OTP}
                    onChange={setOTP}
                    OTPLength={5}
                    otpType="number"
                    disabled={false}
                    type="number"
                  />
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <p>Tasdiqlash kodi yuborildi.</p> <p>{timer} s</p>
                </div>
              </div>
            </div>

            <div style={{ padding: "0 20px" }}>
              <Button
                className="btn"
                style={{
                  background: "#605dec",
                  color: "#fff",
                  borderRadius: "10px",
                  marginTop: "20px",
                  padding: "10px 0",
                }}
                onClick={() =>
                  bookingConfirmSuc ? paymentConfirmFnc() : confirmBooking()
                }
              >
                Tasdiqlash
              </Button>
            </div>
          </Typography>
        </Box>
      </Modal>

      {loader && <Loader />}
    </>
  );
}

export default ShopTicket;
