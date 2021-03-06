// import React from 'react';
import App from '../pages/App';
// import About from '../pages/About';
// import Home from '../pages/Home';
// import Contact from '../pages/Contact';
// import Post from '../pages/Post';
// import UpdatePost from '../pages/UpdatePost';
import UserProfile from '../pages/UserProfile';
import Red from '../pages/Red';
import Blue from '../pages/Blue';

const routes = [
	// {
	// 	Component: Contact,
	// 	key: 'Contact',
	// 	path: '/contact'
	// },
	// {
	// 	Component: Home,
	// 	key: 'Home',
	// 	path: '/home'
	// },
	// {
	// 	Component: About,
	// 	key: 'About',
	// 	path: '/about'
	// },
	// {
	// 	Component: UpdatePost,
	// 	key: 'UpdatePost',
	// 	path: '/:id/edit'
	// },
	// {
	// 	Component: Post,
	// 	key: 'Post',
	// 	path: '/:id/post'
	// },
	{
		Component: UserProfile,
		key: 'UserProfile',
		path: '/users/:id'
	},
	{
		Component: Red,
		key: 'Red Tank',
		path: '/red'
	},
	{
		Component: Blue,
		key: 'Blue Tank',
		path: '/blue'
	},
	{
		Component: App,
		key: 'Home',
		path: '/'
	}
];

export default routes;
