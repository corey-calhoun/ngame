import styled from 'styled-components';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MainFeed from '../components/MainFeed';
import Sidebar from '../components/Sidebar';


function index() {


  return (
    <AppContainer className='flex-col bg-gray-700 w-full h-screen text-white overflow-y-auto '>
      <Header />

      <MainBody className='flex mt-8 relative '>
        <Sidebar />

        <MainFeed />


      </MainBody>

      <Footer />
    </AppContainer >
  )
}

export default index


const AppContainer = styled.div``;

const MainBody = styled.section``;