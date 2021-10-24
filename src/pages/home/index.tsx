import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import TrackController from "../../components/trackController";
import TrackInfoCard from "../../components/trackInfoCard";
import colors from "../../theme/colors";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  rootWrapper: {
    flexWrap: "nowrap",
    "@media (max-width: 1439px)": {
      flexWrap: "wrap!important",
    },
  },
  col1: {
    width: "50%",
    "@media (max-width: 1439px)": {
      width: "100%!important",
    },
  },
  col2: {
    width: "50%",
    "@media (max-width: 1439px)": {
      width: "100%!important",
      marginLeft: 0 + "!important",
    },
  },
  gridWrapper: {
    "@media (max-width: 1763px)": {
      padding: "0 1rem !important",
    },
  },
});

const Home = () => {
  const classes = useStyles();
  return (
    <Grid
      width="100%"
      minHeight="100vh"
      bgcolor={colors.lightBlue}
      container
      alignItems="center"
      justifyContent="center"
      className={classes.rootWrapper}
    >
      <Grid
        container
        alignItems="center"
        maxWidth="110.25rem"
        px="9.375rem"
        className={classes.gridWrapper}
      >
        <Box
          width="50%"
          className={classes.col1}
          position="relative"
          zIndex={1}
        >
          <TrackInfoCard />
        </Box>
        <Box width="50%" marginLeft="-1rem" className={classes.col2}>
          <TrackController />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Home;
