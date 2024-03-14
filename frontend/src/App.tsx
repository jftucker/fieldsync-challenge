import UserTable from './components/UserTable';
import usePlaceholderUsers from './hooks/usePlaceholderUsers';
import useUsers from './hooks/useUsers';

function App() {
  const { data: placeholderUsers } = usePlaceholderUsers();
  const { data: users } = useUsers();

  return (
    <>
      <UserTable users={placeholderUsers} />
      <UserTable users={users} />
    </>
  );
}

export default App;
