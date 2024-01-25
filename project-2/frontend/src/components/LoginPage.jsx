import React from 'react';
import { Link } from 'react-router-dom'; 
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const [loginError, setLoginError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/login', {
            username: formData.username, 
            password: formData.password
        })
        .then(result => {
            console.log(result);
            if (result.data === "Success") {
                navigate('/home');
            }
            if (result.data !== "Success") {
                setLoginError(result.data);
            }
        })
        .catch(err => console.log(err));
    }

    const isLoginButtonDisabled = !(formData.username.trim() && formData.password.trim());

    return (
        <div className="bg-white p-8 rounded md:w-96 lg:w-80 xl:w-96 sm:w-full">
            <h2 className="text-2xl font-bold mb-4 text-black">Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        className="w-full border p-2 rounded text-black"
                        placeholder="Username"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full border p-2 rounded text-black"
                        placeholder="Password"
                    />
                    <p className="text-red-500 text-sm">{loginError}</p>
                </div>
                <button
                    type="submit"
                    className={`${
                        isLoginButtonDisabled
                            ? 'bg-gray-400 cursor-not-allowed'
                            : 'bg-blue-500 hover:bg-blue-600'
                    } text-white p-2 rounded w-full`}
                    disabled={isLoginButtonDisabled}
                >
                    Login
                </button>
            </form>
            <p className="text-center mt-4">
                Don't have an account?{' '}
                <Link to="/signup" className="text-blue-500 hover:underline">
                    Signup
                </Link>
            </p>
        </div>
    );
};

export default LoginPage;
