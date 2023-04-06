/* @format */
import React from 'react';
import './App.css';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';
function App() {
	return (
		<>
			<LoginButton></LoginButton>
			<LogoutButton></LogoutButton>
			<Profile></Profile>
		</>
	);
}

export default App;
