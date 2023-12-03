import {Routes, Route , BrowserRouter} from "react-router-dom"
import Home from "./pages/home";
// import CreateListing from "./pages/CreateListing"
import Signin from "./pages/signin";
import SignUp from "./pages/signUp";
import Listing from "./pages/Listing";
import Profile from "./pages/Profile";
import Search from "./pages/search";
// import UpdateListing from "./pages/UpdateListing";
import About from "./pages/About";
import Header from "./components/Header";
import PrivateRoute from "./components/PrivateRoute";
export default function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" Component={Home}/>
      <Route path="/signin" Component={Signin}/>
      <Route path="/signup" Component={SignUp}/>
      <Route path="/listing" Component={Listing}/>
      <Route path="/search" Component={Search}/>
      <Route path="/about" Component={About}/>
      <Route  Component={PrivateRoute}>
      <Route path="/profile" Component={Profile}/>
      {/* <Route path="/updateListing/:listingId" Component={UpdateListing}/>
      <Route path="/createListing" Component={CreateListing}/> */}
      </Route>
      
    </Routes>
    </BrowserRouter>
  )
}
