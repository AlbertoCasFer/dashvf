import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/LoginPage.css';

const LoginPage = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();

	const handleLogin = (e) => {
		e.preventDefault();
		const validUsers = [
			{ username: 'admin', password: '12345' },
			{ username: 'user', password: 'password' },
		];

		const user = validUsers.find(
			(u) => u.username === username && u.password === password,
		);

		if (user) {
			alert('Login exitoso');
			navigate('/dashboard');
		} else {
			alert('Usuario o contraseña incorrectos');
		}
	};

	return (
		<div className="login-container">
			<video className="bg-video" autoPlay muted loop>
				<source src="/videos/Hidratación total.mp4" type="video/mp4" />
				Your browser does not support the video tag.
			</video>
			<div className="login-form-container">
				<form onSubmit={handleLogin} className="login-form">
					<h1>Iniciar Sesión</h1>
					<input
						type="text"
						placeholder="Usuario"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						required
					/>
					<input
						type="password"
						placeholder="Contraseña"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
					<button type="submit">Ingresar</button>
				</form>
			</div>
		</div>
	);
};

export default LoginPage;
