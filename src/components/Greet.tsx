interface OwnProps {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
}

type Props = OwnProps;

export const Greet = ({ name, messageCount, isLoggedIn }: Props) => {
  !messageCount ? (messageCount = 0) : messageCount;
  return (
    <div>
      <h2>
        {isLoggedIn
          ? `Bem vindo ${name}! Você tem ${messageCount} mensagens não lidas`
          : 'Bem vindo'}
      </h2>
    </div>
  );
};
