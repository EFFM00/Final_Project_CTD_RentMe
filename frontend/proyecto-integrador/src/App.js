import Header from "./components/Header";
import { GlobalStyle } from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { Colors } from "./styles/Theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "./services/UserContext"
import Footer from "./components/molecules/Footer";
import Home from "./pages/home/Home";
import SignUp from "./pages/login/SignUp";
import SignIn from "./pages/login/SignIn";
import { useState } from "react";
import DetallesProducto from "./components/DetallesProducto";
import ReservaExitosa from "./components/ReservaExitosa";
import Reserva from "./pages/home/Reserva";


function App() {
  return (
    <UserProvider>
    <BrowserRouter>
      <GlobalStyle />
      <ThemeProvider theme={Colors}>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/sign-up" element={<SignUp/>}/>
          <Route path="/sign-in" element={<SignIn/>}/>
          <Route path="/products/:id" element={<DetallesProducto/>} />
          <Route path="/products/:id/reserva" element={<Reserva/>} />
          <Route path="/reserva-exitosa" element={<ReservaExitosa/>} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
    </UserProvider>
  );
}

export default App;
