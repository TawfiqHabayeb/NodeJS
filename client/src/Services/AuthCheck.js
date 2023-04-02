import { MainContext } from "../Context/MainContextProvider";
import { useHistory } from "react-router-dom";
import { useContext, useEffect } from "react";

const AuthCheck = (props) => {
  const { JWT } = useContext(MainContext);
  const history = useHistory();

  useEffect(() => {
    if (!JWT || JWT === " ") {
      return history.push("/");
    }
  }, []);

  return <div>{props.children}</div>;
};

export default AuthCheck;
