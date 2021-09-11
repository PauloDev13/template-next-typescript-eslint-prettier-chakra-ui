import type { NextPage } from 'next';

import { Button } from '~/components/Button';
import { Greet } from '~/components/Greet';
import { Heading } from '~/components/Heading';
import { Input } from '~/components/Input';
import { Oscar } from '~/components/Oscar';
import { Person } from '~/components/Person';
import { PersonList } from '~/components/PersonList';
import { Status } from '~/components/Status';

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
      <Greet name={'Paulo Roberto'} messageCount={15} isLoggedIn />
      <br />
      <Person name={personName} />
      <br />
      <PersonList names={nameList} />
      <br />
      <Status status={'loading'} />
      <br />
      <Heading>Placeholder text</Heading>
      <br />
      <Oscar>
        <Heading>Oscar goes to Denzel Washington</Heading>
      </Oscar>
      <br />
      <Button
        handleClick={(event, id) => console.log('Button click', event, id)}
      />
      <br />
      <Input value={''} handleChange={(event) => console.log(event)} />
    </div>
  );
};

export default Home;
