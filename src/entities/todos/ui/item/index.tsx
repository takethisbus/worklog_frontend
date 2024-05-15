import { Checkbox, FormControlLabel } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { useUpdateTodo } from "../../models/todos";

interface Props {
  id: string;
  label: string;
  defaultChecked?: boolean;
}

export const TodoItem = ({ id, defaultChecked = false, label }: Props) => {
  const { mutate } = useUpdateTodo();
  const [checked, setChecked] = useState(defaultChecked);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    setChecked(checked);

    mutate({ id, payload: { title: label, completed: checked } });
  };

  return (
    <FormControlLabel
      control={
        <Checkbox checked={checked} onChange={onChange} color="primary" />
      }
      label={label}
      sx={{
        "& .MuiFormControlLabel-label": checked
          ? { textDecoration: "line-through" }
          : {}
      }}
    />
  );
};
