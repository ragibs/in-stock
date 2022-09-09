import "./App.scss";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import EditWarehouse from "./pages/EditWarehouse/EditWarehouse";




function App() {
  return (

    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          {/* <Route path="/" element={<HomePage />}></Route> */}
          {/* <Route path="/inventory" element={<Inventory />}></Route> */}
          <Route path="/edit-warehouse/:warehouseId" element={<EditWarehouse/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>

  );
}

export default App;
