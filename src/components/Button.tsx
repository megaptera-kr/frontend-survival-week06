type ButtonType = {
  type: 'button' | 'submit' | 'reset';
  title: string;
  name?: string;
  buttonStyle?: React.CSSProperties;
  onClick: () => void;
}

export default function Button({
  type, title, name, buttonStyle, onClick,
}:ButtonType) {
  return (
    <button type={type} name={name} style={buttonStyle} onClick={onClick}>
      {title}
    </button>
  );
}
