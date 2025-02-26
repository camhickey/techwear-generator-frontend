import { useAuth } from '@/useAuth';
import { Navigate, Outlet } from 'react-router';

type ProtectedRouteProps = {
  redirectPath: string;
  allowAuthenticated?: boolean;
};

export function ProtectedRoute({
  redirectPath,
  allowAuthenticated = true,
}: ProtectedRouteProps) {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="text-white text-sm text-center pt-4">
        LOADING AUTHENTICATION
      </div>
    );
  }

  if (isAuthenticated === allowAuthenticated) return <Outlet />;

  return <Navigate to={redirectPath} replace />;
}
