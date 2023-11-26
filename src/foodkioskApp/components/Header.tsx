import { Typography } from '../../atoms';

type HeaderProps = {
  title: string;
};

export default function Header({ title }: HeaderProps) {
  return (
    <Typography as='h1' $color='white' $variant='heading_03'>
      {title}
    </Typography>
  );
}
