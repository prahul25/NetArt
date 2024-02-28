import React from "react";
import logo from "./Assets/logo.png";
import award from "./Assets/1.png";
import handson from "./Assets/2.png";
import Equipments from "./Assets/3.png";
import Globe from "./Assets/icon.png";
import Telephone1 from "./Assets/telephone1.png";
import Twitter from "./Assets/twitter.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="logoWrapper">
        <img className="logo" src={logo} alt="Logo" />
      </div>
      <div className="contentWrapper">
        <img src={award} alt="" className="award-image" />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h5>
            C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
            the 4th time.
          </h5>
          <ul>
            <li>
              C.R.I.'s energy efficient products are well recognized by various
              Government Institutions as trustworthy products for various
              projects across the globe to save energy.
            </li>
            <li>
              C.R.I. is the highest contributor in the country for the projects
              of EESL (Energy Efficiency Services Limited) to replace the old
              inefficient pumps with 5 Star rated energy efficient smart pumps
              with IoT enabled control panel.
            </li>
          </ul>
          <img src={handson} alt="" style={{ height: "500px", width: "95%" }} />
          <ul>
            <li>
              Government of India has awarded the{" "}
              <span style={{ fontWeight: "bold" }}>
                "National Energy Conservation Award 2018"
              </span>
              . Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group
              received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha
              & Shri. Raj Kumar Singh, Honorable Minister of State.
            </li>
          </ul>
        </div>
      </div>
      <p>
        INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING
        IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE
        NATION.
      </p>
      <img src={Equipments} alt="" style={{ width: "85%" }} />
      <p>
        Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
        Solar Systems - Motors{" "}
      </p>
      <span className="divisonLine"></span>
      <h5>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h5>
      <p style={{ marginLeft: "20px" }}>
        CHEMICALS <span className="lines"></span>&thinsp;PROCESS POWER WATER
        <span className="lines"></span>&thinsp;WASTE WATER OILS{" "}
        <span className="lines"></span>&thinsp;GAS PHARMA SUGARS{" "}
        <span className="lines"></span>&thinsp;DISTILLERIES PAPER{" "}
        <span className="lines"></span>&thinsp;PULP MARINE{" "}
        <span className="lines"></span>&thinsp;DEFENCE METAL{" "}
        <span className="lines"></span>&thinsp;MINING FOOD{" "}
        <span className="lines"></span>&thinsp;BEVERAGE PETROCHEMICAL{" "}
        <span className="lines"></span>&thinsp;REFINERIES SOLAR BUILDING HVAC
        FIRE FIGHTING AGRICULTURE <span className="lines"></span>
        &thinsp;RESIDENTIAL
      </p>
      <footer>
        <h5>
          <img src={Telephone1} alt="" style={{ backgroundColor: "red" }} />{" "}
          7048252720
        </h5>
        <h5>
          <img src={Twitter} alt="" className="con" />  <a href="https://twitter.com/p_rahul25" style={{textDecoration:"none" , color:"white"}}>P_rahul25</a>
        </h5>
        <h5>
          <img src={Globe} alt="" /> <a href="https://www.crio.do/learn/portfolio/palrahulkumar2002/" style={{textDecoration:"none" , color:"white"}}>Portfolio</a>
        </h5>
      </footer>
    </div>
  );
}

export default App;