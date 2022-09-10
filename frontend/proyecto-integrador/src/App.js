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
import ProtectedRoutes from "./components/protectedRoutes/ProtectedRoutes";
import DetallesProducto from "./components/DetallesProducto";
import ReservaExitosa from "./components/ReservaExitosa";
import Reserva from "./pages/home/Reserva";


function App() {
  const [ user, setUser ] = useState(null);

  return (
    <UserProvider>
    <BrowserRouter>
      <GlobalStyle />
      <ThemeProvider theme={Colors}>
        <Header user={user} setUser={setUser}/>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/sign-up" element={<SignUp/>}/>
          <Route path="/sign-in" element={<SignIn user={user} setUser={setUser}/>}/>
          <Route path="/products/:id" element={<DetallesProducto/>} />
          <Route path="/products/:id/reserva" element={<Reserva/>} />
          <Route path="/reserva-exitosa" element={<ReservaExitosa/>} />
          <Route element={<ProtectedRoutes isLogged={user!=null}/>}>
            <Route path="/" element={<Home/>}/>
          </Route>
        </Routes>
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
    </UserProvider>
  );
}

export default App;
