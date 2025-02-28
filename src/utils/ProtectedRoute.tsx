import { ReactNode } from 'react';
// import { Navigate } from 'react-router-dom';
import { useKeycloak } from '@react-keycloak/web';

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { keycloak } = useKeycloak();

  // Si l'utilisateur n'est pas authentifié, on le redirige vers la page de login
  if (!keycloak.authenticated) {
    keycloak.login();
    return <div>Redirecting...</div>;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
