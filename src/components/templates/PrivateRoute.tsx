import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

interface PrivateRouteProps {
	isAuthenticated: boolean;
	redirection: {
		to: string;
	};
}

const PrivateRoute: React.FC<PrivateRouteProps> = (props) => {
	if (props.isAuthenticated) return <Outlet />;
	return <Navigate to={props.redirection.to} replace />;
};

export default PrivateRoute;
