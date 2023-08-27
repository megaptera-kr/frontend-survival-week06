/* eslint-disable react/jsx-props-no-spreading */
type BasketButtonProps = {
  text: string;
  onClick: () => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function BasketButton({ text, onClick, ...props }: BasketButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      {...props}
    >
      {text}
    </button>
  );
}
