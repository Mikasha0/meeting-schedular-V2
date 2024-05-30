import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/home";
import Meeting from "./pages/meeting";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meeting" element={<Meeting/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
