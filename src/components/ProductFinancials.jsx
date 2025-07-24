import { useState } from "react"
import prodcutfinancial from "../assets/prodcutfinancial.svg"
import { Box, Typography, IconButton, Avatar, Collapse } from "@mui/material"
import { Edit as EditIcon, ExpandMore as ExpandMoreIcon } from "@mui/icons-material"

export default function ProductFinancials({ financialData = {} }) {
  const [expanded, setExpanded] = useState(true)

  const handleToggle = () => {
    setExpanded(!expanded)
  }

  const defaultData = {
    materialCost: "$175.23",
    laborCost: "$291.46",
    processCost: "$66.21",
    miscCost: "$15.49",
    lastPrice: "$1,875.23",
  }

  const data = Object.keys(financialData).length > 0 ? financialData : defaultData

  return (
    <Box
      sx={{
        display: "flex",
        padding: { lg: "14px 16px", md: "14px 16px", sm: "14px 16px", xs: "12px" },
        flexDirection: "column",
        gap: 0,
        borderRadius: "7px",
        backgroundColor: "#2F323C",
        boxShadow: "0 0 3px 0 rgba(255, 255, 255, 0.74)",
        mt: { lg: 2, md: 2, sm: 2, xs: 1 },
        mb: expanded ? 2 : 0,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: { lg: "nowrap", md: "nowrap", sm: "nowrap", xs: "wrap" },
          gap: { lg: 0, md: 0, sm: 0, xs: 1 },
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: { lg: 1, md: 1, sm: 1, xs: 0.5 } }}>
          <Avatar
            sx={{
              width: { lg: 32, md: 32, sm: 32, xs: 28 },
              height: { lg: 32, md: 32, sm: 32, xs: 28 },
              background: "linear-gradient(180deg, #C346DD 0%, #6C42FC 100%)",
            }}
          >
            <img src={prodcutfinancial} alt="prodcutfinancial"  />
          </Avatar>
          <Typography
            variant="h6"
            sx={{
              color: "white",
              fontWeight: 600,
              fontSize: { lg: "16px", md: "16px", sm: "16px", xs: "14px" },
            }}
          >
            Product Financials
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: { lg: 2, md: 2, sm: 2, xs: 1 },
            order: { lg: 0, md: 0, sm: 0, xs: 2 },
          }}
        >
          <IconButton
            sx={{
              width: { lg: 28, md: 28, sm: 28, xs: 24 },
              height: { lg: 28, md: 28, sm: 28, xs: 24 },
              background: "linear-gradient(180deg, #C346DD 0%, #6C42FC 100%)",
              borderRadius: "7px",
              "&:hover": {
                background: "linear-gradient(180deg, #C346DD 0%, #6C42FC 100%)",
              },
            }}
          >
            <EditIcon
              sx={{
                color: "white",
                width: { lg: 15, md: 15, sm: 15, xs: 12 },
                height: { lg: 15, md: 15, sm: 15, xs: 12 },
              }}
            />
          </IconButton>
          <IconButton
            onClick={handleToggle}
            sx={{
              color: "white",
              transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.3s ease",
              p: 0,
            }}
          >
            <ExpandMoreIcon
              sx={{
                width: { lg: 24, md: 14, sm: 14, xs: 12 },
                height: { lg: 24, md: 12, sm: 12, xs: 10 },
              }}
            />
          </IconButton>
        </Box>
      </Box>

      <Collapse in={expanded}>
        <Box sx={{ pt: { lg: 2, md: 2, sm: 2, xs: 1.5 } }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: { lg: 4, md: 4, sm: 3, xs: 2 },
              mb: { lg: 3, md: 3, sm: 2.5, xs: 2 },
            }}
          >
            <Box>
              <Typography
                variant="caption"
                sx={{
                  color: "white",
                  fontSize: { lg: "12px", md: "12px", sm: "11px", xs: "10px" },
                  fontWeight: 400,
                  mb: 0.5,
                  display: "block",
                }}
              >
                Material Cost
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "white",
                  fontSize: { lg: "14px", md: "14px", sm: "13px", xs: "12px" },
                  fontWeight: 600,
                }}
              >
                {data.materialCost}
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="caption"
                sx={{
                  color: "white",
                  fontSize: { lg: "12px", md: "12px", sm: "11px", xs: "10px" },
                  fontWeight: 400,
                  mb: 0.5,
                  display: "block",
                }}
              >
                Labor Cost
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "white",
                  fontSize: { lg: "14px", md: "14px", sm: "13px", xs: "12px" },
                  fontWeight: 600,
                }}
              >
                {data.laborCost}
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="caption"
                sx={{
                  color: "white",
                  fontSize: { lg: "12px", md: "12px", sm: "11px", xs: "10px" },
                  fontWeight: 400,
                  mb: 0.5,
                  display: "block",
                }}
              >
                Process Cost
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "white",
                  fontSize: { lg: "14px", md: "14px", sm: "13px", xs: "12px" },
                  fontWeight: 600,
                }}
              >
                {data.processCost}
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="caption"
                sx={{
                  color: "white",
                  fontSize: { lg: "12px", md: "12px", sm: "11px", xs: "10px" },
                  fontWeight: 400,
                  mb: 0.5,
                  display: "block",
                }}
              >
                Misc. Cost
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "white",
                  fontSize: { lg: "14px", md: "14px", sm: "13px", xs: "12px" },
                  fontWeight: 600,
                }}
              >
                {data.miscCost}
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: { lg: 4, md: 4, sm: 3, xs: 2 },
            }}
          >
            <Box>
              <Typography
                variant="caption"
                sx={{
                  color: "white",
                  fontSize: { lg: "12px", md: "12px", sm: "11px", xs: "10px" },
                  fontWeight: 400,
                  mb: 0.5,
                  display: "block",
                }}
              >
                Last Price
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "white",
                  fontSize: { lg: "14px", md: "14px", sm: "13px", xs: "12px" },
                  fontWeight: 600,
                }}
              >
                {data.lastPrice}
              </Typography>
            </Box>
            <Box></Box>
            <Box></Box>
            <Box></Box>
          </Box>
        </Box>
      </Collapse>
    </Box>
  )
}
