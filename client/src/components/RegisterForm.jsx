import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';


function RegisterForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `https://booksstore-10.onrender.com/auth/register`,
        // `http://localhost:4000/auth/register`,

        { firstName, lastName, username, email, password, }, { withCredentials: true, });

      if (response.status === 201) { toast.success('Successfully registered! Welcome'); navigate('/login'); }
    } catch (error) { toast.error(error.response.data.error || 'Registration failed'); }
  };

  return (

    <div className='container flex flex-col items-center border-slate-50 rounded-xl  py-8'>
      <div className='text-center bg-opacity-70'>
        <div className='bg-black mx-auto max-w-lg rounded-xl shadow-xl shadow-gray-500 p-8'>
          <h2 className='text-cbb26a text-xl font-bold mb-4'>Registration</h2>
          <form onSubmit={handleSubmit}>
            <div className='mb-4'>
              <p className='text-cbb26a block mb-2'>First Name:</p>
              <input
                className='border rounded w-full p-2'
                type='text'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className='mb-4'>
              <p className='text-cbb26a block mb-2'>Last Name:</p>
              <input
                className='border rounded w-full p-2'
                type='text'
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
            <div className='mb-4'>
              <p className='text-cbb26a block mb-2'>Username:</p>
              <input
                className='border rounded w-full p-2'
                type='text'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className='mb-4'>
              <p className='text-cbb26a block mb-2'>Email:</p>
              <input
                className='border rounded w-full p-2'
                type='text'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className='mb-4'>
              <p className='text-cbb26a block mb-2'>Password</p>
              <input
                className='border rounded w-full p-2'
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              className='flex mx-auto sm:px-2 md:px-3 lg:px-8 text-cbb26a bg-black font-bold text-center imageBorderLogo py-2 px-4 mt-2 mb-2 rounded-md transition duration-300 hover:text-white'
              type='submit'
            >Registration</button>

            <p className='text-cbb26a'>You have a Account?</p>
          </form>

          <p className='mt-4'><Link to='/login' className='text-cbb26a underline'>Login here</Link></p>
        </div>
      </div>
    </div>

  );
}
export default RegisterForm;
