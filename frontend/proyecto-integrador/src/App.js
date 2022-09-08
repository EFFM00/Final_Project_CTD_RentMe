import Header from "./components/Header";
import { GlobalStyle } from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { Colors } from "./styles/Theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/molecules/Footer";
import Home from "./pages/home/Home";
import SignUp from "./pages/login/SignUp";
import SignIn from "./pages/login/SignIn";
import { useState } from "react";
import ProtectedRoutes from "./components/protectedRoutes/ProtectedRoutes";
import DetallesProducto from "./components/DetallesProducto";
import ReservaExitosa from "./components/ReservaExitosa";


function App() {
  const [showBtnRegister, setShowBtnRegister] = useState(true);
  const [showBtnSignIn, setShowBtnSignIn] = useState(true);
 
  

  return (
    <BrowserRouter>
      <GlobalStyle />
      <ThemeProvider theme={Colors}>
        <Header
          showBtnRegister={showBtnRegister}
          setShowBtnRegister={setShowBtnRegister}
          showBtnSignIn={showBtnSignIn}
          setShowBtnSignIn={setShowBtnSignIn}
        />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/sign-up" element={<SignUp/>}/>
          <Route path="/sign-in" element={<SignIn/>}/>
          <Route path="/products/:id" element={<DetallesProducto/>} />
          <Route path="/reserva-exitosa" element={<ReservaExitosa/>} />
          <Route element={<ProtectedRoutes isLogged={user!=null}/>}>
            <Route path="/" element={<Home/>}/>
          </Route>
        </Routes>
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
