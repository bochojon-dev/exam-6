import { Route, Routes } from "react-router";
import "./pages/admin/Admin.css";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import HeaderBottom from "./components/header-bottom/HeaderBottom";
import HeaderTop from "./components/header-top/HeaderTop";
import Login from "./pages/login/Login";
import Footer from "./components/footer/Footer";
import Admin from "./pages/admin/Admin";
import { ToastContainer } from "react-toastify";
import Auth from "./pages/auth/Auth";
import NotFound from "./pages/notFound/NotFound";
import SingleRoute from "./pages/singleRoute/SingleRoute";
import Stay from "./components/stay/Stay";

function App() {
  return (
    <div className="App">
      <div className="container">
        <HeaderTop />
        <Navbar />
        <HeaderBottom />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<SingleRoute />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<SingleRoute />} />

          <Route path="/" element={<Auth />}>
            <Route path="admin" element={<Admin />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Stay />
        <ToastContainer />
        <Footer />
      </div>
    </div>
  );
}

export default App;
