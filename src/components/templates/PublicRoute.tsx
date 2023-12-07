import React from 'react';
import { Outlet, Navigate, useLocation } from 'react-router-dom';

interface PublicRouteProps {
	isAuthenticated: boolean;
	redirection: {
		path: string[];
		to: string;
	};
}

const PublicRoute: React.FC<PublicRouteProps> = (props) => {
	const location = useLocation();

	if (props.isAuthenticated && props.redirection.path.some((path) => path === location.pathname))
		return <Navigate to={props.redirection.to} replace />;
	return <Outlet />;
};

export default PublicRoute;
