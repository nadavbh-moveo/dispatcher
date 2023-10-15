import { InputAdornment } from "@mui/material";
import TextField from "@mui/material/TextField";
import SearchIcon from '@mui/icons-material/Search';

export enum INPUT_TYPE {
  SEARCH = "search",
  TEXT = "text",
  NUMBER = "number",
}

interface ICustomInputFieldProps {
  label?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: INPUT_TYPE;
  customStyles?: React.CSSProperties;
}

const CustomInput = ({ label, value, onChange, type, customStyles }: ICustomInputFieldProps) => {
  return (
    <div className="input-wrapper">
      <TextField
        type={type}
        variant="outlined"
        value={value}
        onChange={onChange}
        sx={customStyles}
        autoComplete="off"
        placeholder="Search"
        InputProps={type === INPUT_TYPE.SEARCH? {
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        } : undefined}
      />
    </div>
  );
};

export default CustomInput;
