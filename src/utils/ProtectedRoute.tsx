import { ReactNode } from 'react';

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {

  console.log(window.location.pathname)

  // if (
  //   !localStorage.getItem("token") &&
  //   window.location.pathname !== "/authentication" &&
  //   window.location.pathname !== "/login" &&
  //   window.location.pathname !== "/sign_in"
  // ) {
  //   window.location.href = "/authentication";
  // }

  return <>{children}</>;
};

export default ProtectedRoute;
