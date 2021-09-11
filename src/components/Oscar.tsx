interface OscarProps {
  children: React.ReactNode;
}

type Props = OscarProps;

export const Oscar = ({ children }: Props) => {
  return <h2>{children}</h2>;
};
