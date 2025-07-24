import {Box,Typography,useTheme} from "@mui/material";
import {ChevronRight as ChevronRightIcon,} from "@mui/icons-material";
import profile from "../assets/profile.svg";
import help from "../assets/help.svg";
import notification from "../assets/notification.svg";
import network from "../assets/network.svg";
import homes from "../assets/homes.svg";
const DRAWER_WIDTH = 180;
const COLLAPSED_WIDTH = 60;

export default function Navbar({ sidebarOpen, sidebarCollapsed }) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: {
          xs: 0,
          md: sidebarOpen
            ? sidebarCollapsed
              ? COLLAPSED_WIDTH
              : DRAWER_WIDTH
            : 0,
        },
        right: 0,
        zIndex: theme.zIndex.appBar,
        transition: theme.transitions.create(["left"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
      }}
    >
      <Box
        sx={{
          display: "flex",
          height: 48,
          padding: "8px 20px 8px 27px",
          justifyContent: "space-between",
          alignItems: "center",
          background: "linear-gradient(90deg, #0A0C1B 54.24%, #39201F 108.92%)",
          boxShadow: "0 0 16px 0 rgba(0, 0, 0, 0.12)",
        }}
      >
        <Box />
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
      </Box>

      <Box
        sx={{
          display: "flex",
          height: 60,
          padding: "12px 20px 12px 25px",
          alignItems: "center",
          gap: 1,
          background:
            "linear-gradient(180deg, #828FF0 15.15%, #1F244A 151.33%)",
          boxShadow: "0 0 5px 0 rgba(255, 255, 255, 0.16)",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <Box
            sx={{
              width: 42,
              height: 38,
              background:
                "url('/placeholder.svg?height=38&width=42') center/contain no-repeat",
            }}
          />
        <img src={homes} alt="Home Logo" className="md:ml-8"/>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
            <Typography
              sx={{
                color: "#FFF",
                fontFamily: "Open Sans, sans-serif",
                fontSize: "20px",
                fontWeight: 700,
                lineHeight: "100%",
              }}
            >
              Inventory
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <Typography
                sx={{
                  color: "#FFF",
                  fontFamily: "Open Sans, sans-serif",
                  fontSize: "10px",
                  fontWeight: 400,
                  lineHeight: "100%",
                }}
              >
                All Products
              </Typography>
              <ChevronRightIcon sx={{ color: "white", fontSize: 8 }} />
              <Typography
                sx={{
                  color: "#FC7B7D",
                  fontFamily: "Open Sans, sans-serif",
                  fontSize: "10px",
                  fontWeight: 400,
                  lineHeight: "100%",
                }}
              >
                Surface Mount
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
