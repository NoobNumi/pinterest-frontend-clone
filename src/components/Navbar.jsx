import { useState, useEffect, useRef } from 'react';
import logo from '../assets/logo.png';

function Navbar() {
    const [isActive, setIsActive] = useState(false);
    const searchRef = useRef(null);
    const closeSearch = useRef(null);

    const handleClickInside = (event) => {
        if (searchRef.current && searchRef.current.contains(event.target)) {
            setIsActive(true);
        }
    };

    const handleClickOutside = (event) => {
        if (searchRef.current && !searchRef.current.contains(event.target)) {
            setIsActive(false);
        }
    };

    const handleCloseSearch = (event) => {
        event.stopPropagation();
        setIsActive(false);
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);

    useEffect(() => {
        const closeSearchRef = closeSearch.current;
        if (closeSearchRef) {
            closeSearchRef.addEventListener('click', handleCloseSearch);
        }
        return () => {
            if (closeSearchRef) {
                closeSearchRef.removeEventListener('click', handleCloseSearch);
            }
        };
    }, []);

    useEffect(() => {
        if (isActive) {
            searchRef.current.classList.add('search-box');
        } else {
            searchRef.current.classList.remove('search-box');
        }
    }, [isActive]);


    return (
        <nav className='flex items-center h-full w-full justify-between'>
            {/* Pinterest Logo */}
            <a href='/' className='hover:bg-slate-200 p-3 rounded-full logo'>
                <img src={logo} alt="logo" />
            </a>

            {/* Home and Create buttons */}
            <ul className='flex items-center justify-between'>
                <li className='ms-2 active'>
                    <a href="/" className='nav-link font-semibold btn bg-black text-white rounded-full p-3'>
                        Home
                    </a>
                </li>
                <li className=''>
                    <a href="/create" className='font-semibold nav-link p-3'>
                        Create
                    </a>
                </li>
            </ul>

            {/* Search button */}
            <div
                ref={searchRef}
                className={`ms-3 bg-slate-100 rounded-full w-full flex items-center ${isActive ? 'border-blue-600' : ''}`}
                onClick={handleClickInside}
                tabIndex="0"
                id='searchBox'
            >
                <i className={`fa-solid fa-magnifying-glass ms-1 me-2 font-semibold text-slate-500 p-4 pe-0 search-icon ${isActive ? 'hidden' : ''}`}></i>
                <input
                    type="text"
                    className={`form-control bg-transparent placeholder:text-slate-500 outline-none border-none w-full ${isActive ? 'ps-4' : ''}`}
                    placeholder="Search"
                />
                <button ref={closeSearch} className={`rounded-full hover:bg-slate-200 closeSearch ${isActive ? '' : 'hidden'}`}>
                    <i className="fa-solid fa-circle-xmark cursor-pointer text-1xl p-4"></i>
                </button>
            </div>

            {/* Profile, Notifications and Messages */}
            <div className='flex items-center justify-between w-1/6 px-4'>
                <a href="" className='font-semibold text-xl me-6'>
                    <i className="fa-solid fa-bell text-slate-500 text-2xl"></i>
                </a>
                <a href="" className='font-semibold text-xl me-6'>
                    <i className="fa-solid fa-comment-dots text-slate-500 text-2xl"></i>
                </a>
                <a href="" className='font-semibold flex items-center w-full gap-4'>
                    <img src="https://i.pinimg.com/736x/38/95/c3/3895c3e1f343ad6ee48e3de9d5afa766.jpg" alt="avatar" className=' h-7 w-auto rounded-full'>
                    </img>
                    <i className="fa-solid fa-angle-down cursor-pointer"></i>
                </a>
            </div>
        </nav>
    );
}

export default Navbar;
