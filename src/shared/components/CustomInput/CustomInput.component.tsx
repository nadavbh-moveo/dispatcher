import TextField from "@mui/material/TextField";

export enum INPUT_TYPE {
  SEARCH = "search",
  TEXT = "text",
  NUMBER = "number",
}

interface ICustomInputFieldProps {
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: INPUT_TYPE;
  customStyles?: React.CSSProperties;
}

const CustomInput = ({ label, value, onChange, type, customStyles }: ICustomInputFieldProps) => {
  return (
    <div className="input-wrapper">
      <TextField
        label={label}
        type={type}
        variant="outlined"
        value={value}
        onChange={onChange}
        sx={customStyles}
        autoComplete="off"
      />
    </div>
  );
};

export default CustomInput;
