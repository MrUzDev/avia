import { Container } from "@mui/material";
import React, { useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import "./Text.css";

function Text() {
  useEffect(() => {
    const typerText = document.querySelector(".typer");

    console.log(typerText);
  }, []);

  return (
    <div className="text">
      <Container>
        <h1>
          <span className="fly">fly</span>sales bilan uchish yanada
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              `tezroq!`,
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              "arzonroq!",
              1000,
              "qulayroq!",
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ display: "inline-block" }}
            repeat={Infinity}
            className="typer"
          />
        </h1>
      </Container>
    </div>
  );
}

export default Text;
