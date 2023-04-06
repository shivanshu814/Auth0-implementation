/* @format */

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

// const domain = process.env.REACT_APP_AUTH0_DOMAIN;
// const clientID = process.env.REACT_APP_AUTH0_CLIENT_ID;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Auth0Provider
		domain='dev-0wrfw176zqvtalfl.us.auth0.com'
		clientId='7cXyjkhOZ2xoMeN1kfOkn46srqlSMJgt'
		authorizationParams={{
			redirect_uri: window.location.origin,
		}}>
		<App />
	</Auth0Provider>
);
