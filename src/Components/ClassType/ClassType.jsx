import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Contexts } from "../../contexts/Contexts";
import { Button, ButtonGroup } from "@mui/material";
import "./ClassType.css";
import { useDispatch, useSelector } from "react-redux";
import { setTicketAdult, setTicketChild, setTicketBabies, setTicketTarif } from "../../Slice/AllSlice";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "25px",
  boxShadow: 24,
  p: 4,
};

export default function TypeModal() {
  const handleClose = () => setShow(false);
  const { show, setShow } = React.useContext(Contexts);

  const ticketAdults = useSelector((state) => state.loginSlice.ticketAdults);
  const ticketChild = useSelector((state) => state.loginSlice.ticketChild);
  const ticketBabies = useSelector((state) => state.loginSlice.ticketBabies);
  const ticketTarif = useSelector((state) => state.loginSlice.ticketTarif);

  const dispatch = useDispatch()

  return (
    <div>
      <Modal
        open={show}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        // sx={{ position: "relative" }}
      >
        <Box sx={style}>
          <div className="classTypeAll">
            <div className="classType">
              <div className="text">
                <p>Kattalar</p>
                <span>12 yoshdan katta</span>
              </div>

              <ButtonGroup
                variant="contained"
                aria-label="outlined primary button group"
                sx={{
                  alignItems: "center",
                  background: "none",
                  border: "none",
                  boxShadow: "none",
                }}
              >
                <Button
                  sx={{
                    border: "none",
                  }}
                  onClick={() => ticketAdults > 0 && dispatch(setTicketAdult(ticketAdults - 1))}
                >
                  -
                </Button>
                <span
                  style={{
                    marginLeft: "15px",
                    marginRight: "15px",
                  }}
                >
                  {ticketAdults}
                </span>
                <Button onClick={() => dispatch(setTicketAdult(ticketAdults + 1))} >+</Button>
              </ButtonGroup>
            </div>

            <div className="classType">
              <div className="text">
                <p>Bolalar</p>

                <span>2 yoshdan 12 yoshgacha</span>
              </div>

              <ButtonGroup
                variant="contained"
                aria-label="outlined primary button group"
                sx={{
                  alignItems: "center",
                  boxShadow: "none",
                }}
              >
                <Button onClick={() => ticketChild > 0 && dispatch(setTicketChild(ticketChild - 1))}>-</Button>
                <span
                  style={{
                    marginLeft: "15px",
                    marginRight: "15px",
                  }}
                >
                  {ticketChild}
                </span>
                <Button onClick={() => dispatch(setTicketChild(ticketChild + 1))}>+</Button>
              </ButtonGroup>
            </div>

            <div className="classType">
              <div className="text">
                <p>Chaqaloq</p>

                <span>2 yoshgacha</span>
              </div>

              <ButtonGroup
                variant="contained"
                aria-label="outlined primary button group"
                sx={{
                  alignItems: "center",
                  boxShadow: "none",
                }}
              >
                <Button onClick={() => ticketBabies > 0 && dispatch(setTicketBabies(ticketBabies - 1))}>-</Button>
                <span
                  style={{
                    marginLeft: "15px",
                    marginRight: "15px",
                  }}
                >
                  {ticketBabies}
                </span>
                <Button onClick={() => dispatch(setTicketBabies(ticketBabies + 1))}>+</Button>
              </ButtonGroup>
            </div>
          </div>

          <div className="regime">
            <div className="box">
              <input defaultChecked type="radio" id="anyType" checked={ticketTarif && ticketTarif === 'a'} name="regime" value="Istalgan" onChange={e => {console.log(e.target.value); dispatch(setTicketTarif('a'))}}/>
              <label htmlFor="anyType">Istalgan</label>
            </div>
            <div className="box">
              <input type="radio" id="ekon" name="regime" checked={ticketTarif && ticketTarif === 'e'} onChange={e => dispatch(setTicketTarif('e'))}/>
              <label htmlFor="ekon">Ekonom</label>
            </div>
            <div className="box">
              <input type="radio" id="biz" name="regime" checked={ticketTarif && ticketTarif === 'b'} onChange={e => dispatch(setTicketTarif('b'))}/>
              <label htmlFor="biz">Biznes</label>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
