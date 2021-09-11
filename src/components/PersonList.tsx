import { FunctionComponent } from 'react';

import { PersonProps } from '~/components/interfaces';

// interface PersonListProps {
//   names: {
//     first: string;
//     last: string;
//   }[];
// }

type Props = {
  names: PersonProps[];
};

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
