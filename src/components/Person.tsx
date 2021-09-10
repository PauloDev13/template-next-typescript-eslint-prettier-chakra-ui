import { FunctionComponent } from 'react';

interface PersonProps {
  name: {
    first: string;
    last: string;
  };
}

type Props = PersonProps;

export const Person: FunctionComponent<Props> = ({ name }) => {
  return (
    <div>
      {name.first} {name.last}
    </div>
  );
};
