/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/require-default-props */
import styled, { DefaultTheme } from 'styled-components';

type TextProps<T extends React.ElementType> = {
  as?: T;
  variant?: keyof DefaultTheme['typography'];
  children: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'childern' | 'variant'>;

function Text<C extends React.ElementType>({
  as,
  children,
  variant,
  ...rest
}: TextProps<C>) {
  const Component = as || 'span';

  return (
    <Component variant={variant} {...rest}>
      {children}
    </Component>
  );
}

const Typography = styled(Text)((props) => {
  const { theme, variant } = props;

  return {
    ...(variant ? theme.typography[variant] : theme.typography.body_01),
  };
});

export default Typography;
