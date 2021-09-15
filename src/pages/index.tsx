import type { NextPage } from 'next';

import { Box } from '~/components/context/Box';
import { ThemeContextProvider } from '~/components/context/ThemeContext';

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
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
    </div>
  );
};

export default Home;
