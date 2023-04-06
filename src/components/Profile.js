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
				<JSONPretty data={user} />
				<br></br>
				<br></br>
				<br></br>
				<br></br>
				<img src={user.picture} alt={user.name} />
				<h2>{user.name}</h2>
				<p>{user.email}</p>
			</div>
		)
	);
};

export default Profile;
