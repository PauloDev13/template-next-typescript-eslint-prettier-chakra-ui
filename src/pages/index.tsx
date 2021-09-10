import type { NextPage } from 'next';

import { Greet } from '~/components/Greet';
import { Person } from '~/components/Person';
import { PersonList } from '~/components/PersonList';

const Home: NextPage = () => {
  const personName = {
    first: 'Maria',
    last: 'Fernanda',
  };

  const nameList = [
    {
      first: 'Maria',
      last: 'Fernanda',
    },
    {
      first: 'Patrícia',
      last: 'Nunes',
    },
    {
      first: 'Paulo',
      last: 'Roberto',
    },
  ];
  return (
    <div
      style={{
        marginTop: '2rem',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Greet name={'Paulo Roberto'} messageCount={20} isLoggedIn />
      <br />
      <Person name={personName} />
      <br />
      <PersonList names={nameList} />
    </div>
  );
};

export default Home;
