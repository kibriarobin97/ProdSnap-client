import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';
import { FaEye, FaEyeSlash } from "react-icons/fa";


const Login = () => {

    const [showPass, setShowPass] = useState(false)


    const { loginUser, googleLogin } = useContext(AuthContext)

    const location = useLocation()
    const navigate = useNavigate()

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')

        //login user
        loginUser(email, password)
            .then(() => {
                toast.success('Successfully login!')

                //navigate use after login
                navigate(location?.state ? location.state : '/')
            })
            .catch(() => {
                toast.error("Incorrect Email and Password")
            })
    }

    // login with google
    const handleGoogle = () => {
        googleLogin()
            .then(() => {
                toast.success("Successfully login with google")
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                toast.error(error.message);
            })
    }
    return (
        <div className="w-full max-w-md mx-auto min-h-[calc(100vh-353px)] p-8 space-y-3 rounded-xl text-black">
            <h1 className="text-2xl font-bold text-center">Please Login</h1>
            <p className="text-sm text-center text-gray-500">Login to access your account</p>
            <form
                onSubmit={handleLogin}
                className="space-y-6">
                <div className="space-y-1 text-sm">
                    <label htmlFor="email" className="block text-black">Email</label>
                    <input type="email" name="email" id="email" required placeholder="Your Email" className="w-full px-4 py-3 rounded-md border-gray-700  text-black focus:border-violet-400" />
                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="password" className="block text-black">Password</label>
                    <div className="relative">
                        <input
                            type={showPass ? "text" : "password"}
                            name="password" id="password" required placeholder="Password" className="w-full px-4 py-3 rounded-md border-gray-700 text-black focus:border-violet-400" />
                        <span onClick={() => setShowPass(!showPass)} className="absolute top-3 right-2">
                            {
                                showPass ? <FaEyeSlash className="text-xl" /> : <FaEye className="text-xl" />
                            }
                        </span>
                    </div>
                    <div className="flex justify-end text-xs text-blue-500">
                        <a rel="noopener noreferrer" href="#">Forgot Password?</a>
                    </div>
                </div>
                <button className="block w-full p-3 text-center bg-primary rounded-md font-bold text-white">Login</button>
            </form>
            <div className="flex items-center pt-4 space-x-1">
                <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
                <p className="px-3 text-sm text-black">Login with social accounts</p>
                <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
            </div>
            <div className="flex justify-center space-x-4">
                <button
                    onClick={handleGoogle}
                    aria-label="Log in with Google" className="p-3 rounded-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                        <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                    </svg>
                </button>
            </div>
            <p className="text-xs text-center sm:px-6 text-black">Do not have an account?
                <Link to='/register' className="underline text-primary"> Register</Link>
            </p>
        </div>
    );
};

export default Login;