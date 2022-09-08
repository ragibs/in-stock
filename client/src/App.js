import "./App.scss";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import WarehouseDetails from "./pages/Warehouse-details/WarehouseDetails";
// import InventoryItemsDetails from "./pages/InventoryItemsDetails/InventoryItemsDetails";



function App() {
  return (

    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/warehouses/:warehouseID" element={<WarehouseDetails />}></Route>
          {/* <Route path="/inventory" element={<InventoryItemsDetails />}></Route> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>

  );
}

export default App;