import { TextField, TextFieldVariants } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";

type Props = {
  id: string;
  label: string;
  placeholder: string;
  text: string;
  textError: string;
  helperText: string;
  color: string;
  variant: TextFieldVariants;
  errorState?: boolean;
  disabled?: boolean;
};

const StringBox = ({
  id = "undefined-TextField",
  label = "*LABEL*",
  placeholder = "*PLACEHOLDER*",
  text = "",
  textError = "*ERROR*",
  helperText = "*HELPER TEXT*",
  variant = "standard",
  errorState = false,
  disabled = false,
}: Props) => {
  return (
    <>
      <TextField
        id={id}
        label={errorState ? textError : label}
        placeholder={placeholder}
        defaultValue={text}
        helperText={errorState || disabled ? helperText : ""}
        variant={variant}
        error={errorState}
        disabled={disabled}
      />
    </>
  );
};

StringBox.propTypes = {
  variant: PropTypes.oneOf(["standard", "outlined", "filled"]),
};

export default StringBox;
