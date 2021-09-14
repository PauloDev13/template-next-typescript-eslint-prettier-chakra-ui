import { FunctionComponent, useState } from 'react';

interface UserProps {
  name: string;
  email: string;
}

type Props = UserProps;

export const User = () => {
  const [user, setUser] = useState<Props>({} as Props);
  const handleLogin = () => {
    setUser({
      name: 'Paulo',
      email: 'prmorais@gmail.com',
    });
  };
  const handleLogout = () => {
    setUser({} as Props);
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <br />
      <button onClick={handleLogout}>Logout</button>
      <div>User name is {user.name}</div>
      <div>User email is {user.email}</div>
    </div>
  );
};
