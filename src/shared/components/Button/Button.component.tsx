export enum BUTTON_TYPE {
  PRIMARY = "primary",
}

interface IButtonProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClickFunc?: (param: any) => void;
  text?: string;
  icon?: string;
  label?: string;
  isDisabled?: boolean;
  buttonStyle?: React.CSSProperties;
  labelStyle?: React.CSSProperties;
  iconStyle?: React.CSSProperties;
  customClass?: string;
  type?: BUTTON_TYPE;
  children?: React.ReactNode;
  disabledStyle?: string;
}

const Button = ({
  text,
  onClickFunc,
  icon,
  isDisabled,
  buttonStyle,
  iconStyle,
  customClass,
  type,
  children,
  disabledStyle,
}: IButtonProps) => {
  const disabledClass = () => {
    if (isDisabled) {
      if (disabledStyle) {
        return disabledStyle;
      }
      return "disabled";
    }
    return "";
  };

  return (
    <button
      onClick={onClickFunc}
      className={`${type}${customClass?? ''}${disabledClass()}`}
      style={buttonStyle}
      disabled={isDisabled}
      type="button"
    >
      {text}
      {icon && (
        <div style={iconStyle}>
          <img src={icon} style={iconStyle} alt="" />
        </div>
      )}
      {children}
    </button>
  );
};

export default Button;
