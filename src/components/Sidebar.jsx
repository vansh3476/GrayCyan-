import { useState, useEffect } from "react"
import home from "../assets/home.svg"
import task from "../assets/task.svg"
import inbox from "../assets/inbox.svg"
import customer from "../assets/customer.svg"
import inventory from "../assets/inventory.svg"
import followups from "../assets/followups.svg"
import orders from "../assets/orders.svg"
import products from "../assets/products.svg"
import users from "../assets/users.svg"
import leads from "../assets/leads.svg"
import pricelist from "../assets/pricelist.svg"
import clogo from "../assets/clogo.svg"
import {
  Box,
  Drawer,
  ListItemButton,
  Collapse,
  Typography,
  useTheme,
  useMediaQuery,
  IconButton,
  Tooltip,
  Fade,
  Backdrop,
} from "@mui/material"
import DoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft"
import DoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight"
import ArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import CloseIcon from "@mui/icons-material/Close"

const DRAWER_WIDTH = 280
const COLLAPSED_WIDTH = 70
const MOBILE_DRAWER_WIDTH = 300

const navigationItems = [
  { label: "Home", icon: home, path: "/", hasSubmenu: false },
  { label: "My Tasks", icon: task, path: "/", hasSubmenu: true, submenu: [] },
  { label: "Inbox", icon: inbox, path: "/inbox", hasSubmenu: false },
  { label: "Customer", icon: customer, path: "/", hasSubmenu: true, submenu: [] },
  {
    label: "Inventory",
    icon: inventory,
    path: "/",
    hasSubmenu: true,
    expanded: true,
    submenu: [
      { label: "Overview", path: "/" },
      { label: "Product Search", path: "/" },
      { label: "All Products", path: "/" },
      { label: "New Product", path: "/" },
      { label: "Existing Product", path: "/", active: true },
    ],
  },
  { label: "Follow ups", icon: followups, path: "/", hasSubmenu: false },
  { label: "Orders", icon: orders, path: "/", hasSubmenu: true, submenu: [] },
  { label: "Products", icon: products, path: "/", hasSubmenu: false },
  { label: "Users", icon: users, path: "/", hasSubmenu: false },
  { label: "Leads", icon: leads, path: "/", hasSubmenu: false },
  { label: "Pricelist", icon: pricelist, path: "/", hasSubmenu: false },
]

