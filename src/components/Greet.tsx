interface OwnProps {
  name: string;
}

type Props = OwnProps;

export const Greet = ({ name }: Props) => {
  return (
    <div
      style={{ marginTop: '2rem', justifyContent: 'center', display: 'flex' }}
    >
      <h2>Bem vindo {name}! Você tem 10 mensagens não lidas</h2>
    </div>
  );
};
