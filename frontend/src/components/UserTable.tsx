import {
  Button,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { User } from '../react-query/services/userService';
import { Link } from 'react-router-dom';
import useUsers from '../react-query/hooks/useUsers';

interface Props {
  users?: User[];
  onSaveUser?: (user: User) => void;
}

const UserTable = ({ users, onSaveUser: onSaveUser }: Props) => {
  const { data: savedUsers, refetch } = useUsers();
  const isDisabledUser = (user: User) => {
    refetch();
    if (!savedUsers) return false;
    return savedUsers?.filter(savedUser => savedUser.id === user.id).length > 0;
  };

  if (!users) return <></>;

  return (
    <TableContainer>
      <Table variant='simple'>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Company</Th>
            <Th>Email</Th>
            <Th>Phone</Th>
            {onSaveUser && <Th></Th>}
          </Tr>
        </Thead>
        <Tbody>
          {users?.map(user => (
            <Tr key={user.id}>
              <Td>{user.name}</Td>
              <Td>{user.company.name}</Td>
              <Td>{user.email}</Td>
              <Td>{user.phone}</Td>
              {onSaveUser && (
                <Td>
                  <Link to='/save'>
                    <Button
                      isDisabled={isDisabledUser(user)}
                      onClick={() => onSaveUser(user)}>
                      Save
                    </Button>
                  </Link>
                </Td>
              )}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default UserTable;
