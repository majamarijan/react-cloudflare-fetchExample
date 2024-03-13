import { Outlet } from 'react-router-dom';
import Nav from './components/Navigation';

export default function App() {
	return (
		<div className='flex flex-col min-h-screen justify-between'>
			<header className='px-4 py-2 bg-slate-700 text-white shadow-md shadow-stone-800 flex flex-wrap justify-between'>
				<h1>React Fetch Example with Wrangler</h1>
				<Nav />
			</header>
			<main className='px-4 py-2 flex-1 border border-red-500'>
				<Outlet />
			</main>
			<footer className='px-4 py-2 h-24 bg-black text-white'>Footer</footer>
		</div>
	);
}
