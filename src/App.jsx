import "./App.css";
import Navbar from "./component/Navbar";
import FirstPage from "./component/FirstPage"; // <-- Bunu eklemelisin
import SecondPage from "./component/SecondPage";
import ThirdPage from "./component/ThirdPage";
import FourthPage from "./component/FourthPage";
import FifthPage from "./component/FifthPage";
import SixthPage from "./component/SixthPage";
import SeventhPage from "./component/SeventhPage";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <Navbar />
      <FirstPage />
      <SecondPage />
      <ThirdPage />
      <FourthPage />
      <FifthPage />
      <SixthPage />
      <SeventhPage />
      <Footer />
    </>
  );
}

export default App;

{
  /*<FirstPage />
      <SecondPage />
      <ThirdPage />
      <FourthPage />
      <FifthPage />
      <SixthPage />
      <SeventhPage />
      <Footer />
    */
}
