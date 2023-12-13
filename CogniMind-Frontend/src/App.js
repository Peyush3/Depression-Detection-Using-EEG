import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Profile from "./components/Profile/Profile";
import AdminProfile from "./components/AdminProfile/AdminProfile";
import PatientProfile from "./components/PatientProfile/PatientProfile";
import Home from "./components/Home/Home";
import Navi from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import Upload from "./components/Upload/Upload";
import Forgot from "./components/Auth/Forgot";
import Reset from "./components/Auth/Reset";
import Report from "./components/Report/Report";
import { useEffect } from "react";



function App() {


  useEffect(() => {
    console.log(process.env.REACT_APP_API_URL);
  }, [])


  return (
    <Router>
      <div className="App">
        <Navi />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/patientprofile" element={<PatientProfile />} />
          <Route path="/adminprofile" element={<AdminProfile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/report" element={<Report />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
