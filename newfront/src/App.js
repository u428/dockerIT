import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { authMe } from "./redux/auth/action";
import Routes from "./routes/Routes";


function App() {
  const token = localStorage.getItem( "token" );
  const history = useHistory();
  const dispatch = useDispatch();

  if ( token ) {
    dispatch(authMe(history));
  }

  return <Routes />;
}

export default App;
