import { useState } from "react";
import { Box, CssBaseline, useTheme, useMediaQuery } from "@mui/material";
import AppBar from "./AppBar";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const DRAWER_WIDTH = 180;
const COLLAPSED_WIDTH = 60;

export default function Layout({ children }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const handleSidebarToggle = () => setSidebarOpen(!sidebarOpen);
  const handleSidebarCollapsedToggle = () =>
    setSidebarCollapsed(!sidebarCollapsed);
  const handleSidebarClose = () => isMobile && setSidebarOpen(false);

  return (
    <Box
      sx={{
        display: "flex",
        bgcolor: "background.default",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      <CssBaseline />

      {isMobile && (
        <AppBar
          open={false}
          onMenuClick={handleSidebarToggle}
          sidebarOpen={sidebarOpen}
        />
      )}

      {!isMobile && (
        <Navbar sidebarOpen={sidebarOpen} sidebarCollapsed={sidebarCollapsed} />
      )}

      <Sidebar
        open={sidebarOpen}
        onClose={handleSidebarClose}
        onToggle={handleSidebarToggle}
        collapsed={sidebarCollapsed}
        onCollapsedToggle={handleSidebarCollapsedToggle}
      />

      <Box
        sx={{
          flexGrow: 1,
          width: {
            xs: "100%",
            md: sidebarOpen
              ? sidebarCollapsed
                ? `calc(100% - ${COLLAPSED_WIDTH}px)`
                : `calc(100% - ${DRAWER_WIDTH}px)`
              : "100%",
          },
          mt: { xs: 7, sm: 8, md: 14 },
          backgroundColor: "#1a1a1a",
          transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          ...(sidebarOpen &&
            !isMobile && {
              transition: theme.transitions.create(["margin", "width"], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
              }),
            }),
        }}
      >
        <Box
          sx={{
            p: { lg: 2, md: 2, sm: 2, xs: 1.5 },
            bgcolor: "#1a1a1a",
            minHeight: "100%",
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
}
