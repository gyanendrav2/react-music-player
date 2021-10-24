import { Grid, IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { themeInterface } from "../theme";

export interface CircleProps {
  btnSize?: string;
  btnWrapperSize?: string;
  children?: React.ReactNode;
}

const useStyles = makeStyles((theme: themeInterface) => ({
  wrapper: {
    boxShadow: theme.palette.shadowBlueLight,
    padding: theme.palette.cardPadding,
  },
  playPauseBtn: {
    width: (props: CircleProps) => props.btnSize,
    height: (props: CircleProps) => props.btnSize,
    background:
      "linear-gradient(159.16deg, #917CE4 26.46%, rgba(63, 45, 137, 0.6) 116.55%)",
    boxShadow: "inset 10px 10px 15px rgba(255, 255, 255, 0.2)",
    filter: "drop-shadow(0px 5px 10px rgba(55, 46, 152, 0.65))",
    "&:hover": {
      background:
        "linear-gradient(159.16deg, #917CE4 26.46%, rgba(63, 45, 137, 1) 116.55%)",
    },
  },
  playPauseBtnWrapper: {
    width: (props: CircleProps) => props.btnWrapperSize + "!important",
    height: (props: CircleProps) => props.btnWrapperSize,
    borderRadius: "50%",
    background: theme.palette.secondary.white2,
    boxShadow:
      "-10px -10px 15px #FFFFFF, 10px 10px 10px rgba(0, 0, 0, 0.05), inset 10px 10px 10px rgba(0, 0, 0, 0.05), inset -10px -10px 20px #FFFFFF",
  },
}));

const CircleButton = ({
  btnSize = "2.615rem",
  btnWrapperSize = "3.618rem",
  children,
}: CircleProps): JSX.Element => {
  const classes = useStyles({ btnSize, btnWrapperSize });
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      className={classes.playPauseBtnWrapper}
    >
      <IconButton className={classes.playPauseBtn}>{children}</IconButton>
    </Grid>
  );
};

export default CircleButton;
