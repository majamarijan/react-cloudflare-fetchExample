import { useSuspenseQuery } from '@tanstack/react-query';
import { useLoaderData } from 'react-router-dom';
import { postDetailQuery } from '../routes/loader';

export default function Post() {
	const { id } = useLoaderData();
	const { data: post } = useSuspenseQuery(postDetailQuery(id));
	// const post = {
	// 	id: crypto.randomUUID(),
	// 	title: 'My Post',
	// 	body: 'lorem ipsum',
	// 	datePublished: new Date('2022-03-11'),
	// };

	return (
		<div className='px-7 py-6 max-w-xl mx-auto'>
			<span className='inline-block px-4 py-2 border rounded text-slate-600 mb-4'>Post No.{post.id}</span>
			<h1 className='text-4xl'>{post.title}</h1>
			<p>Accessed: {new Date().toLocaleDateString()} </p>
			<p className='py-8'>{post.body}</p>
		</div>
	);
}
