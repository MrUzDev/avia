import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import { Contexts } from "./contexts/Contexts";
import BasicModal from "./components/Modal/Modal";
import ShopTicket from "./components/ShopTicket/ShopTicket";
import { Routes, Route } from "react-router-dom";
import { Modal } from "@mui/material";
import Home from "./pages/Home/Home";
import './Grid/Grid.css'

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
