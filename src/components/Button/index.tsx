import * as Style from "./styles";

export type TButton = {
  text: string | React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset" | undefined;
  gridArea?: string;
  disabled?: boolean;
  hasBg?: boolean;
};

const Button = ({
  text,
  onClick,
  type,
  gridArea,
  disabled,
  hasBg = true,
}: TButton) => {
  return (
    <Style.Button
      type={type}
      gridArea={gridArea}
      disabled={disabled}
      hasBg={hasBg}
      onClick={onClick}
    >
      {text}
    </Style.Button>
  );
};

export default Button;
