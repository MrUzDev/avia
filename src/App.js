import React, { useState } from "react";
import Main from "./Components/Modal/Modal";
import { Contexts } from "./contexts/Contexts";

import { Routes, Route } from "react-router-dom";
import { Modal } from "@mui/material";
import './Grid/Grid.css'
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./pages/Home/Home";
import ShopTicket from "./Components/ShopTicket/ShopTicket";
import BasicModal from "./Components/Modal/Modal";

function App() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = React.useState(false);

  return (
    <>
      <Contexts.Provider value={{ open, setOpen, show, setShow }}>
        <Navbar />

          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/order/:id' element={<ShopTicket/>}/>
          </Routes>

          <BasicModal/>
      </Contexts.Provider>

      <Footer />
    </>
  );
}

export default App;
