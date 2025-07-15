import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../../components/Dataprovider/Dataprovider";
function Protectedroute({ children, msg, redirect }) {
  const navigate = useNavigate();
  const [{ user }, dispatch] = useContext(DataContext);

  useEffect(() => {
    if (!user) {
      // If user is not authenticated, redirect to the login page
      navigate("/auth", { state: { msg, redirect } });
    }
  }, [user]);
  return children;
}

export default Protectedroute;
