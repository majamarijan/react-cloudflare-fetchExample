import { useSuspenseQuery } from '@tanstack/react-query';
import { Link, useLoaderData } from 'react-router-dom';
import { postDetailQuery } from '../routes/loader';

export default function Post() {
	const { id } = useLoaderData() as { id: string };
	const { data: post } = useSuspenseQuery(postDetailQuery(id));
	
	return (
		<div className='px-7 py-6 max-w-xl mx-auto'>
			<span className='inline-block px-4 py-2 border rounded text-slate-600 mb-4'>Post No.{post.id}</span><Link to={`../`} relative='path'>Back</Link>
			<h1 className='text-4xl'>{post.title}</h1>
			<p>Accessed: {new Date().toLocaleDateString()} </p>
			<p className='py-8'>{post.body}</p>
		</div>
	);
}
