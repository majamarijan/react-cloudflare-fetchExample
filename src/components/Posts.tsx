import { useQuery } from '@tanstack/react-query';
import { queryPosts } from '../routes/loader';
import { Link } from 'react-router-dom';
import { usePagination } from '../hooks/usePagination';

type Post = {
	id: number;
	title: string;
	body: string;
};

export default function Posts() {
	const { data: posts, isLoading, error, isSuccess } = useQuery(queryPosts);
	const { pageStart, pageEnd, nextPage, prevPage, disabled } = usePagination(
		posts?.length ?? 0
	);
	if (isLoading) {
		return <div>Loading...</div>;
	}
	if (error) {
		return <div>Error</div>;
	}
	return (
		<div>
			<h1>Posts</h1>
			<ul>
				{isSuccess &&
					posts?.slice(pageStart, pageEnd).map((post: Post) => (
						<li key={post.id}>
							<Link to={`/posts/${post.id}`}>
								{post.id}. {post.title}
							</Link>
						</li>
					))}
			</ul>
			<div className='flex flex-wrap gap-2'>
				<button
					className={`px-4 py-1 rounded text-slate-100 
          ${disabled.start ? 'bg-slate-700' : 'bg-teal-800'}`}
					onClick={prevPage}
					disabled={disabled.start}
				>
					Prev
				</button>
				<button
					className={`px-4 py-1 rounded text-slate-100 
          ${disabled.end ? 'bg-slate-700' : 'bg-teal-800'}`}
					onClick={nextPage}
					disabled={disabled.end}
				>
					Next
				</button>
			</div>
		</div>
	);
}
