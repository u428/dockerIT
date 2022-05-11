import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

export const ProtectedRouteTeacher = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem("token");
  
  const {loading, userData} = useSelector(state=>state.authReducer);

  return (

    <Route
      {...rest}
      render={(props) =>
        {
          if(token  && userData){
            if(userData.role.name == "TEACHER"){
              return(
                <Component {...props} />
              )
            }
            else{
              return(
              <Redirect
              to={{
                pathname: "/404",
                state: { from: props.location },
              }}
            />
              )
            }
          }else{
            return(
            <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location },
            }}
            />
            )
          }
        }
      }
    />
  );
};
