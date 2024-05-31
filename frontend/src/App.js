import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Home from "./pages/General/Home";
import Register from "./pages/General/Register";
import Login from "./pages/General/Login";
import ForgotP from "./pages/General/ForgotPassword";
import EnterCode from "./pages/General/EnterCode";
import NewPass from "./pages/General/NewPass";
import AboutUs from "./pages/General/AboutUs";
import JobscapeMainPage from "./pages/Jobscape/JobscapeMainPage";
import SeekJobPage from "./pages/Jobscape/SeekJobPage";
import SeekTalentPage from "./pages/Jobscape/SeekTalentPage";
import PostProjectPage from "./pages/Jobscape/PostProjectPage";
import ReviewProjectPage from "./pages/Jobscape/ReviewProjectPage";
import YourJobsPage from "./pages/Jobscape/YourJobsPage";
import JobDetailsPage from "./pages/Jobscape/JobDetailsPage";
import FavoritePage from "./pages/General/FavoritePage";
import Profile from "./pages/Profile/Profile";
import EditProfile from "./pages/Profile/EditProfile";
import AddNewExperience from "./pages/Profile/AddNewExperience";
import EditExperience from "./pages/Profile/EditExperience";
import JobHistoryDetails from "./pages/Profile/JobHistoryDetails";
import Ewallet from "./pages/Payment/ewallet";
import Card from "./pages/Payment/card";
import Fpx from "./pages/Payment/fpx";
import Redirect from "./pages/Payment/redirect";
import Successful from "./pages/Payment/successful";
import InvoiceList from "./pages/Payment/invoiceList";
import PaymentHis from "./pages/Payment/paymentHis";
import Invoice from "./pages/Payment/invoice";
import Footer from "./components/Footer";
import CommunityPage from "./pages/Community/CommunityPage";
import NavBar from "./components/NavBar";
import "./App.css";
import { UserProvider } from "./context/UserContext";

function ScrollToTopOnNavigation() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  const handleLoginClick = () => {
    setLoggedIn(!loggedIn);
  };
  const user = null;
  return (
    <UserProvider user={user}>
      <Router>
        <ScrollToTopOnNavigation />
        <NavBar loggedIn={loggedIn} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/Login"
            element={<Login handleLoginClick={handleLoginClick} />}
          />
          <Route path="/Register" element={<Register />} />
          <Route path="/ForgotP" element={<ForgotP />} />
          <Route path="/EnterCode" element={<EnterCode />} />
          <Route path="/NewPass" element={<NewPass />} />
          <Route path="/JobscapeMainPage" element={<JobscapeMainPage />} />
          <Route path="/SeekJobPage" element={<SeekJobPage />} />
          <Route path="/SeekTalentPage" element={<SeekTalentPage />} />
          <Route path="/PostProjectPage" element={<PostProjectPage />} />
          <Route path="/ReviewProjectPage" element={<ReviewProjectPage />} />
          <Route path="/YourJobs" element={<YourJobsPage />} />
          <Route
            path="/SeekJobPage/job-details/:projectId"
            element={<JobDetailsPage />}
          />
          <Route path="/Favorite" element={<FavoritePage />} />
          <Route path="/Profile/:userId" element={<Profile />} />
          <Route path="/EditProfile/:userId" element={<EditProfile />} />
          <Route
            path="/AddNewExperience/:userId"
            element={<AddNewExperience />}
          />
          <Route
            path="/EditExperience/:userId/:experienceId"
            element={<EditExperience />}
          />
          <Route
            path="/JobHistoryDetails/:id"
            element={<JobHistoryDetails />}
          />
          <Route path="/card" element={<Card />} />
          <Route path="/ewallet" element={<Ewallet />} />
          <Route path="/fpx" element={<Fpx />} />
          <Route path="/redirect" element={<Redirect />} />
          <Route path="/successful" element={<Successful />} />
          <Route path="/invoiceList" element={<InvoiceList />}  />
          <Route path="/paymentHis" element={<PaymentHis />} />
          <Route path="/invoice" element={<Invoice />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Community" element={<CommunityPage />} />
        </Routes>
        <Footer />
      </Router>
    </UserProvider>
  );
}

export default App;
