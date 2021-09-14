import type { NextPage } from 'next';

import { Counter } from '~/components/state/Counter';

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
      <Counter />
    </div>
  );
};

export default Home;
