import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

export const ProtectedRouteAuth = ( { component: Component, ...rest } ) => {
  const token = localStorage.getItem( "token" );

  const {loading, userData} = useSelector(state=>state.authReducer);

  console.log(userData);

    return (
      <Route
        { ...rest }
        render={ ( props ) =>
          {
            if(!token || !userData){
              return(
                <Component { ...props } />
              )
            }else{
              if(userData.role.name == "ADMIN"){
                return(
                  <Redirect
                      to={ {
                        pathname: "/admin",
                        state: { from: props.location },
                      } }
                  />
                  )
              }
              else if(userData.role.name == "SUPER_ADMIN"){
                return(
                  <Redirect
                      to={ {
                        pathname: "/super_admin",
                        state: { from: props.location },
                      } }
                  />
                )
              }
              else if(userData.role.name == "TEACHER"){
                return(
                  <Redirect
                      to={ {
                        pathname: "/teacher",
                        state: { from: props.location },
                      } }
                  />
                )
              } else if(userData.role.name == "MONITORING"){
                return(
                  <Redirect
                      to={ {
                        pathname: "/monitoring",
                        state: { from: props.location },
                      } }
                  />
                )
              }
              
            }
          }
        }
      />
    );
  

  
}
