import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';

const App = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<LoginPage />} />
			<Route path="/dashboard" element={<h1>Dashboard (en construcción)</h1>} />
		</Routes>
	</BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById('root'));
