import React from 'react';

declare global {
	interface Window {
		Kakao: any;
	}
}

const Login: React.FC = () => {
	return (
		<div className="App">
			<header className="App-header">
				<p>Login</p>
			</header>
		</div>
	);
};

export default Login;
