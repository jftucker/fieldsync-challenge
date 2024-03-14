import { Box } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

const Layout = () => {
  return (
    <>
      <NavBar />
      <Box padding={'20px'} id='main'>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
