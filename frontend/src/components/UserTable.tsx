import {
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Text,
} from '@chakra-ui/react';
import usePlaceholderUsers from '../hooks/usePlaceholderUsers';

const UserTable = () => {
  const { data: users, error, isLoading } = usePlaceholderUsers();

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <TableContainer>
      <Table variant='simple'>
        <TableCaption>Available Users</TableCaption>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Company</Th>
            <Th>Email</Th>
            <Th>Phone</Th>
          </Tr>
        </Thead>
        <Tbody>
          {users?.map(user => (
            <Tr key={user.id}>
              <Td>{user.name}</Td>
              <Td>{user.company.name}</Td>
              <Td>{user.email}</Td>
              <Td>{user.phone}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default UserTable;
