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
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/admin/users" element={<Users />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/createProperty" element={<CreateProperty />} />
          <Route path="/property/:id" element={<ViewProperty />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
