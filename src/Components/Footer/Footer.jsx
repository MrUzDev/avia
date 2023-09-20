import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import PlayMarket from "../../assets/images/googlePlayBtn.png";
import AppStore from "../../assets/images/AppStoreBtn.png";
import { Link } from "react-router-dom";
import Pays from "../../assets/images/payLogos.svg";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./Footer.css";

function Footer() {
  const footerMenu = ["Biz haqimizda", "Foydalanish shartlari", "FAQ"];

  const contactMedia = [
    <FacebookIcon />,
    <InstagramIcon />,
    <TelegramIcon />,
    <YouTubeIcon />,
  ];
  return (
    <footer>
      <Container maxWidth={"lg"}>
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-tart",
          }}
        >
          <Grid item lg={2}>
            <div className="downloads">
              <Link>
                <img src={PlayMarket} alt="" />
              </Link>
              <Link>
                <img src={AppStore} alt="" />
              </Link>
            </div>
          </Grid>

          <Grid item lg={2}>
            <ul className="info">
              {footerMenu.map((element) => {
                return (
                  <li>
                    <Link>{element}</Link>
                  </li>
                );
              })}
            </ul>
          </Grid>

          <Grid
            sx={{
              textAlign: "center",
            }}
            item
            lg={2}
          >
            <ul className="contactInfo">
              {contactMedia.map((element, value) => {
                return (
                  <li>
                    <Link>{element}</Link>
                  </li>
                );
              })}
            </ul>

            <div
              className="phoneNumber"
              style={{
                textAlign: "center",
              }}
            >
              <Link>
                <LocalPhoneIcon />
                +998711002021
              </Link>
            </div>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}

export default Footer;
