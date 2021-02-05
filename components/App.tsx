import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../store/GlobalStateProvider";
import { eraseCookie, getCookie } from "../utils/cookie";
import axios from "../utils/api";

const Auth: React.FC = ({ children }) => {
  const [userData, setUserData] = useContext(GlobalContext);

  // At start of the app!
  useEffect(() => {
    const token = getCookie("token");
    if (token) {
      axios
        .get("/", {
          headers: {
            Authorization: `bearer ${token}`,
          },
        })
        .then(({ data }) => {
          console.log(data);
          setUserData({ ...data.data });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  return <>{children}</>;
};

export default Auth;
