import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import PostAction from './PostAction';

import { MdFavoriteBorder, MdComment, MdShare, MdSend } from "react-icons/md";

let date = new Date().toLocaleDateString().slice(0, 10).replace(/-/g, '/');

function FeedPost() {
    return (
        <PostContainer className='p-5 md:p-10'>
            <PostUserInfo className='flex mb-4'>
                <Image
                    src="https://cdn3.iconfinder.com/data/icons/avatar-47/64/person-avatar-male-man-2-512.png"
                    width={45}
                    height={45}
                    alt="profile"
                    className='rounded-full'
                    objectFit="cover"
                />
                <div className='ml-4'>
                    <h4 className='font-semibold text-xl'>User Name</h4>
                    <p className='text-lg'>{date}</p>
                </div>


            </PostUserInfo>
            <PostContent className='text-lg mb-2 z-10'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo corporis debitis reiciendis fuga iste placeat perferendis nesciunt, ex voluptatem error, saepe quibusdam accusantium exercitationem voluptatibus, impedit corrupti maiores magnam incidunt.
            </PostContent>
            <PostOptions className='flex justify-evenly w-full'>
                <PostAction Icon={MdFavoriteBorder} title="Like" color="#ff2a6d" />
                <PostAction Icon={MdComment} title="Comment" color="gray" />
                <PostAction Icon={MdShare} title="Share" color="orange" />
                <PostAction Icon={MdSend} title="Send" color="#005678" />
            </PostOptions>

        </PostContainer>
    )
}

export default FeedPost

const PostContainer = styled.div`
    border: 1px solid #e6e6e6 !important;
    border-radius: 8px;
`;

const PostUserInfo = styled.div``;

const PostContent = styled.section``;

const PostOptions = styled.section``;