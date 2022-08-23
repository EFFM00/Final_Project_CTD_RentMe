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


function App() {
  const [showBtnRegister, setShowBtnRegister] = useState(true);
  const [showBtnSignIn, setShowBtnSignIn] = useState(true);
  const [ user, setUser ] = useState(null);

  const handleRegistration = (values) => {
    setUser({ email: values.email, passwordr: values.passwordr })
  };
  const signInProps = {
    user,
    setUser
  };

  return (
    <BrowserRouter>
      <GlobalStyle />
      <ThemeProvider theme={Colors}>
        <Header
          showBtnRegister={showBtnRegister}
          setShowBtnRegister={setShowBtnRegister}
          showBtnSignIn={showBtnSignIn}
          setShowBtnSignIn={setShowBtnSignIn}
          user={user}
          setUser={setUser}
        />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/sign-up" element={<SignUp showValues={handleRegistration}/>}/>
          <Route path="/sign-in" element={<SignIn {...signInProps}/>}/>
          <Route path="/producto" element={<DetallesProducto/>} />
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
