interface ButtonProps {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
}

type Props = ButtonProps;

export const Button = (props: Props) => {
  return (
    <button onClick={(event) => props.handleClick(event, 2)}>Click</button>
  );
};
