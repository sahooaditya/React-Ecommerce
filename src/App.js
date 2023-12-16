// import { BrowserRouter as Router, Switch, Route } from "react-route-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  Product,
  About,
  SingleProduct,
  Cart,
  Error,
  Checkout,
  PrivateRoute,
} from "./pages";
import { Footers, Navbar, Sidebar } from "./components";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<Product />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<Error />} />
        <Route path="/privateRoute" element={<PrivateRoute />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footers />
    </BrowserRouter>
  );
}

export default App;
