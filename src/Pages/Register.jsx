import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import toast from 'react-hot-toast';


const Register = () => {

    const [showPass, setShowPass] = useState(false)

    const { createUser, updateUserProfile } = useContext(AuthContext)

    const navigate = useNavigate()

    const handleRegister = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const photo = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')

        const passReg = /^(?=.*[a-z])(?=.*[A-Z]).+$/;

        if (password.length < 6) {
            toast.error("password should be at least 6 characters or longer")
            return;
        }

        if (!passReg.test(password)) {
            toast.error("password must be an Uppercase and a Lowercase")
            return;
        }

        //create user
        createUser(email, password)
            .then(() => {
                updateUserProfile(name, photo)
                    .then(() => {
                        toast.success("Successfully created account")
                        navigate('/')
                    })

            })
            .catch(error => {
                toast.error(error.message)
            })

    }

    return (
        <div className="max-w-md mx-auto min-h-[calc(100vh-353px)] p-8 space-y-3 rounded-xl text-black">
            <h1 className="text-2xl font-bold text-center">Register Now</h1>
            <p className="text-sm text-center text-gray-500">Register to create a account</p>
            <form 
            onSubmit={handleRegister}
            className="space-y-6">
                <div className="space-y-1 text-sm">
                    <label htmlFor="name" className="block text-black">Name</label>
                    <input type="text" name="name" id="name" required placeholder="Your Name" className="w-full px-4 py-3 rounded-md border-gray-700  text-black focus:border-violet-400" />
                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="photo" className="block text-black">Photo URL</label>
                    <input type="text" name="photo" id="photo" placeholder="Your Photo URL" className="w-full px-4 py-3 rounded-md border-gray-700  text-black focus:border-violet-400" />
                </div>
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
                </div>
                <button className="block w-full p-3 bg-primary text-center rounded-md font-bold text-white">Register</button>
            </form>
            <p className="text-xs text-center sm:px-6 text-black">Already have an account?
                <Link to='/login' className="underline text-primary"> Login</Link>
            </p>
        </div>
    );
};

export default Register;