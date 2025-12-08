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
import OPS from "./Detail/OPS";
import Gossip from "./Detail/Gossip";
import Organza from "./Detail/Organza";
import Set from "./Detail/Set";
import Satin from "./Detail/Satin";
import Socks from "./Detail/Socks";
import Balletsk from "./Detail/Balletsk";
import Bag from "./Detail/Bag";
import Balletjk from "./Detail/Balletjk";
import Summer from "./Detail/Summer";
import Poin from "./Detail/Poin";
import Jp from "./Detail/Jp";
import Sl from "./Detail/Sl";
import Heel from "./Detail/Heel";
import Cody from "./Detail/Cody";

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
                <Route path="/jacket" element={<Jacket />} />
                <Route path="/jumper" element={<Jumper />} />
                <Route path="/cardigan" element={<Cardigan />} />
                <Route path="/outer" element={<Outer />} />
                <Route path="/all" element={<All />} />
                <Route path="/ops" element={<OPS />} />
                <Route path="/gossip" element={<Gossip />} />
                <Route path="/organza" element={<Organza />} />
                <Route path="/set" element={<Set />} />
                <Route path="/satin" element={<Satin />} />
                <Route path="/socks" element={<Socks />} />
                <Route path="/balletsk" element={<Balletsk />} />
                <Route path="/bag" element={<Bag />} />
                <Route path="/balletjk" element={<Balletjk />} />
                <Route path="/summer" element={<Summer />} />
                <Route path="/poin" element={<Poin />} />
                <Route path="/jp" element={<Jp />} />
                <Route path="/sl" element={<Sl />} />
                <Route path="/heel" element={<Heel />} />
                <Route path="/cody" element={<Cody />} />

            </Routes>
        </BrowserRouter>
    );
};

export default Router;
