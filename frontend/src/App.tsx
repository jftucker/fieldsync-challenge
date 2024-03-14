import { useReducer } from 'react';
import { RouterProvider } from 'react-router-dom';
import HomePage from './components/HomePage';
import SelectedUserContext from './contexts/selectedUserContext';
import selectedUserReducer from './reducers/selectedUserReducer';
import router from './routes';

function App() {
  const [selectedUser, dispatch] = useReducer(selectedUserReducer, undefined);

  return (
    <SelectedUserContext.Provider value={{ selectedUser, dispatch }}>
      <RouterProvider router={router}></RouterProvider>
    </SelectedUserContext.Provider>
  );
}

export default App;
