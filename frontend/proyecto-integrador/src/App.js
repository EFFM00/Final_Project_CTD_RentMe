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


function App() {
  const [showBtnRegister, setShowBtnRegister] = useState(true);
  const [showBtnSignIn, setShowBtnSignIn] = useState(true);
  const [isLogged, setIsLogged] = useState(false);

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
          <Route path="/sign-up" element={<SignUp/>} setIsLogged={setIsLogged}/>
          <Route path="/sign-in" element={<SignIn/>} setIsLogged={setIsLogged}/>
        </Routes>
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
