import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useState } from "react";

type SimpleStringToggleOptions = {
  values: string[];
};

export const SimpleStringToggle = ({
  values = [],
}: SimpleStringToggleOptions): JSX.Element => {
  const [value, setValue] = useState<string>();

  const handleValue = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment?: string
  ) => {
    setValue(newAlignment);
  };

  return (
    <ToggleButtonGroup
      value={value}
      exclusive
      size="small"
      onChange={handleValue}
    >
      {values.map((v) => (
        <ToggleButton value={v} aria-label={v}>
          {v}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};
