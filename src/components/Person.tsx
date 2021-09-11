import { FunctionComponent } from 'react';

import { PersonProps } from '~/components/interfaces';

type Props = {
  name: PersonProps;
};

export const Person: FunctionComponent<Props> = ({ name }) => {
  return (
    <div>
      {name.first} {name.last}
    </div>
  );
};
