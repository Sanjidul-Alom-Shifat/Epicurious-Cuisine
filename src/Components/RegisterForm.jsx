import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import { toast } from 'react-hot-toast';

const RegisterForm = () => {

    const { CreateUser, UpdateUserData, LogOutUser } = useContext(AuthContext);

    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    const HandleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(form, name, photo, email, password);

        if (password.length < 6) {
            toast.error('Please add more then 6 character in password field');
            return;
        }

        // create user
        CreateUser(email, password)
            .then((result) => {
                const CreatedUser = result.user;
                // console.log(CreatedUser);
                toast.success('Registration Successfully');
                form.reset();
                // UpdateUserData(result.user, name, photo);
                UpdateProfile(result.user, name, photo);
                LogOutUser()
                    .then(() => {
                        // Sign-out successful.
                        // toast.success('Log Out Successfully');
                    })
                    .catch((error) => {
                        // An error happened.
                        toast.error(error.message);
                    });
                navigate('/login');
            })
            .catch((error) => {
                const ErrorMessage = error.message;
                toast.error(error.message);
                // console.log(ErrorMessage);
                form.reset();
            })

        const UpdateProfile = (user, name, photo) => {
            UpdateUserData(user, {
                displayName: name,
                photoURL: photo
            })
                .then(() => {
                    // Profile updated!
                    // ...
                }).catch((error) => {
                    // An error occurred
                    // ...
                });
        }
    }

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }



    return (
        <div className="flex min-h-full flex-col justify-center px-4 py-8 lg:px-8 ">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-8 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign up to your account</h2>
            </div>

            <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm p-4 md:p-7 rounded-lg shadow-md dark:border-2 dark:bg-gray-800 dark:border-gray-700'>


                {/* form */}
                <form onSubmit={HandleRegister} className='flex flex-col gap-5 mt-7'>
                    <div>
                        <label htmlFor="name" className="block mb-3 text-xm font-medium text-gray-900 dark:text-white">Name</label>
                        <div className="input_group ">
                            <input
                                type="text"
                                name='name'
                                placeholder='Name'
                                className="input_text"
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-3 text-xm font-medium text-gray-900 dark:text-white">Email Address</label>
                        <div className="input_group ">
                            <input
                                type="email"
                                name='email'
                                placeholder='Email'
                                className="input_text"
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="photo" className="block mb-3 text-xm font-medium text-gray-900 dark:text-white">Photo </label>
                        <div className="input_group ">
                            <input
                                type="text"
                                name='photo'
                                placeholder='Photo URL'
                                className="input_text"
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-3 text-xm font-medium text-gray-900 dark:text-white">Password</label>
                        <div className="input_group">
                            <input
                                type={showPassword ? "text" : "password"}
                                name='password'
                                placeholder='password'
                                className="input_text"
                                required
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input onChange={handleShowPassword} id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border cursor-pointer border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
                            </div>
                            <div className="ml-3 text-sm">
                                <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Show Password</label>
                            </div>
                        </div>
                        <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                    </div>

                    {/* login buttons */}
                    <div className="input-button">
                        <button type='submit' className="button">
                            Register
                        </button>
                    </div>
                    <div className="mt-3 grid grid-cols-3 items-center text-gray-400">
                        <hr className="border-gray-400" />
                        <p className="text-center text-sm">OR</p>
                        <hr className="border-gray-400" />
                    </div>

                </form>

                {/* bottom */}
                <div className="mt-7 mb-6 text-sm flex justify-between items-center text-[#002D74]">
                    <p>Already have an account?</p>
                    <Link to="/login">
                        <button className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300">
                            Login
                        </button>
                    </Link>
                </div>


            </div>

        </div>
    );
};

export default RegisterForm;