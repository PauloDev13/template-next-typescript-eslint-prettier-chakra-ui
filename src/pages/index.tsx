import type { NextPage } from 'next';

import { Greet } from '~/components/Greet';

const Home: NextPage = () => {
  return (
    <div>
      <Greet name={'Paulo Roberto'} />
    </div>
  );
};

export default Home;
