import Cards from "./components/cards";
import Gaming from "./components/gaming-home";
import HeaderSide from "./components/header";
import Images from "./components/images";
import Main from "./components/main";
import NavBar from "./components/navbar";
import Reclam from "./components/reclam";

function App() {
  return <>
    <HeaderSide />
    <NavBar/>
    <Images/>
    <Cards/>
    <Reclam/>
    <Gaming/>
    <Main/>
  </>;
}
export default App
