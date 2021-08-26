import React from 'react'
import styled from 'styled-components';
import Image from 'next/image'

import { GiBalaclava } from 'react-icons/gi'

function Sidebar() {
    return (
        <SidebarContainer className='sm:hidden md:flex-col w-1/3 py-10 rounded-lg left-10 shadow-md h-1/2 bg-yellow-500 fixed'>
            <SidebarHeader>
                <Image
                    src="https://www.nj.com/resizer/h8MrN0-Nw5dB5FOmMVGMmfVKFJo=/450x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg"
                    width={100}
                    height={100}
                    alt="profile"
                    className='rounded-full'
                />
                <SidebarTitle>
                    John Doe
                </SidebarTitle>
                <OnlineStatus className='flex items-center'>
                    <GiBalaclava />
                    <p>Online</p>
                </OnlineStatus>
            </SidebarHeader>
        </SidebarContainer>
    )
}

export default Sidebar

const SidebarContainer = styled.div`
    z-index: 1;
`;

const SidebarHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center !important;
    
`;

const SidebarTitle = styled.title`
   display: flex;
   font-size: 1.5rem;
   font-weight: semi-bold;
`;

const OnlineStatus = styled.div`
    color: green;
    font-size: 28px;

    p {
        font-size: 14px;
    }
`;