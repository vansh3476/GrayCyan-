import {
  AppBar as MuiAppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material";
import profile from "../assets/profile.svg";
import help from "../assets/help.svg";
import notification from "../assets/notification.svg";
import network from "../assets/network.svg";
import DoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft"

const DRAWER_WIDTH = 180;

export default function AppBar({ open, onMenuClick, sidebarOpen }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <MuiAppBar
      position="fixed"
      sx={{
        width: {
          xs: "100%",
          md: open ? `calc(100% - ${DRAWER_WIDTH}px)` : "100%",
        },
        ml: {
          xs: 0,
          md: open ? `${DRAWER_WIDTH}px` : 0,
        },
        backgroundColor: "#2F323C",
        boxShadow: "0 0 3px 0 rgba(255, 255, 255, 0.74)",
        transition: theme.transitions.create(["margin", "width"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        ...(open &&
          !isMobile && {
            transition: theme.transitions.create(["margin", "width"], {
              easing: theme.transitions.easing.easeOut,
              duration: theme.transitions.duration.enteringScreen,
            }),
          }),
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="toggle sidebar"
          onClick={onMenuClick}
          edge="start"
          sx={{
            mr: 2,
            display: { xs: "block", md: open ? "none" : "block" },
          }}
        >
          {isMobile && sidebarOpen ? <CloseIcon /> :  <IconButton
          
          sx={{
            zIndex: 10,
            width: { xs: 30, sm: 25, md: 30 },
            height: { xs: 30, sm: 25, md: 30 },
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            border: "2px solid rgba(255, 255, 255, 0.9)",
            color: "white",
            backdropFilter: "blur(10px)",
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.9)",
              transform: "scale(1.1)",
              boxShadow: "0 8px 25px rgba(0, 0, 0, 0.3)",
            },
            "&:active": {
              transform: "scale(0.95)",
            },
          }}
        ><DoubleArrowLeftIcon sx={{ fontSize: { xs: 20, sm: 18, md: 16 } }} />
        </IconButton>}
        </IconButton>

        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <Typography
                      sx={{
                        color: "#FFF",
                        fontFamily: "Open Sans, sans-serif",
                        fontSize: "15px",
                        fontWeight: 600,
                      }}
                    >
                      Theme
                    </Typography>
                  </Box>
        
                  <Box sx={{ position: "relative" }}>
                    <img src={notification} sx={{ color: "white", fontSize: 20 }} />
                    <Box
                      sx={{
                        position: "absolute",
                        top: -8,
                        right: -8,
                        width: 16,
                        height: 16,
                        borderRadius: "50%",
                        background: "#E62629",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "white",
                          fontSize: "10px",
                          fontWeight: 600,
                        }}
                      >
                        4
                      </Typography>
                    </Box>
                  </Box>
        
                  <img src={network} alt="network" sx={{ color: "white", fontSize: 18 }} />
        
                  <img src={help} alt="help"  sx={{ color: "white", fontSize: 18 }}/>
        
                  <Box
                    sx={{
                      width: 28,
                      height: 28,
                      borderRadius: "50%",
                      background: `url('${profile}') center/cover`,
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                    }}
                  />
                </Box>
      </Toolbar>
    </MuiAppBar>
  );
}
