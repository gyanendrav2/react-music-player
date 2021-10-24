import { IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { themeInterface } from "../theme";

const useStyes = makeStyles((theme: themeInterface) => ({
  btn: {
    width: "3.25rem",
    height: "3.25rem",
    background: theme.palette.secondary.lightGray+"17",
    boxShadow:
      "-10px -10px 15px #FFFFFF, 10px 10px 10px rgba(0, 0, 0, 0.05), inset 10px 10px 10px rgba(0, 0, 0, 0.05), inset -10px -10px 20px #FFFFFF",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
}));

interface OutShadowCircleButtonProps {
  children: React.ReactNode;
}

const OutShadowCircleButton = ({
  children,
}: OutShadowCircleButtonProps): JSX.Element => {
  const classes = useStyes();
  return <IconButton className={classes.btn}>{children}</IconButton>;
};

export default OutShadowCircleButton;
