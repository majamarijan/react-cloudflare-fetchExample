import { ErrorResponse, Link, useRouteError } from 'react-router-dom';
import vite from '/vite.svg'

export default function ErrorPage() {
  const error = useRouteError() as ErrorResponse;
	return (
		<div className='min-h-screen text-slate-800 gap-4 flex flex-col justify-center items-center'>
			<h1 className='text-6xl font-bold flex flex-col items-center'>
				<img src={vite} alt='vite' className='w-20' />
				<span>{error?.status}</span>
			</h1>
			<p>Page {error?.statusText}!</p>
			<Link to='/' className='text-teal-600'>👈Go Home</Link>
		</div>
	);
}
