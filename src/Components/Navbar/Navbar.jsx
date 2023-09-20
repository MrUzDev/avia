import React, { useContext, useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import Select from "react-select";
import { Contexts } from "../../contexts/Contexts";
import { useDispatch, useSelector } from "react-redux";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Navbar() {
  const options = [
    { value: "chocolate", label: "UZ" },
    { value: "strawberry", label: "EN" },
    { value: "vanilla", label: "RU " },
  ];

  const navigate = useNavigate();

  const loggedIn = useSelector((state) => state.loginSlice.loggedIn);
  const dispatch = useDispatch();

  const { setOpen } = useContext(Contexts);

  const [logOut, setLogOut] = useState(false);

  const handleLogOutClick = () => {
    setLogOut(true);
  };

  useEffect(() => {
    console.log(loggedIn);
  }, [loggedIn]);
  return (
    <nav>
      <Container>
        <Grid
          container
          spacing={2}
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Grid item xs={2}>
            <div className="logo">
              <Link onClick={() => navigate("/")}>
                fly<span>sales</span>
              </Link>
            </div>
          </Grid>

          <Grid sx={{ display: "flex" }} item xs={8} sm={5} md={4} lg={4}>
            <Select options={options} defaultValue={options[0]} />
            {!loggedIn ? (
              <button onClick={() => setOpen(true)}>Kirish</button>
            ) : (
              <div style={{ alignSelf: "center" }} className="userLogin">
                <AccountCircleIcon
                  onClick={handleLogOutClick}
                  sx={{
                    fontSize: "30px",
                    color: "white",
                    alignSelf: "center",
                    cursor: "pointer",
                  }}
                />

                {logOut && (
                  <div className="userInformation">
                    <Link>Profildan chiqish</Link>
                  </div>
                )}
              </div>
            )}
          </Grid>
        </Grid>
      </Container>
    </nav>
  );
}

export default Navbar;
