import { useContext } from 'react'
import './index.css'
import { ThemeContext } from '../../context/ThemeContext'

import {MdDarkMode} from 'react-icons/md'
import {CiDark, CiLight} from 'react-icons/ci'

export default function Navbar(props) {
    const val = useContext(ThemeContext)
    return (
        <>
            <div className="shadow-md bg-white dark:bg-dark flex items-center justify-between sticky top-0 z-50 px-4 lg:px-72 py-4">
                <div>
                    <h1 className=' font-bold text-3xl text-blackFont dark:text-lightWhite'>&lt;Sanet/&gt;</h1>
                </div>
                <ul className="nav-links text-grayFont dark:text-gray-50 space-x-4 lg:flex items-center group hidden">
                    <li><a className='hover:border-b-2 hover:border-violet-300 cursor-pointer'>Home</a></li>
                    <li><a className='hover:border-b-2 hover:border-violet-300 cursor-pointer'>About</a></li>
                    <li><a className='hover:border-b-2 hover:border-violet-300 cursor-pointer'>Projects</a></li>
                    <li className='text-white px-4 py-1 rounded-full bg-violet-700 cursor-pointer'><a>Contact</a></li>
                    <li>
                        <button onClick={val.toggleTheme} className='flex items-center justify-center text-xl font-medium'>
                        {val.isDark?<CiLight/>:<CiDark/>}
                        </button>
                    </li>
                </ul>
                <ul className='flex lg:hidden dark:text-gray-50'>
                    <li>
                        <button onClick={val.toggleTheme} className='flex items-center justify-center text-xl font-medium'>
                        {val.isDark?<CiLight/>:<CiDark/>}
                        </button>
                    </li>
                </ul>
            </div>
        </>
    )

}
