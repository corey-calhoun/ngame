import React from 'react'
import styled from 'styled-components';

function PostAction({ Icon, title, color }) {
    return (
        <PostActionContainer className='flex items-center justify-center cursor-pointer text-xl p-4'>
            <Icon style={{ color: color }} />
            <h4 className='ml-1'>{title}</h4>
        </PostActionContainer>
    )
}

export default PostAction

const PostActionContainer = styled.div`
    width: 100%;
    
    :hover {
        background-color: rgba(0, 0, 0, 0.48);
        border-radius: 8px;
        box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.48);
    }
`;