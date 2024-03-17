import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';

import axios from 'axios';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { setIsLoggedIn, checkUser } = useAuth();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `https://booksstore-10.onrender.com/auth/login`,
        { email, password, }, { withCredentials: true, });
      if (response.status === 200) { navigate('/'); setIsLoggedIn(true); checkUser(); }
    } catch (error) { setError(error.response.data.error); }
  };

  return (

    <div className='flex justify-center items-center h-screen bg-transparent'>
      <div className='rounded-md p-8'>
        <div className='bg-black bg-opacity-90 rounded-xl shadow-xl shadow-gray-500 p-4'>
          <h2 className='text-cbb26a text-lg font-bold mb-4'>Login</h2>
          {error && <p className='text-red-500 mb-4'>{error}</p>}

          <form onSubmit={handleSubmit}>
            <div className='Email mb-4'>
              <p className='block mb-2 text-cbb26a'>Email</p>
              <input
                className='border rounded w-full p-2'
                type='text'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className='Password mb-4'><p className='block mb-2 text-cbb26a'>Password</p>
              <input
                className='border rounded w-full p-2'
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              className='flex justify-center mx-auto sm:px-2 md:px-3 lg:px-8 font-bold text-cbb26a bg-black text-center imageBorderLogo py-2 px-4 mt-2 mb-2 rounded-md transition duration-300 hover:text-white'
              type='submit'>Login</button>
            <p className='mt-4'>{' '}<Link to='/register' className='underline text-cbb26a'>Register here</Link>{' '}</p>
          </form>

        </div>
      </div>
    </div>

  );
}

export default LoginForm;
