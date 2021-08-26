import React from 'react'
import styled from 'styled-components';
import Image from 'next/image'
import { useSession, signIn } from 'next-auth/client';
import { useForm } from "react-hook-form";
import image1 from '../img/welcome_img.jpg';

function login() {
    return (
        <AppContainer className='bg-gray-700 w-full h-screen'>
            <ContentContainer className='flex p-20 w-3/4 text-white mx-auto h-3/4 justify-evenly items-center '>
                <LeftSide className='sm:hidden  flex flex-col items-center w-1/2 justify-center space-y-5 h-full'>
                    <Image src={image1} alt='image' />
                    <p className='text-lg px-5' >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, recusandae, sint officia voluptatibus provident quas distinctio illum, nisi placeat inventore?</p>
                </LeftSide>
                <RightSide className='flex flex-col items-center h-full w-1/2 space-y-5 justify-center' >
                    <button
                        className='bg-gray-100 py-4 px-10 text-black shadow-lg rounded-md font-semibold hover:bg-yellow-600 hover:text-white'
                        onClick={() => signIn("google")}
                    >
                        Sign in with Google
                    </button>
                    <button
                        className='bg-gray-100 py-4 px-8 text-black shadow-lg rounded-md font-semibold hover:bg-blue-600 hover:text-white'
                        onClick={() => signIn("facebook")}
                    >
                        Sign in with Facebook
                    </button>
                    <button
                        className='bg-gray-100 py-4 px-8 text-black shadow-lg rounded-md font-semibold hover:bg-red-600 hover:text-white'
                        onClick={() => signIn("instagram")}
                    >
                        Sign in with Instagram
                    </button>
                </RightSide>
            </ContentContainer>
        </AppContainer>
    )
}

export default login

const AppContainer = styled.div``;

const ContentContainer = styled.div``;

const LeftSide = styled.div``;

const RightSide = styled.div``;