import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle, FaGithub } from 'react-icons/fa'
import { AuthContext } from '../Providers/AuthProvider';
import { toast } from 'react-hot-toast';


const LoginForm = () => {

    const { LoginUser, GoogleSignIn, GithubSignIn } = useContext(AuthContext);

    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from.pathname || '/cheifs/:id';

    const HandleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        // sign in user
        LoginUser(email, password)
            .then((result) => {
                const LoggedUser = result.user;
                // console.log(LoggedUser);
                toast.success('Login Successfully');
                navigate(from, { replace: true });
                form.reset();

            })
            .catch((error) => {
                const errorMessage = error.message;
                toast.error(error.message);
                // console.log(errorMessage);
                form.reset();
            })
    }

    const HandleGoogleLogin = () => {
        GoogleSignIn()
            .then(result => {
                const loggerUser = result.user
                // console.log(loggerUser);
                toast.success("User Sign up successfully by google");
                navigate(from, { replace: true });
            })
            .catch(error => {
                const ErrorMessage = error.message;
                toast.error(error.message);
            })
    }

    const HandleGithubLogin = () => {
        GithubSignIn()
            .then(result => {
                const loggedUser = result.user;
                // console.log(loggedUser);
                toast.success("User Sign up successfully by github");
                navigate(from, { replace: true });
            })
            .catch(error => {
                const ErrorMessage = error.message;
                toast.error(error.message);
            })
    }

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }


    return (
        <div className="flex min-h-full flex-col justify-center px-4 py-8 lg:px-8 ">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-8 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
            </div>

            <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm p-4 md:p-7 rounded-lg shadow-md dark:border-2 dark:bg-gray-800 dark:border-gray-700'>


                {/* form */}
                <form onSubmit={HandleLogin} className='flex flex-col gap-5 mt-7'>
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
                                <input onChange={handleShowPassword} id="remember" aria-describedby="remember" type="checkbox" className="w-4 cursor-pointer h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
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
                            Login
                        </button>
                    </div>
                    <div className="mt-3 grid grid-cols-3 items-center text-gray-400">
                        <hr className="border-gray-400" />
                        <p className="text-center text-sm">OR</p>
                        <hr className="border-gray-400" />
                    </div>
                    <div className="input-button">
                        <button onClick={HandleGoogleLogin} type='button' className="button_custom rounded-md font-semibold">
                            Sign In with Google <FaGoogle className='h-6 w-9'></FaGoogle>
                        </button>
                    </div>
                    <div className="input-button ">
                        <button onClick={HandleGithubLogin} type='button' className="button_custom rounded-md font-semibold">
                            Sign In with Github <FaGithub className='h-6 w-9' ></FaGithub>
                        </button>
                    </div>
                </form>

                {/* bottom */}
                <div className="mt-7 mb-6 text-sm flex justify-between items-center text-[#002D74]">
                    <p>Don't have an account?</p>
                    <Link to="/register">
                        <button className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300">
                            Register
                        </button>
                    </Link>
                </div>


            </div>

        </div>
    )

};

export default LoginForm;


