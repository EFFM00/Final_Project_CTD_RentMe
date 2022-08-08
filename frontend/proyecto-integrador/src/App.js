import Body from "./components/Body";
import Header from "./components/Header";
import { GlobalStyle } from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { Colors } from "./styles/Theme";
import DesingSystem from "./components/DesingSystem";


function App() {
  return (
    <>
      <GlobalStyle/>
      <ThemeProvider theme={Colors}>
        <Header/>
        <Body/>
        {/* <DesingSystem /> */}
      </ThemeProvider>
    </>
  );
}

export default App;
