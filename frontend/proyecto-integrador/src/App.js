import Body from "./components/Body";
import Header from "./components/Header";
import { GlobalStyle } from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { Colors } from "./styles/Theme";
import DesingSystem from "./components/DesingSystem";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/molecules/Footer";
import Home from "./pages/home/Home";
import SingnUp from "./pages/login/SingnUp";
import About from "./pages/about/About";


function App() {
  return (
    <BrowserRouter>
    <GlobalStyle/>
    <ThemeProvider theme={Colors}>
      <Header/>
        {/* <SingnUp/> */}
        {/* <Home/> */}
        {/* <DesingSystem/> */}
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/sign-up" element={<SingnUp/>}/>
        </Routes>
      <Footer/>
    </ThemeProvider>
    </BrowserRouter>


    // <>
    //   <GlobalStyle/>
    //   <ThemeProvider theme={Colors}>
    //     <Header/>
    //     {/* <Body/> */}
    //     <DesingSystem />
    //     <Footer/>
    //   </ThemeProvider>
    // </>
  );
}

export default App;


