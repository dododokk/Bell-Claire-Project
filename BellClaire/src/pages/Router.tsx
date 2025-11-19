import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import Home from "./Home/Home";
import Made from "./Made/Made";
import New from "./New/New";

const Router = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/made" element={<Made />} />
        <Route path="/new" element={<New />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
