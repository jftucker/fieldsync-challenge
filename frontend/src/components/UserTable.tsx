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
import { User } from '../react-query/hooks/usePlaceholderUsers';

interface Props {
  users?: User[];
  onDownload?: (user: User) => void;
}

const UserTable = ({ users, onDownload }: Props) => {
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
            {onDownload && <Th></Th>}
          </Tr>
        </Thead>
        <Tbody>
          {users?.map(user => (
            <Tr key={user.id}>
              <Td>{user.name}</Td>
              <Td>{user.company.name}</Td>
              <Td>{user.email}</Td>
              <Td>{user.phone}</Td>
              {onDownload && (
                <Td>
                  <Button onClick={() => onDownload(user)}>Download</Button>
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
