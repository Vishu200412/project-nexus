import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GoogleSignUpButton from './GoogleSignUpButton';

const Signup = () => {
    const [formData, setFormData] = useState({
        username: '',
        createPassword: '',
        confirmPassword: '',
      });

      const [enableConfirmPassword, setEnableConfirmPassword] = useState(false);
      const [passwordError, setPasswordError] = useState('');
      const [confirmPasswordError, setconfirmPasswordError] = useState('');

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
        console.log(formData.username)

        if(name === 'createPassword'){
            const hasNumber = /\d/.test(value);
            const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);
            const hasUppercase = /[A-Z]/.test(value);
    
            console.log(formData.createPassword)

            if (!((hasNumber && hasSpecialChar && hasUppercase && value.length >= 8 ) || value.length===0)) {
                setPasswordError(
                  'Password must contain at least one number, one special character, one uppercase letter, and be at least 8 characters long.'
                );
                setEnableConfirmPassword(false);
              } else {
                setEnableConfirmPassword(value.length > 0);
                setPasswordError('');
              }
            }

        if (name === 'confirmPassword') {
            console.log(formData.confirmPassword)
           if((formData.createPassword !== value) && (value.length !== 0)){
             setconfirmPasswordError(
                'Passwords do not match.'
             )
           }else{
            setconfirmPasswordError('');
           } 
          }
        };


    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-500 to-indigo-600 text-black">
            <div className="bg-white p-8 rounded md:w-96 lg:w-80 xl:w-96 sm:w-full">
                <h2 className="text-2xl font-bold mb-4">Signup</h2>
                <form>
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
                <div className='mb-4'>
                <input
                    type="password"
                    id="createPassword"
                    name="createPassword"
                    value={formData.createPassword}
                    onChange={handleChange}
                    className="w-full border p-2 rounded text-black"
                    placeholder="Create Password"
                /> 
                <p className="text-red-500 text-sm">{passwordError}</p>
                </div>
                
                <div className="mb-4">
                <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    readOnly={!enableConfirmPassword}
                    className={`w-full border p-2 rounded ${
                    !enableConfirmPassword ? 'bg-gray-200 cursor-not-allowed' : 'text-black'
                    }`}
                    placeholder="Confirm Password"
                />
                <p className="text-red-500 text-sm">{confirmPasswordError}</p>
                
                </div>
            
                <button
                    type="submit"
                    className="bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-600"
                >
                    Signup
                </button>
                <p className="text-center mt-4">
                    Already have an account?{' '}
                    <Link to="/" className="text-blue-500 hover:underline">
                        Login
                    </Link>
                </p>
                </form>
                <div className="mt-6">
                    <GoogleSignUpButton />
                </div>
            </div>
        </div>
    )
};

export default Signup;