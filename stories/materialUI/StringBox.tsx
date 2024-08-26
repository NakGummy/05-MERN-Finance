import { TextField } from "@mui/material";
import React from "react";

type Props = {
  id: string;
  title: string;
  placeholder: string;
  text: string;
  textDebug: string;
  textException: string;
};

const StringBox = ({
  id,
  title,
  placeholder,
  text,
  textDebug,
  textException,
}: Props) => {
  return (
    <>
      <TextField id={id} label={title} placeholder={placeholder}>
        {text}
      </TextField>
    </>
  );
};

export default StringBox;
