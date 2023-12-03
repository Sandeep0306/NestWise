import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
// import 

export default function PrivateRoute() {
  const {currentUser} = useSelector(state => state.user);
  return currentUser ? <Outlet/> : <Navigate to= "/signin"/>;
}
