import UserTable from './components/UserTable';
import useAddUser from './react-query/hooks/useAddUser';
import usePlaceholderUsers from './react-query/hooks/usePlaceholderUsers';
import useUsers from './react-query/hooks/useUsers';

function App() {
  const addUser = useAddUser();
  const { data: placeholderUsers } = usePlaceholderUsers();
  const { data: users } = useUsers();

  return (
    <>
      <UserTable users={placeholderUsers} onDownload={addUser.mutate} />
      {addUser.error && <p>{addUser.error.message}</p>}
      {addUser.isLoading && <p>Adding...</p>}
      <UserTable users={users} />
    </>
  );
}

export default App;
