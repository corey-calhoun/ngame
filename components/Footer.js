import React from 'react'
import styled from 'styled-components';

function Footer() {
    return (
        <FooterContainer className='bottom-0 fixed h-1/5 w-full bg-gray-800 flex-col'>
            <FooterContents className='flex flex-cols-3 justify-evenly mt-10'>
                <FooterInfo>
                    <h2 className='font-bold text-xl mb-4'>Services</h2>
                    <h4>Lorem Ipsum</h4>
                    <h4>Lorem Ipsum</h4>
                    <h4>Lorem Ipsum</h4>
                    <h4>Lorem Ipsum</h4>
                </FooterInfo>
                <FooterInfo>
                    <h2 className='font-bold text-xl mb-4'>Company</h2>
                    <h4>Lorem Ipsum</h4>
                    <h4>Lorem Ipsum</h4>
                    <h4>Lorem Ipsum</h4>
                    <h4>Lorem Ipsum</h4>
                </FooterInfo>
                <FooterInfo>
                    <h2 className='font-bold text-xl mb-4'>Contact Us</h2>
                    <h4>Lorem Ipsum</h4>
                    <h4>Lorem Ipsum</h4>
                    <h4>Lorem Ipsum</h4>
                    <h4>Lorem Ipsum</h4>
                </FooterInfo>
            </FooterContents>
            <FooterCopy>
                <p className='text-center text-gray-500 py-4 items-center'>Designed and Maintained by <strong><a href="#">TrashPanda</a></strong> &copy; 2020</p>
            </FooterCopy>
        </FooterContainer>
    )
}

export default Footer

const FooterContainer = styled.footer``;

const FooterContents = styled.div``;

const FooterInfo = styled.div`
    h2 { 
        display: flex;
        font-size: 1.2rem;
        justify-content: center;
    }

    h4 {
        font-size: 1.2rem;
        cursor: pointer;
    }
`;

const FooterCopy = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    margin-top: 10px;
`;