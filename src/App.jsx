import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/signup";
import Users from "./admin/Users";
import Dashboard from "./admin/Dashboard";
import Home from "./pages/Home";
import Properties from "./property/Properties";
import CreateProperty from "./property/CreateProperty";
import ViewProperty from "./property/ViewProperty";
import Profile from "./pages/Profile";
import MobileNavbar from "./components/MobileNavbar";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";
import AllProperties from "./admin/AllProperties";
import YourProperties from "./property/YourProperties";
import Search from "./pages/Search";

// import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div>
      <Toaster position="top-center" />
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/admin/dashboard/users" element={<Users />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route
            path="/admin/dashboard/properties"
            element={<AllProperties />}
          />
          <Route path="/properties" element={<Properties />} />
          <Route path="/createProperty" element={<CreateProperty />} />
          <Route path="/yourProperties" element={<YourProperties />} />
          <Route path="/property/:id" element={<ViewProperty />} />
          <Route path="/search" element={<Search />} />
        </Routes>
        <div className="hidden sm:flex z-10 py-3 top-0 w-full border-b bg-white fixed">
          <Navbar />
        </div>
        <div className="sm:hidden fixed bottom-0 border-t py-3 w-full bg-white">
          <MobileNavbar />
        </div>
      </Router>
    </div>
  );
};

export default App;
