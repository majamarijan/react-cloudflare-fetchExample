import { Link } from 'react-router-dom' 

export default function Nav() {
  return (
    <ul className='flex flex-wrap gap-4 items-center'>
      <Link to='/' className="text-purple-300 hover:text-purple-500">Home</Link>
      <Link to='/posts' className="text-purple-300 hover:text-purple-500">Posts</Link>
    </ul>
  )
}