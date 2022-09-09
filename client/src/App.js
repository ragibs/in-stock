import "./App.scss";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import InventoryItemsDetails from "./pages/InventoryItemsDetails/InventoryItemsDetails";
import InventoryPage from "./pages/InventoryPage/InventoryPage";

import WarehouseDetails from "./pages/Warehouse-details/WarehouseDetails";
// import InventoryItemsDetails from "./pages/InventoryItemsDetails/InventoryItemsDetails";

import NewWarehouse from "./components/NewWarehouse/NewWarehouse";
import NewItem from "./components/NewItem/NewItem";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>

          <Route path="/inventory" element={<InventoryPage />}></Route>
          <Route
            path="/inventory/:id"
            element={<InventoryItemsDetails />}
          ></Route>

          <Route
            path="/warehouses/:warehouseID"
            element={<WarehouseDetails />}
          ></Route>

          <Route path="/new-warehouse" element={<NewWarehouse />}></Route>
          <Route path="/new-item" element={<NewItem />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
