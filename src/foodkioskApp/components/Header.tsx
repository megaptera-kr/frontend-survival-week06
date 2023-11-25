import Typography from '../../atoms/Typography';

type HeaderProps = {
  title: string;
};

export default function Header({ title }: HeaderProps) {
  return (
    <Typography as='h1' variant='heading_03'>
      {title}
    </Typography>
  );
}
