import { User } from '../react-query/services/userService';

interface SelectUser {
  type: 'SELECT';
  user: User;
}

interface ClearUser {
  type: 'CLEAR';
}

export type UserAction = SelectUser | ClearUser;

const selectedUserReducer = (
  user: User | undefined,
  action: UserAction
): User | undefined => {
  if (action.type === 'SELECT') return action.user;
  if (action.type === 'CLEAR') return undefined;
};

export default selectedUserReducer;
