import React from 'react';
import './styles/normalize.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Wish from './pages/wish';
import Album from './pages/album';
import MainLayout from './layouts/main';
import Calendar from './pages/calendar';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={
						<MainLayout>
							<Home />
						</MainLayout>
					}
				/>
				<Route
					path="/login"
					element={
						<MainLayout>
							<Login />
						</MainLayout>
					}
				/>
				<Route
					path="/wish"
					element={
						<MainLayout>
							<Wish />
						</MainLayout>
					}
				/>
				<Route
					path="/album"
					element={
						<MainLayout>
							<Album />
						</MainLayout>
					}
				/>
				<Route
					path="/calendar"
					element={
						<MainLayout>
							<Calendar />
						</MainLayout>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
