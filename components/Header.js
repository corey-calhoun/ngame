import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import logo from '../img/logo.png'
import myLogo from '../img/my-logo.png'

import { AiOutlineMenu } from "react-icons/ai";

function Header() {
    return (
        <HeaderContainer className='flex sticky top-0 w-full z-100 items-center font-semibold p-5 justify-center border-b-2 bg-gray-800'>
            <div className='flex items-center  flex-shrink-0 md:w-1/2 lg:w-1/3 xl:w-1/3 p-4 '>
                <Image
                    src={logo}
                    width={100}
                    height={80}
                    alt='logo'
                    objectFit='cover'
                    className=' cursor-pointer'
                />
                <input
                    className='text-black p-2 rounded-xl mx-4 focus:outline-none w-full h-12 text-xl'
                    type='text'
                    placeholder='Search'
                />
            </div>
            <div className='hidden md:flex lg:flex xl:flex items-center  p-5 space-x-4 md:text-lg lg:text-xl xl:text-2xl mx-auto'>
                <h1 className='cursor-pointer'>Home</h1>
                <h1 className='cursor-pointer'>Explore Now</h1>
                <h1 className='cursor-pointer'>About Us</h1>
                <button
                    className='bg-indigo-700 p-2 rounded-lg animate-pulse shadow-md  cursor-pointer'
                    onClick={() => alert('Login')}
                >
                    GO LIVE
                </button>
            </div>
            <div className='hidden md:flex lg:flex xl:flex items-center mr-10  cursor-pointer'>
                <Image
                    src={myLogo}
                    width={50}
                    height={50}
                    alt='avatar'
                    className='rounded-full'
                    onClick={() => alert('Login')}

                />
            </div>
            <div className=' md:hidden lg:hidden xl:hidden cursor-pointer'>
                <AiOutlineMenu
                    className='text-4xl mx-3 h-12 '
                    onClick={() => alert('Login')}
                />
            </div>

        </HeaderContainer>
    )
}

export default Header

const HeaderContainer = styled.header`
    width: 100%;
    z-index: 100;
`;