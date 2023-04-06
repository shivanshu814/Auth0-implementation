/** @format */

import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import JSONPretty from 'react-json-pretty';
const Profile = () => {
	const { user, isAuthenticated, isLoading } = useAuth0();

	if (isLoading) {
		return (
			<div>
				<img src='https://avatars.githubusercontent.com/u/97324405?v=4' />
				<p>Loading ...........</p>
			</div>
		);
	}

	return (
		isAuthenticated && (
			<div>
				<img src={user.picture} alt={user.name} />
				<br></br>
				<h2>{user.name}</h2>
				<br></br>
				<p>{user.email}</p>
				<br></br>
				<br></br>
				<JSONPretty data={user} />
			</div>
		)
	);
};

export default Profile;
