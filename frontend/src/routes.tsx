import { createBrowserRouter } from 'react-router-dom';
import HomePage from './components/HomePage';
import SaveSelectedUser from './components/SaveSelectedUser';
import SavedUsers from './components/SavedUsers';

const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/save', element: <SaveSelectedUser /> },
  { path: '/fetch', element: <SavedUsers /> },
]);

export default router;
