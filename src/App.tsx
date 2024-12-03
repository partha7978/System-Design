import "./App.scss";
import MainCards from "./components/MainCards/MainCards";

import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <div className="main__container">
        <Navbar />
        <div className="title__container">
          <h1 className="doto-font">System Design</h1>
          {/* <h3>A Design Pattern By</h3> */}
        </div>
        <MainCards />
      </div>
    </>
  );
}

export default App;
