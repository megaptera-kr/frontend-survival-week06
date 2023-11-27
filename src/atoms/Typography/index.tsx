/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/require-default-props */
import styled, { DefaultTheme } from 'styled-components';

type TextProps<T extends React.ElementType> = {
  as?: T;
  $variant?: keyof DefaultTheme['typography'];
  $color?: keyof DefaultTheme['palette'];
  children: React.ReactNode;
} & Omit<
  React.ComponentPropsWithoutRef<T>,
  'as' | 'childern' | '$variant' | '$color'
>;

function Text<C extends React.ElementType>({
  as,
  children,
  $variant,
  $color,
  ...rest
}: TextProps<C>) {
  const Component = as || 'span';

  return (
    <Component $variant={$variant} $color={$color} {...rest}>
      {children}
    </Component>
  );
}

const Typography = styled(Text)((props) => {
  const { theme, $variant, $color } = props;

  return {
    ...($variant ? theme.typography[$variant] : theme.typography.body_01),
    ...($color ? { color: theme.palette[$color] } : {}),
  };
});

export default Typography;
