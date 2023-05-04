import MainRouter from "./Routes";
import { GlobalStyles } from "./styles/global";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer />
      <GlobalStyles />
      <MainRouter />
    </>
  );
}

export default App;
