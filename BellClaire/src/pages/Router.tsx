import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import Home from "./Home/Home";
import Made from "./Made/Made";
import New from "./New/New";
import Today from "./Today/Today";
import Best from "./Best/Best";
import Ootd from "./OOTD/Ootd";
import Tshirt from "./Top/Tshirt/Tshirt";
import Blouse from "./Top/Blouse/Blouse";
import Acc from "./Acc/Acc";
import Dress from "./Dress/Dress";
import Top from "./Top/Top";
import Shoes from "./Shoes/Shoes";
import Pants from "./Bottom/Pants/Pants";
import Bottom from "./Bottom/Bottom";
import Long from "./Bottom/Skirt/Long";
import Mini from "./Bottom/Skirt/Mini";
import Skirt from "./Bottom/Skirt/Skirt";
import Jumper from "./Outer/Jumper/Jumper";
import Jacket from "./Outer/Jacket/Jacket";
import Cardigan from "./Outer/Cardigan/Cardigan";
import Outer from "./Outer/Outer";
import All from "./All";

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
                <Route path="/ootd" element={<Ootd />} />
                <Route path="/tshirt" element={<Tshirt />} />
                <Route path="/blouse" element={<Blouse />} />
                <Route path="/acc" element={<Acc />} />
                <Route path="/dress" element={<Dress />} />
                <Route path="/top" element={<Top />} />
                <Route path="/shoes" element={<Shoes />} />
                <Route path="/pants" element={<Pants />} />
                <Route path="/bottom" element={<Bottom />} />
                <Route path="/long" element={<Long />} />
                <Route path="/mini" element={<Mini />} />
                <Route path="/skirt" element={<Skirt />} />
                <Route path="/jacket" element={<Jacket/>} />
                <Route path="/jumper" element={<Jumper/>} />
                <Route path="/cardigan" element={<Cardigan/>} />
                <Route path="/outer" element={<Outer/>} />
                <Route path="/all" element={<All/>} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
