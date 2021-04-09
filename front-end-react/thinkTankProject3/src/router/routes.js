import React from 'react';
import App from '../pages/App';
import About from '../pages/About';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import Post from '../pages/Post';
import UpdatePost from '../pages/UpdatePost';
import UserProfile from '../pages/UserProfile';
import Red from '../pages/Red';
import Blue from '../pages/Blue';

const routes = [
	{
		Component: Contact,
		key: 'Contact',
		path: '/contact'
	},
	{
		Component: Home,
		key: 'Home',
		path: '/home'
	},
	{
		Component: About,
		key: 'About',
		path: '/about'
	},
	{
		Component: UpdatePost,
		key: 'UpdatePost',
		path: 'edit/:id/'
	},
	{
		Component: Post,
		key: 'Post',
		path: '/post/:id'
	},
	{
		Component: UserProfile,
		key: 'UserProfile',
		path: '/users/:id'
	},
	{
		Component: Red,
		key: 'Red',
		path: '/red'
	},
	{
		Component: Blue,
		key: 'Blue',
		path: '/blue'
	},
	{
		Component: App,
		key: 'App',
		path: '/'
	}
];

export default routes;
