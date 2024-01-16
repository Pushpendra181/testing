import AllSeasonCrops from "./component/Basic/AllSeasonCrops";
import Headar from "./component/Headar/Headar";
import Home from "./component/HomePage/Home";
// import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
// import Features from "./Features/Features";

// import Features from "./feturs/Features";

function App() {
  return (
    <>
      <div className="App">
         { <Headar /> }
        <Home />
        <AllSeasonCrops /> 
        {/* { <Features /> } */}
      </div>
      {/* { <Router>
        <Routes>
          <Route path="/Features" Component={Features} />
        </Routes> } */}
      {/* </Router> */}
    </>
  );
}

export default App;
