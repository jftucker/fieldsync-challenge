import { Button } from '@chakra-ui/react';
import { useContext } from 'react';
import SelectedUserContext from '../contexts/selectedUserContext';
import useAddUser from '../react-query/hooks/useAddUser';

const SaveSelectedUser = () => {
  const { selectedUser, dispatch } = useContext(SelectedUserContext);
  const addUser = useAddUser();
  if (!selectedUser) return <></>;
  return (
    <div>
      {selectedUser.name}
      <Button
        onClick={() => {
          addUser.mutate(selectedUser);
          dispatch({ type: 'CLEAR' });
        }}>
        Save
      </Button>
    </div>
  );
};

export default SaveSelectedUser;
