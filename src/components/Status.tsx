import { FunctionComponent } from 'react';

interface StatusProps {
  status: 'loading' | 'success' | 'error';
}

type Props = StatusProps;

export const Status: FunctionComponent<Props> = ({ status }) => {
  let message;
  if (status === 'loading') {
    message = 'Loading...';
  } else if (status === 'success') {
    message = 'Data fetched successfully!';
  }
  if (status === 'error') {
    message = 'Error fetching data';
  }

  return (
    <div>
      <h2>Status - {message}</h2>
    </div>
  );
};
