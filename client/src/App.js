import "./App.scss";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          {/* <Route path="/inventory" element={<Inventory />}></Route> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
