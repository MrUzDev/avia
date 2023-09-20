import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Contexts } from "../../contexts/Contexts";
import { Button, ButtonGroup } from "@mui/material";
import "./ClassType.css";

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

  const people = ["Kattalar", "Bolalar", "Chaqaloq"];

  const age = ["12 yoshdan katta", "2dan 12 yoshgacha", "2yoshgacha"];

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
                >
                  -
                </Button>
                <span
                  style={{
                    marginLeft: "15px",
                    marginRight: "15px",
                  }}
                >
                  0
                </span>
                <Button>+</Button>
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
                <Button>-</Button>
                <span
                  style={{
                    marginLeft: "15px",
                    marginRight: "15px",
                  }}
                >
                  0
                </span>
                <Button>+</Button>
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
                <Button>-</Button>
                <span
                  style={{
                    marginLeft: "15px",
                    marginRight: "15px",
                  }}
                >
                  0
                </span>
                <Button>+</Button>
              </ButtonGroup>
            </div>
          </div>

          <div className="regime">
            <div className="box">
              <input type="radio" id="anyType" name="regime" />
              <label htmlFor="anyType">Istalgan</label>
            </div>
            <div className="box">
              <input type="radio" id="ekon" name="regime" />
              <label htmlFor="ekon">Ekonom</label>
            </div>
            <div className="box">
              <input type="radio" id="biz" name="regime" />
              <label htmlFor="biz">Biznes</label>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
