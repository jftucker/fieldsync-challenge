import { createBrowserRouter } from 'react-router-dom';
import HomePage from './components/HomePage';
import SaveSelectedUser from './components/SaveSelectedUser';
import SavedUsers from './components/SavedUsers';
import Layout from './components/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'save', element: <SaveSelectedUser /> },
      { path: 'fetch', element: <SavedUsers /> },
    ],
  },
]);

export default router;
