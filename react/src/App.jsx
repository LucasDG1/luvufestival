import { BrowserRouter, Routes, Route } from "react-router"
import Home from "@/pages/Home";
import Navbar from "@/components/Navbar";
import Info from "@/pages/info";
import Musicians from "@/pages/musicians";
import Agenda from "@/pages/agenda";
import Map from '@/pages/Map'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />  
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/info" element={<Info />}/>
          <Route path="/musicians" element={<Musicians />}/>
          <Route path="/agenda" element={<Agenda />}/>
          <Route path="/map" element={<Map />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
