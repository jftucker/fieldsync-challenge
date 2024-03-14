import { Button, HStack } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <HStack spacing={'24px'} paddingX={'24px'} paddingTop={'10px'}>
      <NavLink to='/'>
        <Button>Home</Button>
      </NavLink>
      <NavLink to='/fetch'>
        <Button>Saved Users</Button>
      </NavLink>
    </HStack>
  );
};

export default NavBar;
