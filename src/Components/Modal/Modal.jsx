import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Contexts } from "../../contexts/Contexts";
import GoogleIcon from "@mui/icons-material/Google";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";

import GoogleLogoIcon from "../../assets/images/googleLogo.png";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { incremented } from "../../Slice/LoginSlice";

import "./Modal.css";
import { Link } from "react-router-dom";
import { icons } from "../../constants/icons";
import { gapi } from 'gapi-script';

import { useRegisterApiMutation } from "../../RTKQueryApi/LoginApi";
import { GoogleLogin } from "@react-oauth/google";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  //   height: 400,
  bgcolor: "background.paper",
  //   border: "1px solid #000",
  boxShadow: 24,
  borderRadius: "25px",
  p: 4,
};

export default function BasicModal(props) {
  const handleClose = () => setOpen(false);

  const { open, setOpen } = React.useContext(Contexts);

  const [registerApi, {data, isSuccess}] = useRegisterApiMutation()

  const loggedInn = useSelector((state) => state.value)
  const dispatch = useDispatch()
  
  const clientId = "428493911231-e8ipsql0crd7loti8t96cun9u397valg.apps.googleusercontent.com";

  window.gapi.load("auth2", () => {
    const auth2 = window.gapi.auth2.init({ clientId });
    auth2.signIn().then((res) => {register(res); console.log(res.wt.cu)});
  });

  const register = async(data) => {
    const registerData = {
      "email": data.wt.cu,
      "token": data.xc.id_token,
      "type": "web" 
    }
    await registerApi(registerData)    
  }

  React.useEffect(() => {
    if(isSuccess) {
      localStorage.setItem('access', data.jwt_token.access)
      localStorage.setItem('refresh', data.jwt_token.refresh)
      window.location.reload()
    }
  }, [data])


  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
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
            {props.title}
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
            {props.desc}
          </Typography>

          <br /><br />

          <GoogleOAuthProvider clientId={clientId}>
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                console.log(credentialResponse);
              }}
              onError={() => {
                console.log("Login Failed");
              }}
              useOneTap
            />
          </GoogleOAuthProvider>

          {/* <button className="signGoogle">{icons.google}</button> */}
        </Box>
      </Modal>
    </div>
  );
}
