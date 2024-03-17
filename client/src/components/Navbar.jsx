import { useAuth } from "../context/AuthProvider";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';



function Navbar() {
    const { isLoggedIn, setIsLoggedIn, userData } = useAuth();

    const handleLogout = async () => {
        try {
            await axios.post(
                // `https://burgerguide-ecdo.onrender.com/auth/logout`,
                `localhost:4000/auth/logout`,
                {}, { withCredentials: true });
            setIsLoggedIn(false);
        } catch (error) { toast.error('Error logging out'); }
    };

    return (
        <nav className="flex justify-center p-24">
            <h1 className='text-6xl font-bold text-indigo-500 border-b border-blue' style={{ transform: 'scaley(2)', fontFamily: 'Castoro Titling, serif' }}>Books Store</h1>

            <div>
                {isLoggedIn ? (
                    <div className='flex flex-col lg:flex-row '>
                        <p className='px-4'>Welcome, {userData.firstName}</p>
                        <button
                            className='px-4  cursor-pointer hover:opacity-80'
                            onClick={handleLogout}
                        >
                            LOGOUT
                        </button>
                    </div>
                ) : (
                    <Link to='/login' className='cursor-pointer hover:opacity-80'>
                        LOGIN
                    </Link>
                )}
            </div>

        </nav>
    );
}
export default Navbar;