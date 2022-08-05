import Body from "./components/Body";
import Header from "./components/Header";
import { GlobalStyle } from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { Colors } from "./styles/Theme";


function App() {
  return (
    <>
      <GlobalStyle/>
      <ThemeProvider theme={Colors}>
        <Header/>
        <Body/>
      </ThemeProvider>
    </>
  );
}

export default App;
