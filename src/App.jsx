import { Route, Routes } from "react-router-dom";
import "./App.css";
// import React, { useState } from 'react'
import ClickCounter from "./assets/Component/ClickCounter";
import CountryData from "./assets/Component/CountryData";
import HoverCounter from "./assets/Component/HoverCounter";
import Nav from "./assets/Component/Nav";
import Contact from "./assets/Component/Contact";
import About from "./assets/Component/About";
import Home from "./assets/Component/Home";

// // import CountryData from './assets/Component/CountryData'
// export const counter = React.createContext()
// export const incree = React.createContext()
function App() {
  // const [count ,setCount] = useState(0)
  // const increment = () => setCount (count + 1)
  return (
    <>
      {/* <HoverCounter/> */}
      {/* <CountryData/> */}
      {/* <HoverCounter/> */}
      {/* <ClickCounter/> */}
      {/* <counter.Provider value={count}>
<incree.Provider value={increment}>
<CounterParent/>
</incree.Provider>
   </counter.Provider> */}
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      {/* <div> <Reducer/></div> */}
    </>
  );
}

export default App;
