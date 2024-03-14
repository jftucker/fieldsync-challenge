import { Dispatch } from 'react';
import { User } from '../react-query/services/userService';
import { UserAction } from '../reducers/selectedUserReducer';
import React from 'react';

interface SelectedUserContextType {
  selectedUser: User | undefined;
  dispatch: Dispatch<UserAction>;
}

const SelectedUserContext = React.createContext<SelectedUserContextType>(
  {} as SelectedUserContextType
);

export default SelectedUserContext;
