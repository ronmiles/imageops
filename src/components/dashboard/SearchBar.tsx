import {
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  styled,
} from "@mui/material";
import { CiSearch } from "react-icons/ci";

const MyOutlinedInput = styled(OutlinedInput)(({ theme }) => ({
  "& .MuiOutlinedInput-notchedOutline": {
    borderWidth: "0", // Remove border
  },
  "& .MuiOutlinedInput-notchedOutline:hover": {
    borderWidth: "0", // Remove border
  },
  "& .MuiOutlinedInput-root": {
    "&:hover fieldset": {
      borderColor: "green", // Change border color on hover
    },
    "&.Mui-focused fieldset": {
      borderColor: "black", // Change border color when focused
      borderRadius: "10px", // Change border radius when focused
    },
  },
}));

export const SearchBar = () => {
  return (
    <FormControl
      variant="outlined"
      className="bg-[#292932] rounded-xl"
      sx={{ border: "none" }}
    >
      <InputLabel
        htmlFor="outlined-adornment-search"
        className="text-lg font-light"
      >
        חיפוש ישות
      </InputLabel>
      <MyOutlinedInput
        id="outlined-adornment-search"
        endAdornment={
          <InputAdornment position="end">
            <CiSearch size={30} />
          </InputAdornment>
        }
        label="חיפוש ישות"
      />
    </FormControl>
  );
};
