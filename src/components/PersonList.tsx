import { FunctionComponent } from 'react';

interface PersonListProps {
  names: {
    first: string;
    last: string;
  }[];
}

type Props = PersonListProps;

export const PersonList: FunctionComponent<Props> = ({ names }) => {
  return (
    <div>
      {names.map((name, index) => (
        <h2 key={index}>
          {name.first} {name.last}
        </h2>
      ))}
    </div>
  );
};
