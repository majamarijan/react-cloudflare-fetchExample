import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { postLoader, rootLoader } from './routes/loader.ts';
import App from './App.tsx';
import './index.css';
import ErrorPage from './routes/404.tsx';
import Post from './components/Post.tsx';
import React from 'react';
import Posts from './components/Posts.tsx';
import { getPosts } from '../functions/api/fetchData.ts';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 1000 * 10,
		},
	},
});

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <ErrorPage />,
		loader: ()=> rootLoader(queryClient),
		children: [
			{
				path: '/posts',
				element: <Posts />,
				loader: async ()=> await getPosts()
			},
			{
				path: '/posts/:id',
				element: <Post />,
				loader: postLoader(queryClient),
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
		</QueryClientProvider>
	</React.StrictMode>
);
