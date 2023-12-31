import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Contexts } from "../../contexts/Contexts";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
import OTPInput from "otp-input-react";
import "./Modal.css";
import { MuiTelInput } from "mui-tel-input";
import {
  useRegisterOneMutation,
  useRegisterTwoMutation,
  useRegisterPhoneMutation,
  useLoginPhoneMutation,
} from "../../RTKQueryApi/AllApi";
import { ToastContainer, toast } from "react-toastify";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "25px",
  padding: "20px ",
  overflow: "hidden",
};

const style2 = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "25px",
  padding: "20px ",
  overflow: "hidden",
};

export default function BasicModal(props) {
  const { open, setOpen, loginModal, setLoginModal } = React.useContext(Contexts);
  const [phoneNum, setPhoneNum] = useState("+998");
  const [timer, setTimer] = useState(90);
  const [OTP, setOTP] = useState();
  const [otpToken, setOtpToken] = useState();
  const [registerModal, setRegisterModal] = useState(false);
  const [sendSms, setSendSms] = useState(false);
  const [password, setPassword] = useState();
  const [verifyPassword, setVerifyPassword] = useState();

  const [registerOne, { data: registerOneData, isSuccess: registerOneSuc }] =
    useRegisterOneMutation();

  const [registerTwo, { data: registerTwoData, isSuccess: registerTwoSuc }] =
    useRegisterTwoMutation();
  const [
    registerPhone,
    { data: registerPhoneData, isSuccess: registerPhoneSuc },
  ] = useRegisterPhoneMutation();

  const [loginPhone, { data: loginPhoneData, isSuccess: loginPhoneSuc }] =
    useLoginPhoneMutation();

  const passwordVerifyErr = () => toast.error("parollar bir biriga mos emas!");
  const alredyRegister = () =>
    toast.error("Siz allaqachon ro'yhatdan o'tgansiz!");

  const RegisterOneFnc = () => {
    const registerOneBody = {
      phone: phoneNum.replace(/ /g, "").replace("+", ""),
      is_forgot: false,
      otp_token: "",
      otp: "",
    };

    registerOne(registerOneBody);
  };

  const RegisterTwoFnc = () => {
    const registerOneBody = {
      phone: phoneNum.replace(/ /g, "").replace("+", ""),
      is_forgot: false,
      otp_token: otpToken,
      otp: OTP,
    };

    registerTwo(registerOneBody);
  };

  const changeTimer = () => {
    setTimer((timerr) => (timerr > 0 ? timerr - 1 : timerr));
    setSendSms(true)
  };

  const registerFnc = () => {
    if (password == verifyPassword) {
      const registerPhoneBody = {
        phone_number: phoneNum.replace(/ /g, "").replace("+", ""),
        password: password,
        password2: verifyPassword,
      };

      registerPhone(registerPhoneBody);
    } else {
      passwordVerifyErr();
    }
  };

  const loginFnc = () => {
    const loginBody = {
      phone: phoneNum.replace(/ /g, "").replace("+", ""),
      password: password,
    };

    loginPhone(loginBody)
  };

  useEffect(() => {
    if (registerOneData && registerOneSuc) {
      console.log(registerOneData);

      if (registerOneData.message == "This user is registered") {
        alredyRegister();
      } else {
        setOtpToken(registerOneData.otp_token);

        const confirmModalContainer = document.querySelector(
          ".confirmModalContainer"
        );
        confirmModalContainer && confirmModalContainer.classList.add("active");

        setInterval(() => {
          changeTimer();
        }, 1000);
      }
    }
    if ((registerTwoData, registerTwoSuc)) {
      setOpen(false)
      setRegisterModal(true);
    }
    if (registerPhoneData || loginPhoneData) {

      console.log(loginPhoneData);

      localStorage.setItem("access", registerPhoneData ? registerPhoneData.jwt_token.access : loginPhoneData.jwt_token.access);
      localStorage.setItem("refresh", registerPhoneData ? registerPhoneData.jwt_token.refresh : loginPhoneData.jwt_token.refresh);

      window.location.reload();
    }
  }, [registerOneData, registerTwoData, registerPhoneData, loginPhoneData]);

  return (
    <div>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
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
            Регистрация
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
            onClick={() => setOpen(false)}
          />
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2, textAlign: "center", fontSize: "18px" }}
          >
            <div className=" flex-col">
              <div style={{ width: "100%", marginRight: "40px", marginBottom: "15px" }}>
                <MuiTelInput
                  sx={{ width: "100%", }}
                  value={phoneNum}
                  onChange={(e) => {
                    setPhoneNum(e);
                  }}
                  InputProps={{
                    style: {
                      borderRadius: "10px",
                    },
                  }}
                />
              </div>
              <div
                style={{ width: "100%", marginBottom: "30px", border: "1px solid #CCCCCC", display: "flex", alignItems: "center", justifyContent: "center", padding: "10px", borderRadius: "10px" }}
                className="otpContainer"
              >

                <OTPInput
                  value={OTP}
                  onChange={setOTP}
                  OTPLength={5}
                  otpType="number"
                  disabled={!sendSms}
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
                <p>код устаревает.</p> <p>{timer} s</p>
              </div>
            </div>


            <div style={{ padding: "0 20px" }}>
              <Button
                className="btn"
                style={{
                  background: "#0057BE",
                  color: "#fff",
                  borderRadius: "10px",
                  marginTop: "20px",
                  padding: "10px 0",
                }}
                onClick={() =>
                  registerOneSuc ? RegisterTwoFnc() : RegisterOneFnc()
                }
              >
                Подтвердить номер
              </Button>
            </div>
            <p
              style={{ marginTop: "10px", textDecoration: "underline" }}
              onClick={() => {
                setOpen(false);
                setLoginModal(true);
              }}
            >
              Уже есть аккаунт
            </p>
          </Typography>
        </Box>
      </Modal>

      <Modal
        open={registerModal}
        onClose={() => setRegisterModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style2}>
          <Typography
            sx={{ textAlign: "center", fontSize: "28px" }}
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            Регистрация
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
            onClick={() => setRegisterModal(false)}
          />
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2, textAlign: "center", fontSize: "18px" }}
          >

            <div style={{ width: "100%", padding: "0 20px", display: "flex" }}>
              <TextField
                fullWidth
                type="text"
                value={password}
                label="Parol"
                id="fullWidth"
                sx={{ marginRight: "10px" }}
                InputProps={{
                  style: {
                    borderRadius: "10px",
                    marginBottom: "20px",
                  },
                }}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />

              <TextField
                fullWidth
                type="text"
                value={verifyPassword}
                label="Parolni tasdiqlash"
                id="fullWidth"
                InputProps={{
                  style: {
                    borderRadius: "10px",
                    marginBottom: "20px",
                  },
                }}
                onChange={(e) => {
                  setVerifyPassword(e.target.value);
                }}
              />
            </div>

            <div style={{ padding: "0 20px" }}>
              <Button
                className="btn"
                style={{
                  background: "#0057BE",
                  color: "#fff",
                  borderRadius: "10px",
                  marginTop: "20px",
                  padding: "10px 0",
                }}
                onClick={() => registerFnc()}
              >
                Зарегестрироваться
              </Button>
            </div>
          </Typography>
        </Box>
      </Modal>

      <Modal
        open={loginModal}
        onClose={() => setLoginModal(false)}
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
            Войти
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
            onClick={() => setLoginModal(false)}
          />
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2, textAlign: "center", fontSize: "18px" }}
          >
            <div style={{ width: "100%", }}>
              <MuiTelInput
                sx={{ width: "100%", marginRight: "10px", marginBottom: "20px" }}
                value={phoneNum}
                onChange={(e) => {
                  setPhoneNum(e);
                }}
                InputProps={{
                  style: {
                    borderRadius: "10px",
                  },
                }}
              />

              <TextField
                fullWidth
                type="text"
                value={password}
                label="Parolingiz"
                id="fullWidth"
                InputProps={{
                  style: {
                    borderRadius: "10px",
                  },
                }}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>

            <div style={{ padding: "0 20px", marginTop: "20px" }}>
              <Button
                className="btn"
                style={{
                  background: "#0057BE",
                  color: "#fff",
                  borderRadius: "10px",
                  marginTop: "20px",
                  padding: "10px 0",
                }}
                onClick={() => loginFnc()}
              >
                Войти
              </Button>
              <p
                style={{ marginTop: "10px", textDecoration: "underline" }}
                onClick={() => {
                  setOpen(true);
                  setLoginModal(false);
                }}>Регистрация</p>
            </div>
          </Typography>
        </Box>
      </Modal>

      <ToastContainer />
    </div>
  );
}
