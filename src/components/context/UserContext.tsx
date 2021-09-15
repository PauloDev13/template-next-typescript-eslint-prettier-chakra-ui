import { createContext, useState } from 'react';

interface IUser {
  name: string;
  email: string;
}

type TUser = IUser;

type TUserContext = {
  user: IUser;
  setUser: React.Dispatch<React.SetStateAction<TUser>>;
};

type UserContextProviderProps = {
  children: React.ReactNode;
};

export const UserContext = createContext({} as TUserContext);

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [user, setUser] = useState({} as TUser);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {' '}
      {children}
    </UserContext.Provider>
  );
};
