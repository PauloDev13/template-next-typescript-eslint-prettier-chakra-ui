interface ContainerProps {
  styles: React.CSSProperties;
}

type Props = ContainerProps;

export const Container = ({ styles }: Props) => {
  return <div style={styles}>Text content goes here</div>;
};
