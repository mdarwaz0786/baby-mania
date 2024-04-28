import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Admin/Dashboard.jsx";
import AdminPage from "./pages/AdminPage.jsx";
import OrderList from "./components/Admin/Order/OrderList.jsx";
import OrderDetail from "./components/Admin/Order/OrderDetail.jsx";
import SizeList from "./components/Admin/Size/SizeList.jsx";
import AddSize from "./components/Admin/Size/AddSize.jsx";
import EditSize from "./components/Admin/Size/EditSize.jsx";
import ColorList from "./components/Admin/Color/ColorList.jsx";
import EditColor from "./components/Admin/Color/EditColor.jsx";
import AddColor from "./components/Admin/Color/AddColor.jsx";
import CategoryList from "./components/Admin/Category/CategoryList.jsx";
import AddCategory from "./components/Admin/Category/AddCategory.jsx";
import EditCategory from "./components/Admin/Category/EditCategory.jsx";
import ProductList from "./components/Admin/Product/ProductList.jsx";
import AddProduct from "./components/Admin/Product/AddProduct.jsx";
import EditProduct from "./components/Admin/Product/EditProduct.jsx";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AdminPage />}>
          <Route path="" element={<Dashboard />} />
          <Route path="order-list" element={<OrderList />} />
          <Route path="order-detail/:id" element={<OrderDetail />} />
          <Route path="size-list" element={<SizeList />} />
          <Route path="add-size" element={<AddSize />} />
          <Route path="edit-size/:id" element={<EditSize />} />
          <Route path="color-list" element={<ColorList />} />
          <Route path="add-color" element={<AddColor />} />
          <Route path="edit-color/:id" element={<EditColor />} />
          <Route path="category-list" element={<CategoryList />} />
          <Route path="add-category" element={<AddCategory />} />
          <Route path="edit-category/:id" element={<EditCategory />} />
          <Route path="product-list" element={<ProductList />} />
          <Route path="add-product" element={<AddProduct />} />
          <Route path="edit-product/:id" element={<EditProduct />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
