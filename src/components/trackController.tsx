import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";
import React from "react";
import { themeInterface } from "../theme";
import RandomIcon from "./icons/randomIcon";
import RepeatSingleIcon from "./icons/repeatSingleIcon";
import PauseIcon from "./icons/pauseIcon";
import ArrowRightIcon from "./icons/arrowRightIcon";
import ArrowLeftIcon from "./icons/arrowLeftIcon";
import { Grid, IconButton, Slider, Typography } from "@mui/material";
import CircleButton from "./circleButton";
import LoopIcon from "./icons/loopIcon";
import EqualizerIcon from "./icons/equalizerIcon";

const useStyles = makeStyles((theme: themeInterface) => ({
  wrapper: {
    boxShadow: "0px 60px 100px rgba(65, 44, 100, 0.3)",
    borderRadius: "3.75rem",
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    padding: theme.palette.cardPadding,
    backgroundColor: theme.palette.secondary.gray10,
    position: "relative",
    "@media (max-width: 1439px)": {
      borderTopLeftRadius: "0",
      borderTopRightRadius: "0",
      borderBottomLeftRadius: "3.75rem",
      marginTop: "-4rem",
      width: "80%",
      margin: "auto",
      paddingTop: '6rem'
    },
  },
  playPauseBtn: {
    width: "4.562rem",
    height: "4.562rem",
    background:
      "linear-gradient(159.16deg, #917CE4 26.46%, rgba(63, 45, 137, 0) 116.55%)",
    boxShadow: "inset 10px 10px 15px rgba(255, 255, 255, 0.2)",
    filter: "drop-shadow(0px 5px 10px rgba(55, 46, 152, 0.65))",
  },
  playPauseBtnWrapper: {
    width: "6.312rem",
    height: "6.312rem",
    borderRadius: "50%",
    background: theme.palette.secondary.white2,
    boxShadow:
      "-10px -10px 15px #FFFFFF, 10px 10px 10px rgba(0, 0, 0, 0.05), inset 10px 10px 10px rgba(0, 0, 0, 0.05), inset -10px -10px 20px #FFFFFF",
  },
  rail: {
    backgroundColor: "transparent",
    padding: 0,
  },
  track: {
    background: "linear-gradient(327.56deg, #5D24D6 19.23%, #7E74ED 81.76%)",
    boxShadow:
      "0px 2px 3px rgba(43, 72, 180, 0.4), inset 1px 1px 3px rgba(255, 255, 255, 0.4)",
    borderRadius: "1.937rem",
    border: "none",
    marginTop: "-1px",
    height: "0.4rem",
  },
  root: {
    padding: 0,
  },
  thumb: {
    marginTop: "-1px",
    "&:after": {
      width: "2.625rem",
      height: "2.625rem",
      backgroundColor: theme.palette.secondary.white,
    },
    "&:before": {
      width: "1.625rem",
      height: "1.625rem",
      zIndex: 1,
      background: "linear-gradient(327.56deg, #5D24D6 19.23%, #7E74ED 81.76%)",
      boxShadow:
        "0px 3px 5px rgba(98, 75, 242, 0.63), inset 10px 10px 15px rgba(255, 255, 255, 0.2)",
    },
  },
  trackWrapper: {
    background: "#DEDDE3",
    boxShadow:
      "-3px -3px 5px #FFFFFF, 3px 3px 5px rgba(0, 0, 0, 0.05), inset 3px 3px 5px rgba(0, 0, 0, 0.05), inset -3px -3px 5px #FFFFFF",
    borderRadius: "37px",
    height: "1.062rem",
    padding: "0 0.5rem",
    position: "relative",
    marginTop: "4.5rem",
  },
  slider: {
    top: "-0.187rem",
  },
  iconButton: {
    width: "3rem",
    height: "3rem",
    "&:hover": {
      background: "transparent",
    },
  },
  horizontalLine: {
    position: "absolute",
    top: "50%",
    right: "1.375rem",
    width: "0.437rem",
    height: "5.687rem",
    backgroundColor: theme.palette.secondary.gray70,
    borderRadius: "0.812rem",
    transform: "translateY(-50%)",
  },
}));

const TrackController = () => {
  const classes = useStyles();

  return (
    <Box className={classes.wrapper}>
      <Box className={classes.horizontalLine} />
      <Grid container alignItems="center" justifyContent="space-between">
        <Grid
          container
          maxWidth="6rem"
          alignItems="center"
          justifyContent="space-between"
        >
          <IconButton className={classes.iconButton}>
            <RandomIcon />
          </IconButton>
          <IconButton className={classes.iconButton}>
            <RepeatSingleIcon />
          </IconButton>
        </Grid>
        <Grid
          container
          maxWidth="18rem"
          alignItems="center"
          justifyContent="space-between"
        >
          <CircleButton>
            <ArrowLeftIcon />
          </CircleButton>
          <CircleButton btnSize="4.562rem" btnWrapperSize="6.312rem">
            <PauseIcon />
          </CircleButton>
          <CircleButton>
            <ArrowRightIcon />
          </CircleButton>
        </Grid>
        <Grid
          container
          maxWidth="6rem"
          alignItems="center"
          justifyContent="space-between"
        >
          <IconButton className={classes.iconButton}>
            <LoopIcon />
          </IconButton>
          <IconButton className={classes.iconButton}>
            <EqualizerIcon />
          </IconButton>
        </Grid>
      </Grid>
      <Box className={classes.trackWrapper}>
        <Slider
          defaultValue={50}
          className={classes.slider}
          classes={{
            root: classes.root,
            track: classes.track,
            thumb: classes.thumb,
            rail: classes.rail,
          }}
          aria-label="Default"
        />
      </Box>
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        marginTop="0.437rem"
      >
        <Typography variant="subtitle1">2:01:00</Typography>
        <Typography variant="subtitle1">4:16:00</Typography>
      </Grid>
    </Box>
  );
};

export default TrackController;
