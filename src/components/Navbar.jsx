import React, { useState } from 'react'
import { AiFillShopping, AiOutlineMenu } from 'react-icons/ai'
import { FiShoppingCart } from 'react-icons/fi'
import { BsChatLeft } from 'react-icons/bs'
import { RiNotification3Line } from 'react-icons/ri'
import { MdKeyboardArrowDown } from 'react-icons/md'

import avart from '../data/avatar.jpg'
import { Cart, Chat, Notification, UserProfile } from '.'
import { useStateContext } from '../context/ContextProvider'


const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
    <button type='button' onClick={customFunc}
        name={title}
        style={{ color }}
        className='relative text-xl rounded-full p-3 hover:bg-light-gray'
    >
        <span style={{ background: dotColor }} className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2' />
        {icon}
    </button>
)

const Navbar = () => {
    const { activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick } = useStateContext();



    return (
        <div className='flex justify-between p-2 md:mx-4 relative'>
            <NavButton
                title='Menu'
                customFunc={() =>
                    setActiveMenu((prevActiveMenu) =>
                        !prevActiveMenu)} color="blue" icon={<AiOutlineMenu />} />
            <div className='flex'>
                <NavButton
                    title='Cart'
                    customFunc={() => handleClick('cart')}
                    color="blue"
                    icon={<FiShoppingCart />}
                />
                <NavButton
                    title='Chat'
                    dotColor={'#03C9D7'}
                    customFunc={() => handleClick('chat')}
                    color="blue"
                    icon={<BsChatLeft />}
                />
                <NavButton
                    title='notifications'
                    dotColor={'#03C9D7'}
                    customFunc={() => handleClick('notification')}
                    color="blue"
                    icon={<RiNotification3Line />}
                />
            </div>
            <div className='flex gap-2 item-center cursor-pointer p-1 hover:bg-light-gray rounded-lg'
                onClick={() => handleClick('userProfile')}>
                <img className='w-8 h-8 rounded-full' src={avart} alt="avatar" />
                <p className='font-semibold capitalize'>
                    <span className='text-gray-400 text-14'>Hi,  </span> {' '}
                    <span className='text-gray-400 font-bold ml-1 text-14'>Viarony</span>
                </p>
                <MdKeyboardArrowDown 
                className='text-gray-400 text-14'
                />
                {isClicked.cart && <Cart />}
                {isClicked.chat && <Chat />}
                {isClicked.notification && <Notification />}
                {isClicked.userProfile && <UserProfile />}
            </div>
        </div>
    );
}

export default Navbar