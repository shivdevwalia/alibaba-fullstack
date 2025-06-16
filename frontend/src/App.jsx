import { Route, Routes } from "react-router-dom";

import CartPage from "./pages/CartPage";
import SigninPage from "./pages/SigninPage";
import RegisterPage from "./pages/Registerpage";
import Homepage from "./pages/Homepage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";

import PrivateRoute from "./Routing/PrivateRoute";

import DashProducts from "./pages/DashProducts";
import Electronics from "./pages/Electronics";
import ProductDetails from "./pages/ProductDetails";
import Sports from "./pages/Sports";
import Checkout from "./pages/Checkout";
import DashOrders from "./pages/DashOrders";
import CategoryPage from "./pages/CategoryPage";
import SearchResults from "./pages/SearchResults";

import AboutUsPage from "./pages/AboutUsPage";
import DashAboutUs from "./pages/DashAboutUs";
import EditPages from "./pages/EditPages";
import AllProducts from "./pages/AllProducts";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage></Homepage>}></Route>
        <Route path="/cart" element={<CartPage></CartPage>}></Route>
        <Route path="/signin" element={<SigninPage></SigninPage>}></Route>
        <Route path="/signup" element={<RegisterPage></RegisterPage>}></Route>
        {/* <Route path="/products/sports" element={<Sports></Sports>}></Route> */}
        <Route path="/cart/checkout" element={<Checkout></Checkout>}></Route>
        {/* <Route path="/category/:categoryName" element={<CategoryPage />} /> */}
        <Route path="/search" element={<SearchResults />} />
        <Route path="/aboutus" element={<AboutUsPage></AboutUsPage>}></Route>
        <Route path="/products" element={<AllProducts></AllProducts>}></Route>

        <Route
          path="/pages"
          element={
            <PrivateRoute requiredRole={"admin"}>
              <EditPages></EditPages>
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/admin-aboutus"
          element={
            <PrivateRoute requiredRole={"admin"}>
              <DashAboutUs></DashAboutUs>
            </PrivateRoute>
          }
        ></Route>
        {/* <Route
          path="/products/electronics"
          element={<Electronics></Electronics>}
        ></Route> */}
        <Route
          path="/products/:id"
          element={<ProductDetails></ProductDetails>}
        ></Route>
        <Route
          path="/dashboard/products"
          element={
            <PrivateRoute requiredRole={"admin"}>
              <DashProducts></DashProducts>
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/dashboard/orders"
          element={
            <PrivateRoute requiredRole={"admin"}>
              <DashOrders></DashOrders>
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/forgotpassword"
          element={<ForgotPasswordPage></ForgotPasswordPage>}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
