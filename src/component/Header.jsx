import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import defaultProfile from "../assets/user.png"

const Header = () => {

    const { user, logOut } = useContext(AuthContext)

    const navLinks = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
    </>

    const handleLogOut = () => {
        logOut()
            .then(() => console.log('log out'))
            .catch(error => console.error(error))
    }

    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">ProdSnap</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div>
                {
                    user ? <div className="flex justify-center items-center gap-3">
                        <div>
                            <button onClick={handleLogOut} className="btn btn-sm btn-primary font-bold">Logout</button>
                        </div>
                        <div className="w-10 rounded-full">
                            <img
                                alt="Profile Picture"
                                className="rounded-full"
                                src={user?.photoURL || defaultProfile} />
                        </div>
                    </div>
                        :
                        <Link to='/login'>
                            <button className="btn btn-sm btn-primary font-bold">Login</button>
                        </Link>
                }
            </div>
        </div>
    );
};

export default Header;