export default function Sidebar({ open = true, onClose, collapsed = false, onCollapsedToggle }) {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))
  const isTablet = useMediaQuery(theme.breakpoints.between("md", "lg"))
  const [expandedItems, setExpandedItems] = useState({ inventory: true })
  const [isCollapsed, setIsCollapsed] = useState(collapsed)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    if (isTablet && !isMobile) {
      setIsCollapsed(true)
    }
  }, [isTablet, isMobile])

  const handleSubmenuToggle = (itemLabel) => {
    if (!isCollapsed || isMobile) {
      setExpandedItems((prev) => ({
        ...prev,
        [itemLabel.toLowerCase()]: !prev[itemLabel.toLowerCase()],
      }))
    }
  }

  const handleCollapseToggle = () => {
    if (!isMobile) {
      setIsCollapsed(!isCollapsed)
      if (onCollapsedToggle) onCollapsedToggle()
    }
  }

  const handleMobileToggle = () => {
    setMobileOpen(!mobileOpen)
    if (onClose) onClose()
  }

  const NavigationItem = ({ item }) => (
    <Box key={item.label} sx={{ mb: 0.5 }}>
      <Tooltip title={isCollapsed && !isMobile ? item.label : ""} placement="right" arrow TransitionComponent={Fade}>
        <ListItemButton
          onClick={() => item.hasSubmenu && handleSubmenuToggle(item.label)}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: isCollapsed && !isMobile ? "center" : "space-between",
            px: isCollapsed && !isMobile ? 1.5 : 2.5,
            py: { xs: 2, sm: 1.8, md: 1.5 },
            mx: 1,
            borderRadius: "12px",
            minHeight: { xs: 52, sm: 48, md: 44 },
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            position: "relative",
            overflow: "hidden",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.12)",
              transform: "translateX(4px)",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
            },
            "&:active": {
              transform: "translateX(2px) scale(0.98)",
            },
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2.5 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: { xs: 28, sm: 24, md: 22 },
                height: { xs: 28, sm: 24, md: 22 },
                borderRadius: "8px",
                transition: "all 0.3s ease",
              }}
            >
              <img
                src={item.icon}
                alt={item.label}
                style={{
                  width: isMobile ? 18 : 16,
                  height: isMobile ? 18 : 16,
                  filter: "brightness(0) invert(1)",
                }}
              />
            </Box>
            {(!isCollapsed || isMobile) && (
              <Typography
                sx={{
                  color: "#FFFFFF",
                  fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif",
                  fontSize: { xs: "15px", sm: "14px", md: "13px" },
                  fontWeight: 500,
                  letterSpacing: "0.2px",
                  transition: "all 0.3s ease",
                }}
              >
                {item.label}
              </Typography>
            )}
          </Box>

          {(!isCollapsed || isMobile) && item.hasSubmenu && (
            <Box
              sx={{
                transition: "transform 0.3s ease",
                transform: expandedItems[item.label.toLowerCase()] ? "rotate(180deg)" : "rotate(0deg)",
              }}
            >
              <ArrowDownIcon
                sx={{
                  color: "#FFFFFF",
                  fontSize: { xs: 20, sm: 18, md: 16 },
                  opacity: 0.8,
                }}
              />
            </Box>
          )}
        </ListItemButton>
      </Tooltip>
      {item.hasSubmenu && (!isCollapsed || isMobile) && item.submenu && item.submenu.length > 0 && (
        <Collapse in={expandedItems[item.label.toLowerCase()]} timeout={300} unmountOnExit>
          <Box sx={{ position: "relative", ml: { xs: 3, sm: 4 }, mt: 1, mb: 1 }}>
           
            {item.submenu.map((subItem) => (
              <Box key={subItem.label} sx={{ position: "relative", mb: 0.5 }}>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    px: { xs: 2, sm: 2.5 },
                    py: { xs: 1.5, sm: 1.2, md: 1 },
                    mx: 1,
                    borderRadius: "10px",
                    minHeight: { xs: 40, sm: 36, md: 32 },
                    backgroundColor: subItem.active ? "rgba(255, 255, 255, 0.18)" : "transparent",
                    cursor: "pointer",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    position: "relative",
                    "&:hover": {
                      backgroundColor: subItem.active ? "rgba(255, 255, 255, 0.22)" : "rgba(255, 255, 255, 0.12)",
                      transform: "translateX(6px)",
                    },
                    "&:active": {
                      transform: "translateX(3px) scale(0.98)",
                    },
                    ...(subItem.active && {
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        left: 0,
                        top: "50%",
                        transform: "translateY(-50%)",
                        width: "3px",
                        height: "60%",
                        borderRadius: "0 2px 2px 0",
                      },
                    }),
                  }}
                >
                  <Typography
                    sx={{
                      color: "#FFFFFF",
                      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif",
                      fontSize: { xs: "14px", sm: "13px", md: "12px" },
                      fontWeight: subItem.active ? 600 : 400,
                      letterSpacing: "0.1px",
                      opacity: subItem.active ? 1 : 0.9,
                    }}
                  >
                    {subItem.label}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Collapse>
      )}
    </Box>
  )

  const sidebarContent = (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(90deg, #0A0C1B 40%)",
      }}
    >
      {!isMobile && (
        <IconButton
          onClick={handleCollapseToggle}
          sx={{
            position: "absolute",
            top: { xs: 50, sm: 45, md: isCollapsed ? 20: 27 },
            right: { xs: 12, sm: 10, md: isCollapsed ? 22 : 8 },
            zIndex: 10,
            width: { xs: 36, sm: 32, md: 30 },
            height: { xs: 36, sm: 32, md: 30 },
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
        >
          {isCollapsed ? (
            <DoubleArrowRightIcon sx={{ fontSize: { xs: 20, sm: 18, md: 16 } }} />
          ) : (
            <DoubleArrowLeftIcon sx={{ fontSize: { xs: 20, sm: 18, md: 16 } }} />
          )}
        </IconButton>
      )}

      {isMobile && (
        <IconButton
          onClick={handleMobileToggle}
          sx={{
            position: "absolute",
            top: 15,
            right: 15,
            zIndex: 10,
            width: 40,
            height: 40,
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            color: "white",
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.9)",
            },
          }}
        >
          <CloseIcon sx={{ fontSize: 20 }} />
        </IconButton>
      )}

      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          py: { xs: 3, sm: 2.5, md: 2 },
          height: "100vh",
          overflowY: "auto",
          overflowX: "hidden",
          "&::-webkit-scrollbar": {
            width: "6px",
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            borderRadius: "3px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "rgba(255, 255, 255, 0.3)",
            borderRadius: "3px",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.5)",
            },
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: isCollapsed && !isMobile ? "center" : "flex-start",
            px: { xs: 3, sm: 2.5, md: 2 },
            py: { xs: 3, sm: 2.5, md: 2 },
            mb: { xs: 3, sm: 2.5, md: 2 },
            pr: { xs: 6, sm: 5, md: 4 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: { xs: 2, sm: 1.5, md: 1 },
              transition: "all 0.3s ease",
            }}
          >
            {(!isCollapsed || isMobile) && (
              <Typography
                sx={{
                  color: "white",
                  fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif",
                  fontSize: { xs: "20px", sm: "18px", md: "16px" },
                  fontWeight: 700,
                  letterSpacing: "1px",
                  background: "linear-gradient(45deg, #ffffff, #e0e0e0)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                <img src={clogo} alt="company logo" className="scale-150 ml-14" />
              </Typography>
            )}
          </Box>
        </Box>
        <Box sx={{ px: { xs: 1, sm: 1, md: 0.5 } }}>
          {navigationItems.map((item, index) => (
            <NavigationItem key={item.label} item={item} index={index} />
          ))}
        </Box>
      </Box>
    </Box>
  )

  if (isMobile) {
    return (
      <>
        <Drawer
          anchor="left"
          open={open}
          onClose={onClose}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: MOBILE_DRAWER_WIDTH,
              border: "none",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
            },
          }}
        >
          {sidebarContent}
        </Drawer>
        <Backdrop
          open={open}
          onClick={onClose}
          sx={{
            display: { xs: "block", md: "none" },
            zIndex: theme.zIndex.drawer - 1,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            backdropFilter: "blur(4px)",
          }}
        />
      </>
    )
  }

  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={open}
      sx={{
        display: { xs: "none", md: "block" },
        width: open ? (isCollapsed ? COLLAPSED_WIDTH : DRAWER_WIDTH) : 0,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: isCollapsed ? COLLAPSED_WIDTH : DRAWER_WIDTH,
          boxSizing: "border-box",
          border: "none",
          boxShadow: "0 0 30px rgba(0, 0, 0, 0.2)",
          transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.standard,
          }),
        },
      }}
    >
      {sidebarContent}
    </Drawer>
  )
}
