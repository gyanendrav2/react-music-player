import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";
import { themeInterface } from "../theme";
import AddInListIcon from "./icons/addInListIcon";
import HeartIcon from "./icons/heartIcon";
import ShareIcon from "./icons/shareIcon";
import OutShadowCircleButton from "./outShadowCircleButton";
import classNames from "classnames";

const useStyles = makeStyles((theme: themeInterface) => ({
  wrapper: {
    padding: "3.125rem",
    boxShadow: `40px 30px 80px ${theme.palette.shadowBlueLight}`,
    borderRadius: theme.palette.cardPadding,
    backgroundColor: theme.palette.secondary.white2,
    userSelect: "none",
  },
  trackTitle: {
    fontWeight: 800,
    fontFamily: "Avenir-black",
    color: theme.palette.secondary.gray80,
    fontSize: "2.2rem",
  },
  trackSubTitle: {
    fontWeight: 800,
    fontFamily: "Avenir-book",
    color: theme.palette.secondary.gray50,
    fontSize: "1.5rem",
  },
  posterWrapper: {
    borderRadius: "2.5rem",
    padding: "1rem",
    boxShadow:
      "inset 10px 10px 10px rgba(0, 0, 0, 0.05), inset -10px -10px 20px #FFFFFF",
    filter:
      "drop-shadow(-10px -10px 15px #FFFFFF) drop-shadow(10px 10px 10px rgba(0, 0, 0, 0.05))",
  },
  poster: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "1.875rem",
    boxShadow: "5px 5px 8px 2px rgba(0,0,0,0.2)",
    maxHeight: "20rem",
  },
  max1line: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    "-webkit-line-clamp": 1,
    "-webkit-box-orient": "vertical",
  },
}));

const TrackInfoCard = () => {
  const classes = useStyles();
  return (
    <Box className={classes.wrapper}>
      <Grid container alignItems="center" flexWrap="nowrap">
        <Box width="50%" className={classes.posterWrapper}>
          <img
            src="/image/codex-omega.png"
            alt="track thumnail"
            className={classes.poster}
          />
        </Box>
        <Box width="50%" padding="1rem">
          <Typography variant="subtitle1" marginBottom="3.125rem">
            Now Playing
          </Typography>
          <Typography
            className={classNames(classes.trackTitle, classes.max1line)}
          >
            Purple Haze
          </Typography>
          <Typography
            className={classNames(classes.trackSubTitle, classes.max1line)}
          >
            Jimi Hendrix
          </Typography>
          <Typography
            variant="subtitle1"
            marginBottom="2.75rem"
            className={classes.max1line}
          >
            Woodstock
          </Typography>
          <Grid
            container
            alignItems="center"
            justifyContent="space-between"
            maxWidth="13rem"
          >
            <OutShadowCircleButton>
              <HeartIcon />
            </OutShadowCircleButton>
            <OutShadowCircleButton>
              <AddInListIcon />
            </OutShadowCircleButton>
            <OutShadowCircleButton>
              <ShareIcon />
            </OutShadowCircleButton>
          </Grid>
        </Box>
      </Grid>
    </Box>
  );
};

export default TrackInfoCard;
