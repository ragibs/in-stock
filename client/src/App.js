import "./App.scss";
import {
  BrowserRouter,
  Routes,
  Route,
  useParams,
  Navigate,
} from "react-router-dom";
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
    <div className="app">
      <BrowserRouter>
        <Header />
        <div className="app__container">
          {/* <div className="app__container2"> */}
            <Routes>
              <Route path="/" element={<Navigate to="/warehouses" />}></Route>
              <Route path="/warehouses" element={<HomePage />}></Route>
              <Route path="/inventory" element={<InventoryPage />}></Route>
              <Route
                path="/inventory/:id"
                element={<InventoryItemsDetails />}
              ></Route>

              <Route path="/inventory/new" element={<NewItem />} />

              <Route
                path="/warehouses/:warehouseID"
                element={<WarehouseDetails />}
              ></Route>

              <Route path="/warehouses/new" element={<NewWarehouse />}></Route>
            </Routes>
          {/* </div> */}
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
