import React from 'react'
import styled from 'styled-components';
import FeedPost from './FeedPost';

function MainFeed() {
    return (
        <FeedContainer className='flex-col w-2/3 lg:w-2/5 xl:w-2/5 h-full mr-10 rounded-sm space-y-4 absolute right-10'>
            <FeedPost />
            <FeedPost />
            <FeedPost />
            <FeedPost />
            <FeedPost />
        </FeedContainer>
    )
}

export default MainFeed

const FeedContainer = styled.div``;