import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Page1 from "../src/pages/Page1";
import Page2 from "../src/pages/Page2";
import Page3 from "../src/pages/Page3";
import Page4 from "../src/pages/Page4";
import Page5 from "../src/pages/Page5";
import Page6 from "../src/pages/Page6";
import Page7 from "../src/pages/Page7";
import Page8 from "../src/pages/Page8";
import Page9 from "../src/pages/Page9";
import Page10 from "../src/pages/Page10";
import Page11 from "../src/pages/Page11";
import Page12 from "../src/pages/Page12";
import Page13 from "../src/pages/Page13";
import Page15 from "../src/pages/Page15";
import Page14 from "../src/pages/Page14";
import NavigationButton from "../src/components/NavigationButton";
import NavigationSwipe from "./components/NavigationSwipe";
import { AnimatePresence } from "framer-motion";
import "./app.css";
import NavBar from "../src/components/NavBar";

function App() {
  const totalPages = 15;

  return (
    <Router>
      <div className="app">
        <NavBar totalPages={totalPages} />
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Page1 />} />
            <Route path="/page1" element={<Page1 />} />
            <Route path="/page2" element={<Page2 />} />
            <Route path="/page3" element={<Page3 />} />
            <Route path="/page4" element={<Page4 />} />
            <Route path="/page5" element={<Page5 />} />
            <Route path="/page6" element={<Page6 />} />
            <Route path="/page7" element={<Page7 />} />
            <Route path="/page8" element={<Page8 />} />
            <Route path="/page9" element={<Page9 />} />
            <Route path="/page10" element={<Page10 />} />
            <Route path="/page11" element={<Page11 />} />
            <Route path="/page12" element={<Page12 />} />
            <Route path="/page13" element={<Page13 />} />
            <Route path="/page14" element={<Page14 />} />
            <Route path="/page15" element={<Page15 />} />
          </Routes>
        </AnimatePresence>
        <NavigationButton totalPages={totalPages} />
        <NavigationSwipe totalPages={totalPages} />
      </div>
    </Router>
  );
}
export default App;
