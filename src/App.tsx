import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { Button, Grid } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import "./App.css";
import { Background, Panel, SearchBar, RerunMiniTable } from "./components";
import { BucketIcon, RerunIcon } from "./icons";
import GrafanaLogo from "./icons/grafana.png";
import { ReactComponent as ImageOpsLogo } from "./icons/ImageOpsLogo3.svg";

// Create rtl cache
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

export const darkTheme = createTheme({
  direction: "rtl",
  palette: {
    mode: "dark",
  },
  typography: {
    fontFamily: "Heebo",
  },
});

function App() {
  return (
    <>
      <Background />

      <div className="max-w-screen-xl mx-auto justify-center">
        <CacheProvider value={cacheRtl}>
          <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            {/* <DashboardContainer /> */}
            {/* <div className="flex flex-row justify-center mt-5">
              <div className="h-[80px] w-11/12 bg-neutral-800/90 rounded-xl backdrop-blur-lg grid space-between items-center px-3"></div>
            </div> */}
            <Grid
              container
              className="mt-8 bg-neutral-800/90 rounded-xl backdrop-blur-lg flex items-center justify-between px-3"
            >
              <Grid item md="auto">
                <ImageOpsLogo width={200} height={80} />
              </Grid>
              <Grid item md="auto">
                <SearchBar />
              </Grid>
            </Grid>
            <Grid container className="flex justify-between items-center mt-10">
              <Grid item md="auto">
                <div className="heebo font-bold text-4xl">
                  ברוך הבא רון מילס
                </div>
                <div className="heebo font-light text-xl text-[#A8A8A8] mt-1">
                  {new Date().toLocaleString("he-IL", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
              </Grid>
              <Grid item md="auto">
                <Button
                  variant="contained"
                  sx={{
                    "&:hover .grafanaIcon": {
                      filter: "none",
                      // transform: "scale(1.05)",
                    },
                    "& .grafanaIcon": {
                      filter: "brightness(0) invert(1)", // Apply the filter to the child on parent hover
                    },
                    "&:hover ": {
                      transform: "scale(1.02)",
                    },
                  }}
                  className="bg-[#292932] text-white font-light text-xl backdrop-blur-lg rounded-xl px-8 h-[60px] transition duration-300"
                  endIcon={
                    // <SiGrafana size={30} className="mr-3" />
                    <img
                      src={GrafanaLogo}
                      className="h-7 mr-3 grafanaIcon transition duration-300"
                      alt=""
                    />
                  }
                >
                  <span className="mt-[2px] label">מעבר לגרפנה</span>
                </Button>
              </Grid>
            </Grid>
            <Grid
              container
              style={{ height: "-webkit-fill-available" }}
              className="mt-4 space-between"
              columnSpacing={5}
              rowSpacing={3}
            >
              <Grid item className="h-[200px]" lg={4} md={6}>
                <Panel
                  badgeColor="#FFC542"
                  label="הרצות אוחרות"
                  badgeContent={
                    <RerunIcon arrowWidth={3} arrowSize={75} brainSize={65} />
                  }
                >
                  {/* <RerunMiniTable /> */}
                </Panel>
              </Grid>
              <Grid item className="h-[200px]" lg={4} md={6}>
                <Panel
                  badgeColor="#FC5A5A"
                  label="חישוב Bucket"
                  badgeContent={<BucketIcon size={75} />}
                />
              </Grid>
              <Grid item className="h-[200px]" lg={4} md={6}>
                <Panel badgeColor="#50B5FF" label="סיכום יומי" />
              </Grid>
              <Grid item className="h-[47vh]" sm={12}>
                <div className="h-full mt-7 flex items-end justify-center">
                  <div className="h-full grid justify-items-stretch bg-neutral-800/90 w-full rounded-xl backdrop-blur-lg p-3"></div>
                </div>
              </Grid>
            </Grid>
            {/* <TabsRouter /> */}
          </ThemeProvider>
        </CacheProvider>
      </div>
    </>
  );
}

export default App;
