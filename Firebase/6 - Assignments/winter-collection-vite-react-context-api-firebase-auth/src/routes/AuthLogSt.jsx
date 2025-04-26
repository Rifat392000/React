import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { Loading } from "../pages";
import { useLocation } from "react-router-dom";

const AuthLogSt = () => {
  const { user, loading } = useContext(AuthContext);
const location = useLocation();
// console.log("Auth log state");
// console.log(location.state);

  if(loading){
   return <Loading/>
  }
  return user ? <Navigate to={location?.state ? location?.state : "/"} replace /> : <Outlet />;
};

export default AuthLogSt;
