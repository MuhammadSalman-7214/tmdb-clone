import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
    const isSmallScreen = useMediaQuery({ maxWidth: 810 });

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const toggleSearchBar = () => {
        setIsSearchBarOpen(!isSearchBarOpen);
    };

    return (
        <div>
            <nav style={{ backgroundColor: 'rgb(3, 37, 65)' }}>
                <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
                    
                    

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
                                        <div className="absolute z-10 py-2 hidden group-hover:block group-focus:block w-48 bg-white rounded-lg shadow-md">
                                            <Link to="#" className="block px-6 py-2 text-sm text-left hover:bg-gray-100">Popular</Link>
                                            <a href="#" className="block px-6 py-2 text-sm text-left hover:bg-gray-100">Now Playing</a>
                                            <a href="#" className="block px-6 py-2 text-sm text-left hover:bg-gray-100">Upcoming</a>
                                            <a href="#" className="block px-6 py-2 text-sm text-left hover:bg-gray-100">Top Rated</a>
                                        </div>
                                    </li>
                                    <li className="relative group">
                                        <a href="#" className="block py-2 px-3 text-white text-sm rounded md:bg-transparent md:p-0 dark:text-white">
                                            TV Shows
                                        </a>
                                        <div className="absolute z-10 py-2 hidden group-hover:block group-focus:block w-48 bg-white rounded-lg shadow-md">
                                            <a href="#" className="block px-6 py-2 text-sm text-left hover:bg-gray-100">Popular</a>
                                            <a href="#" className="block px-6 py-2 text-sm text-left hover:bg-gray-100">Airing Today</a>
                                            <a href="#" className="block px-6 py-2 text-sm text-left hover:bg-gray-100">On TV</a>
                                            <a href="#" className="block px-6 py-2 text-sm text-left hover:bg-gray-100">Top Rated</a>
                                        </div>
                                    </li>
                                    <li className="relative group">
                                        <a href="#" className="block py-2 px-3 text-white text-sm rounded md:bg-transparent md:p-0 dark:text-white">
                                            People
                                        </a>
                                        <div className="absolute z-10 py-2 hidden group-hover:block group-focus:block w-48 bg-white rounded-lg shadow-md">
                                            <Link to="/person" className="block px-6 py-2 text-sm text-left hover:bg-gray-100">Popular People</Link>
                                        </div>
                                    </li>
                                    <li className="relative group">
                                        <a href="#" className="block py-2 px-3 text-white text-sm rounded md:bg-transparent md:p-0 dark:text-white">
                                            More
                                        </a>
                                        <div className="absolute z-10 py-2 hidden group-hover:block group-focus:block w-48 bg-white rounded-lg shadow-md">
                                            <a href="#" className="block px-6 py-2 text-sm text-left hover:bg-gray-100">Discussions</a>
                                            <a href="#" className="block px-6 py-2 text-sm text-left hover:bg-gray-100">Leaderboard</a>
                                            <a href="#" className="block px-6 py-2 text-sm text-left hover:bg-gray-100">Support</a>
                                            <a href="#" className="block px-6 py-2 text-sm text-left hover:bg-gray-100">API</a>
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
                                        <a href="#" className="block py-2 px-3 border border-white text-sm rounded hover:bg-white hover:text-black text-white md:py-1 md:px-2 dark:text-white dark:hover:text-white md:dark:hover:bg-transparent">
                                            EN
                                        </a>
                                    </li>
                                    <li>
                                        <Link to="/login" className="block py-2 px-3 mt-1 text-white text-sm rounded md:p-0 dark:text-white dark:hover:text-white md:dark:hover:bg-transparent">
                                            Login
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/signup" className="block py-2 px-3 mt-1 text-white text-sm rounded md:p-0 dark:text-white dark:hover:text-white md:dark:hover:bg-transparent">
                                            Join TMDB
                                        </Link>
                                    </li>
                                    {!isSearchBarOpen && (
                                        <li>
                                            <button
                                                onClick={toggleSearchBar}
                                                className="block  px-3  text-white text-sm rounded md:p-0 dark:text-white dark:hover:text-white md:dark:hover:bg-transparent"
                                            >
                                                <i className="fa-solid fa-magnifying-glass text-lg text-blue-300"></i>
                                            </button>
                                        </li>

                                    ) }
                                    {isSearchBarOpen && (
                                        <li>
                                            <button
                                                onClick={toggleSearchBar}
                                                className="block  px-3  text-white text-sm rounded md:p-0 dark:text-white dark:hover:text-white md:dark:hover:bg-transparent"
                                            >
                                                <i class="fa-solid fa-xmark text-xl text-blue-300 "></i>
                                            </button>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    )}

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
                            <div className="flex items-center space-x-4 rtl:space-x-reverse ml-auto">
                                <button
                                    onClick={toggleSearchBar}
                                    className="text-white text-sm"
                                >
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </button>
                                <Link to="/login" className="text-white text-sm">Login</Link>
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
                                <li><Link to="/person" className="text-white font-bold">People</Link></li>
                                <li><a href="#" className="text-white font-bold">More</a></li>
                                <li><Link to="/login" className="text-white font-bold">Login</Link></li>
                            </ul>
                        </div>
                    )}
                </div>
            </nav>

            {/* Search Bar */}
            {isSearchBarOpen && (
                <div className="fixed inset-x-0 top-15 bg-white py-2 text-white z-20">
                <div className='flex '>
                    <i class="fa-solid fa-magnifying-glass text-black mt-1  pl-20 pr-4"></i>
                    <input
                        type="text"
                        placeholder="Search for a movie, tv show, person..."
                        className="w-full  rounded bg-white border-0 text-black"
                    />

                </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
