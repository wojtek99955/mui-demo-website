import { Navigate, Outlet } from "react-router";
import { Context } from "../ContextProvider";
import { useContext } from "react";

function ProtectedRoutes() {
  const context = useContext(Context);
  const { userData } = context;
  return userData ? <Outlet /> : <Navigate to="/SignUp" />;
}

export default ProtectedRoutes;
