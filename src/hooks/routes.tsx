// import Admin from "pages/Admin/dashboard";

// const redirect = {
//   host: <Admin />,
//   admin: <Admin />,
//   customer: <Admin />,
// };

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

export function withProtected(Component) {
  return function WithPublic(props) {
    // const authState = useAuth()
    // check role
    // if (!authState.isAuthenticated) {
    //     router.replace('/login')
    //     return <p>Loading...</p>
    //  }
    // return <Component  auth={authState} {...props} />;
  };
}
