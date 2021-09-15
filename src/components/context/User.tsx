import { useContext } from 'react';

import { UserContext } from '~/components/context/UserContext';

interface UserProps {
  name: string;
  email: string;
}

type Props = UserProps;

export const User = () => {
  const userContext = useContext(UserContext);

  const handleLogin = () => {
    userContext.setUser({
      name: 'Paulo',
      email: 'prmorais@gmail.com',
    });
  };
  const handleLogout = () => {
    userContext.setUser({} as Props);
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <br />
      <button onClick={handleLogout}>Logout</button>
      <div>User name is {userContext.user.name}</div>
      <div>User email is {userContext.user.email}</div>
    </div>
  );
};
