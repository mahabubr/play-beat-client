import React from 'react';
import { useContext } from 'react';
import { HiMenu } from 'react-icons/hi';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../Assets/Logo.png'
import { UserContext } from '../../../Contexts/AuthContext/AuthContext';

const Header = () => {

    const { user, logOut } = useContext(UserContext)

    const [navbarOpen, setNavbarOpen] = React.useState(false);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log('Sign Out Complete');
            })
            .catch(e => console.log(e))
    }

    return (
        <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 mb-3">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                    <Link to='/'
                        className="text-2xl font-bold leading-relaxed mr-4 py-2 whitespace-nowrap uppercase flex justify-center items-center"
                    >
                        Play Beat
                        <img className='w-10 ml-3' src={logo} alt="" />
                    </Link>
                    <button
                        className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                        type="button"
                        onClick={() => setNavbarOpen(!navbarOpen)}
                    >
                        <HiMenu />
                    </button>
                </div>
                <div
                    className={
                        "lg:flex flex-grow items-center" +
                        (navbarOpen ? " flex" : " hidden")
                    }
                    id="example-navbar-danger"
                >
                    <ul className="flex justify-center bg-slate-300 w-full lg:w-fit lg:bg-white items-center flex-col lg:flex-row list-none lg:ml-auto">
                        <li className="nav-item">
                            <NavLink to='/' end
                                className={({ isActive }) => isActive
                                    ?
                                    'px-3 py-2 flex items-center text-lg uppercase font-bold leading-snug text-blue-600 border-b-2 border-blue-600'
                                    :
                                    'px-3 py-2 flex items-center text-lg uppercase font-bold leading-snug'
                                }
                            >
                                <p>Home</p>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/subscription' end
                                className={({ isActive }) => isActive
                                    ?
                                    'px-3 py-2 flex items-center text-lg uppercase font-bold leading-snug text-blue-600 border-b-2 border-blue-600'
                                    :
                                    'px-3 py-2 flex items-center text-lg uppercase font-bold leading-snug'
                                }
                            >
                                <p>Subscription</p>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/events' end
                                className={({ isActive }) => isActive
                                    ?
                                    'px-3 py-2 flex items-center text-lg uppercase font-bold leading-snug text-blue-600 border-b-2 border-blue-600 mr-8'
                                    :
                                    'px-3 py-2 flex items-center text-lg uppercase font-bold leading-snug mr-8'
                                }
                            >
                                <p>Events</p>
                            </NavLink>
                        </li>
                        {
                            user
                                ?
                                <li className="nav-item" onClick={handleLogOut}>
                                    <NavLink className='mr-4'>
                                        <button className="btn btn-accent">Log Out</button>
                                    </NavLink>
                                </li>
                                :
                                <li className="nav-item mr-4">
                                    <NavLink to='/login' className='mr-4'>
                                        <button className="btn btn-accent">Login</button>
                                    </NavLink>
                                </li>
                        }
                        <li className="nav-item">
                            <NavLink to='/admin'>
                                <button className="btn btn-outline btn-error">Admin</button>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;