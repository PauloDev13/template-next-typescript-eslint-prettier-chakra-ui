import type { NextPage } from 'next';

import { User } from '~/components/context/User';
import { UserContextProvider } from '~/components/context/UserContext';

const Home: NextPage = () => {
  return (
    <div
      style={{
        marginTop: '2rem',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <UserContextProvider>
        <User />
      </UserContextProvider>
    </div>
  );
};

export default Home;
