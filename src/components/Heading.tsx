interface HeadingProps {
  children: string;
}

type Props = HeadingProps;

export const Heading = (props: Props) => {
  return <h2>{props.children}</h2>;
};
