import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MainLayout from "../layouts/MainLayout";
import Dashboard from "../dashboard/Dashboard";
import DonorProfile from "../profile/Donorprofile";
import Donors from "../pages/Donors";
import Requests from "../pages/Requests";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route element={<MainLayout/>}>
            <Route path="login" element={<Login/>}/>
            <Route path="register" element={<Register/>}/>
            <Route path="dashboard" element={<Dashboard/>}/>
            <Route path="profile" element={<DonorProfile/>}/>
            <Route path="donors" element={<Donors/>}/>
            <Route path="requests" element={<Requests/>}/>
            </Route>
        </Routes>
    );
};

export default AppRoutes;