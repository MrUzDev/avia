import React, { useState } from "react";
import Text from "./components/Text/Text";
import { Contexts } from "./contexts/Contexts";
import BasicModal from "./components/Modal/Modal";
import Ticket from "./components/Tickets/Ticket";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main"
import ShopTicket from "./components/ShopTicket/ShopTicket";
function App() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = React.useState(false);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100vh",
      }}
    >
      <Contexts.Provider value={{ open, setOpen, show, setShow }}>
        <Navbar />
        {open && (
          <BasicModal
            title={"Tizimga kirish"}
            desc={"Shaxsiy kabinetinggizga google orqali kiring!"}
          />
        )}
        <div>
          <Text />
          <Main />
        </div>

        <Ticket />
        <ShopTicket />
      </Contexts.Provider>

      <Footer />
    </div>
  );
}

export default App;
