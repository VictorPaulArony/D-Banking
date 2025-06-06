import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { SiShopware } from 'react-icons/si'
import { MdOutlineCancel } from 'react-icons/md'
import { links } from '../data/dummy'
import { useStateContext } from '../context/ContextProvider'

const Sidebar = () => {
    const { activeMenu, setActiveMenu } = useStateContext();
    

    const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-dark bg-light-gray text-md m-2';
    const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-400 dark:hover:text-black hover:bg-light-gray m-2';

    return (
        <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
            {activeMenu && (<>
                <div className='flex justify-between items-center'>
                    <Link to='/' onClick={() => setActiveMenu(false)}
                        className='items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-dark text-slate-900' >
                        <SiShopware /> <span>Shoppy</span>
                    </Link>
                    {/* <div className='toolkit '> */}
                    <button type='button'
                        onClick={() => setActiveMenu((prevActiveMenu) => 
                           !prevActiveMenu )}
                        className='text-xl p-3 hover:drop-shadow-xl hover:bg-light-gray mt-4 block md:hidden text-dark' >
                        <MdOutlineCancel />
                    </button>
                </div>
                <div className='mt-10'>
                    {links.map((item) => (
                        <div key={item.title}>
                            <p className='text-gray-600 m-3 mt-4 uppercase'>{item.title}</p>
                            {item.links.map((link) => (
                                <NavLink
                                    to={`/${link.name}`}
                                    key={link.name}
                                    onClick={() => { }}
                                    className={({ isActive }) =>
                                        isActive ? activeLink : normalLink}
                                >
                                    {link.icon}
                                    <span className='capitalize'>{link.name}</span>

                                </NavLink>
                            ))}
                        </div>
                    ))}
                </div>

                {/* </div> */}
            </>

            )}
        </div>
    );
}

export default Sidebar