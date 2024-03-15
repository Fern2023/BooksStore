import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

function AForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

  };

  return (
    <div >
      <div >
        <h2>AForm</h2>

        <form onSubmit={handleSubmit}>

          <div><p>First Name:</p><input className='borde rounded'type='text'value={firstName}onChange={(e) => setFirstName(e.target.value)}/></div>
          <div><p>Last Name:</p><input type='text'value={lastName}onChange={(e) => setLastName(e.target.value)}/></div>
          <div><p>Email:</p><input className=''type='text'value={email}onChange={(e) => setEmail(e.target.value)}/></div>
          <div><p>Password</p><input className=''type='password'value={password}onChange={(e) => setPassword(e.target.value)}/></div>

          <button type='submit' > Register</button>
        </form>
        <p > Already have an account?{' '}<Link to='/loginn' > Login here   </Link></p>

      </div>
    </div>
  );
}

export default AForm;
