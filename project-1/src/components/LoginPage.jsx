import React from 'react';
import { Link } from 'react-router-dom'; 
import GoogleSignUpButton from './GoogleSignUpButton';

const LoginPage = () => {
    return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-500 to-indigo-600 text-black">
        <div className="bg-white p-8 rounded md:w-96 lg:w-80 xl:w-96 sm:w-full">
            <h2 className="text-2xl font-bold mb-4 text-black">Login</h2>
            <form>
                <div className="mb-4">

                    <input
                    type="text"
                    id="username"
                    name="username"
                    className="w-full border p-2 rounded text-black"
                    placeholder="Username"
                    />
                </div>
                <div className="mb-4">
                   
                    <input
                    type="password"
                    id="password"
                    name="password"
                    className="w-full border p-2 rounded text-black"
                    placeholder="Password"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-600"
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
            <div className="mt-6">
                <GoogleSignUpButton />
            </div>
        </div>
    </div>
  );
};

export default LoginPage;