import UserTable from './components/UserTable';
import usePlaceholderUsers from './hooks/usePlaceholderUsers';

function App() {
  const { data: placeholderUsers, error, isLoading } = usePlaceholderUsers();

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;

  return <UserTable users={placeholderUsers} />;
}

export default App;
