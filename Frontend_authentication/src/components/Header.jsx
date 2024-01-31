import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <div className='bg-gray-300'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
           <Link to='/'>
           <h1 className='font-bold'>
                Auth App
              </h1>
           </Link>
            <ul className='flex gap-4'>
            <Link to='/'><li>Home</li></Link>
            <Link to='/about'><li>About</li></Link>
            <Link to='/signin'>
            <li>Sign_IN</li>
            </Link>
            </ul>

        </div>
        Header
        </div>
  )
}

export default Header