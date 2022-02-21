// src/App.js
import "./App.css";

import icon1 from "./images/icon1.png";
import icon2 from "./images/icon2.png";
import icon3 from "./images/icon3.png";
import icon4 from "./images/icon4.png";
import logo from "./images/logo.png";
import menu from "./images/menu.png";

const box1 = {
  image: icon1,
  title: "Declarative",
  content: "React makes it painless to create interactive UIs.",
};

const box2 = {
  image: icon2,
  title: "Components",
  content: "Build encapsulated components that manage their own state",
};

const box3 = {
  image: icon3,
  title: "Single-Way",
  content: "A set of inmutable values are passed to the component's.",
};

const box4 = {
  image: icon4,
  title: "JSX",
  content: "Statically-typed, designed to run on modern browsers.",
};



function App() {
  return (
    <div className="App">
      <div className="maindiv">
        <div className="menu">
          <div className="menu-logo">
            <img src={logo} alt="logo" width="45" height="45" />
          </div>
          <div className="menu-image">
            <img src={menu} alt="menu" width="15" height="15" />
          </div>
        </div>
        <div className="main-box">
          <h1>Say hello to</h1>
          <h1>ReactJS</h1>
          <p>You will learn how to use</p>
          <p>the most popular frontend library</p>
          <p>and become a super Ninja developer</p>
          <button>Awesome!</button>
        </div>
      </div>
      <div className="boxes">
        <div className="box">
          <div className="box-image">
            <img src={icon1} alt="icon1" width="120" height="120" />
          </div>
          <div className="box-title">
            <h2>Declarative</h2>
          </div>
          <div className="box-content">
            <p>
              Ea veniam adipisicing consequat est et.Ipsum laborum dolore esse
              veniam pariatur officia tempor. Magna culpa est pariatur mollit ad
              officia sint incididunt fugiat fugiat.
            </p>
          </div>
        </div>
        <div className="box">
          <div className="box-image">
            <img src={icon2} alt="icon2" width="120" height="120" />
          </div>
          <div className="box-title">
            <h2>Components</h2>
          </div>
          <div className="box-content">
            <p>
              Ea veniam adipisicing consequat est et.Ipsum laborum dolore esse
              veniam pariatur officia tempor. Magna culpa est pariatur mollit ad
              officia sint incididunt fugiat fugiat.
            </p>
          </div>
        </div>
        <div className="box">
          <div className="box-image">
            <img src={icon3} alt="icon3" width="120" height="120" />
          </div>
          <div className="box-title">
            <h2>Single-Way</h2>
          </div>
          <div className="box-content">
            <p>
              Ea veniam adipisicing consequat est et.Ipsum laborum dolore esse
              veniam pariatur officia tempor. Magna culpa est pariatur mollit ad
              officia sint incididunt fugiat fugiat.
            </p>
          </div>
        </div>
        <div className="box">
          <div className="box-image">
            <img src={icon4} alt="icon4" width="120" height="120" />
          </div>
          <div className="box-title">
            <h2>JSX</h2>
          </div>
          <div className="box-content">
            <p>
              Ea veniam adipisicing consequat est et.Ipsum laborum dolore esse
              veniam pariatur officia tempor. Magna culpa est pariatur mollit ad
              officia sint incididunt fugiat fugiat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
