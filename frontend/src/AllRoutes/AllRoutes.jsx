import { Route, Routes } from "react-router-dom"
import Home from "../components/Home"
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import MyOrder from "../components/MyOrder";


const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/myOrder" element={<MyOrder />} />
    
    </Routes>
  );
}
export default AllRoutes