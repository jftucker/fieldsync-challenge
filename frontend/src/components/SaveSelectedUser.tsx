import { Box, Button, Heading, Stack, StackDivider } from '@chakra-ui/react';
import { useContext } from 'react';
import SelectedUserContext from '../contexts/selectedUserContext';
import useAddUser from '../react-query/hooks/useAddUser';
import { Navigate } from 'react-router-dom';
import { Card, CardHeader, CardBody, CardFooter, Text } from '@chakra-ui/react';
import useUsers from '../react-query/hooks/useUsers';

const SaveSelectedUser = () => {
  const { selectedUser, dispatch } = useContext(SelectedUserContext);
  const addUser = useAddUser();
  if (!selectedUser) return <Navigate to='/' />;
  return (
    <Card>
      <CardHeader>
        <Heading size='md'>Client Report</Heading>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing='4'>
          <Box>
            <Heading size='xs' textTransform='uppercase'>
              Name
            </Heading>
            <Text pt='2' fontSize='sm'>
              {selectedUser.name}
            </Text>
          </Box>
          <Box>
            <Heading size='xs' textTransform='uppercase'>
              Company
            </Heading>
            <Text pt='2' fontSize='sm'>
              {selectedUser.company.name}
            </Text>
          </Box>
          <Box>
            <Heading size='xs' textTransform='uppercase'>
              Email
            </Heading>
            <Text pt='2' fontSize='sm'>
              {selectedUser.email}
            </Text>
          </Box>
          <Box>
            <Heading size='xs' textTransform='uppercase'>
              Phone
            </Heading>
            <Text pt='2' fontSize='sm'>
              {selectedUser.phone}
            </Text>
          </Box>
        </Stack>
      </CardBody>
      <CardFooter>
        <Button
          onClick={() => {
            addUser.mutate(selectedUser);
            dispatch({ type: 'CLEAR' });
          }}>
          Save
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SaveSelectedUser;
