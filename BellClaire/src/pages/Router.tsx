import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import Home from "./Home/Home";
import Made from "./Made/Made";
import New from "./New/New";
import Today from "./Today/Today";
import Best from "./Best/Best";
import Ootd from "./OOTD/Ootd";
import Tshirt from "./Tshirt/Tshirt";
import Blouse from "./Blouse/Blouse";
import Acc from "./Acc/Acc";
import Dress from "./Dress/Dress";

const Router = () => {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/made" element={<Made />} />
                <Route path="/new" element={<New />} />
                <Route path="/today" element={<Today />} />
                <Route path="/best" element={<Best />} />
                <Route path="/ootd" element={<Ootd/>} />
                <Route path="/tshirt" element={<Tshirt/>} />
                <Route path="/blouse" element={<Blouse/>} />
                <Route path="/acc" element={<Acc/>} />
                <Route path="/dress" element={<Dress/>} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
