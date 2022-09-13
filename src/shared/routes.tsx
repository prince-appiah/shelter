import { LOGIN_ROUTE } from "config/constants/routes";
import { useAuthState } from "hooks/reduxHooks";
import { useEffect } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

// wrap this with a component
export function withPublic(Component) {
  return function WithPublic(props) {
    // const authState = useAuth()
    // check role
    // if (authState.isAuthenticated) {
    //     router.replace('/')
    //     return <p>Loading...</p>
    //  }
    // return <Component  auth={authState} {...props} />;
    // return redirect[authState.userType]||<Admin />;
  };
}

export function withProtected(Component?: any, roles?: string[]) {
  return function WithProtected(props) {
    const { currentUser } = useAuthState();
    console.log("🚀 ~ currentUser", currentUser);
    const navigate = useNavigate();

    useEffect(() => {
      if (!currentUser) {
        navigate(LOGIN_ROUTE);
        return null;
      }
    }, [currentUser, navigate]);

    if (currentUser && roles.includes(currentUser?.userType)) {
      return <Component {...props} />;
    }

    return <Navigate to={`/s/${currentUser?.userType}/dashboard`} />;
  };
}

export function ProtectedRoute({ roles, Component, ...props }) {
  const location = useLocation();
  const { currentUser } = useAuthState();

  if (currentUser) {
    return roles.includes(currentUser?.userType) ? (
      <Component {...props} />
    ) : (
      <Navigate to={`/s/${currentUser?.userType}/dashboard`} replace />
    );
  }

  return (
    <Navigate
      to={{
        pathname: `${LOGIN_ROUTE}?redirect=${location.pathname}${location.search}`,
      }}
      state={{ location }}
      replace
    />
  );
}
