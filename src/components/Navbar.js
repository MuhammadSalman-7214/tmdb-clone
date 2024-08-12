import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const isSmallScreen = useMediaQuery({ maxWidth: 810 }); // Adjust the breakpoint if needed

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div>
            <nav className="" style={{ backgroundColor: 'rgb(3, 37, 65)' }}>
                <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
                    
                    {/* Mobile menu button */}
                    {isSmallScreen && (
                        <div className="flex items-center w-full">
                            <button
                                onClick={toggleMobileMenu}
                                className="text-white mr-4"
                            >
                                <i className="fa-solid fa-bars"></i>
                            </button>
                            <a href="https://flowbite.com/" className="flex items-center mx-auto space-x-3 me-5 ps-5 rtl:space-x-reverse">
                                <Link to='/'><img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" className="h-9" alt="Flowbite Logo" /></Link>
                                
                            </a>
                            <div className={`flex items-center space-x-4 rtl:space-x-reverse ml-auto`}>
                                <a href="#" className="text-white text-sm "><i className="fa-solid fa-magnifying-glass"></i></a>
                                <a href="#" className="text-white text-sm">Login</a>
                            </div>
                        </div>
                    )}

                    {/* Desktop menu */}
                    {!isSmallScreen && (
                        <div className="flex items-center w-full">
                            <div className="flex items-center space-x-8 rtl:space-x-reverse w-full md:w-auto">
                                <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                                    <Link to='/'><img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" className="h-5" alt="Flowbite Logo" /></Link>
                                    
                                </a>
                                <ul className="hidden md:flex font-medium flex-row space-x-8 rtl:space-x-reverse">
                                    <li className="relative group">
                                        <a href="#" className="block py-2 px-3 text-sm text-white rounded md:bg-transparent md:p-0 dark:text-white">
                                            Movies
                                        </a>
                                        <div className="absolute z-10 mt-2 hidden group-hover:block w-48 bg-white rounded-lg shadow-md">
                                            <a href="#" className="block px-6 py-2 text-sm text-left">Popular</a>
                                            <a href="#" className="block px-6 py-2 text-sm text-left">Now Playing</a>
                                            <a href="#" className="block px-6 py-2 text-sm text-left">Upcoming</a>
                                            <a href="#" className="block px-6 py-2 text-sm text-left">Top Rated</a>
                                        </div>
                                    </li>
                                    <li className="relative group">
                                        <a href="#" className="block py-2 px-3 text-white text-sm rounded md:bg-transparent md:p-0 dark:text-white">
                                            TV Shows
                                        </a>
                                        <div className="absolute z-10 mt-2 hidden group-hover:block w-48 bg-white rounded-lg shadow-md">
                                            <a href="#" className="block px-6 py-2 text-sm text-left">Popular</a>
                                            <a href="#" className="block px-6 py-2 text-sm text-left">Airing Today</a>
                                            <a href="#" className="block px-6 py-2 text-sm text-left">On TV</a>
                                            <a href="#" className="block px-6 py-2 text-sm text-left">Top Rated</a>
                                        </div>
                                    </li>
                                    <li className="relative group">
                                        <a href="#" className="block py-2 px-3 text-white text-sm rounded md:bg-transparent md:p-0 dark:text-white">
                                            People
                                        </a>
                                        <div className="absolute z-10 mt-2 hidden group-hover:block w-48 bg-white rounded-lg shadow-md">
                                            <a href="#" className="block px-6 py-2 text-sm text-left">Popular People</a>
                                        </div>
                                    </li>
                                    <li className="relative group">
                                        <a href="#" className="block py-2 px-3 text-white text-sm rounded md:bg-transparent md:p-0 dark:text-white">
                                            More
                                        </a>
                                        <div className="absolute z-10 mt-2 hidden group-hover:block w-48 bg-white rounded-lg shadow-md">
                                            <a href="#" className="block px-6 py-2 text-sm text-left">Discussions</a>
                                            <a href="#" className="block px-6 py-2 text-sm text-left">Leaderboard</a>
                                            <a href="#" className="block px-6 py-2 text-sm text-left">Support</a>
                                            <a href="#" className="block px-6 py-2 text-sm text-left">API</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="flex items-center space-x-8 rtl:space-x-reverse ml-auto">
                                <ul className="flex font-medium flex-row space-x-8 rtl:space-x-reverse">
                                    <li>
                                        <a href="#" className="block py-2 px-3 mt-1 text-white text-sm font-bold rounded md:bg-transparent md:p-0 dark:text-white" aria-current="page">
                                            <i className="fa-solid fa-plus"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="block py-2 px-3 border border-white text-sm rounded text-white md:py-1 md:px-2 dark:text-white dark:hover:text-white md:dark:hover:bg-transparent">
                                            EN
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="block py-2 px-3 mt-1 text-white text-sm rounded md:p-0 dark:text-white dark:hover:text-white md:dark:hover:bg-transparent">
                                            Login
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="block py-2 px-3 mt-1 text-white text-sm rounded md:p-0 dark:text-white dark:hover:text-white md:dark:hover:bg-transparent">
                                            Join TMDB
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="block py-2 px-3 mt-1 text-white text-sm rounded md:p-0 dark:text-white dark:hover:text-white md:dark:hover:bg-transparent">
                                            <i className="fa-solid fa-magnifying-glass"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )}

                    {/* Mobile drawer menu */}
                    {isSmallScreen && (
                        <div 
                            className={`fixed inset-0 top-16 p-4 md:hidden z-50 w-4/5 transition-transform transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`} 
                            style={{ backgroundColor: 'rgb(3, 33, 65)' }}
                        >
                            
                            <ul className="flex flex-col space-y-4 mt-4 text-left ps-3">
                                <li><a href="#" className="text-white font-bold">Movies</a></li>
                                <li><a href="#" className="text-white font-bold">TV Shows</a></li>
                                <li><a href="#" className="text-white font-bold">People</a></li>
                                <li><a href="#" className="text-gray-400">Contribution Bible</a></li>
                                <li><a href="#" className="text-gray-400">Discussions</a></li>
                                <li><a href="#" className="text-gray-400">Leaderboard</a></li>
                                <li><a href="#" className="text-gray-400">API</a></li>
                                <li><a href="#" className="text-gray-400">Support</a></li>
                                <li><a href="#" className="text-gray-400">About</a></li>
                                <li><a href="#" className="text-gray-400">Login</a></li>
                            </ul>
                        </div>
                    )}
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
