import { useState } from "react"
import productmetadata from "../assets/productmetadata.svg"
import { Box, Typography, IconButton, Avatar, Collapse } from "@mui/material"
import { Edit as EditIcon, ExpandMore as ExpandMoreIcon } from "@mui/icons-material"

export default function ProductMetadataAttributes({ metadataData = {} }) {
  const [expanded, setExpanded] = useState(true)

  const handleToggle = () => {
    setExpanded(!expanded)
  }

  const defaultData = {
    footType: "E-Z",
    footDistance: "51.25cm, 52.75cm, 68.34cm",
    technology: "SmartLED, Linear Super-LED, TRIO",
    height: "17.8cm, 24.9cm, 32.4cm",
    hardware: "22 AWG, 33 AWG, 37 AWG",
  }

  const data = Object.keys(metadataData).length > 0 ? metadataData : defaultData

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
            <img src={productmetadata} alt="productmetadata"  />
          </Avatar>
          <Typography
            variant="h6"
            sx={{
              color: "white",
              fontWeight: 600,
              fontSize: { lg: "16px", md: "16px", sm: "16px", xs: "14px" },
            }}
          >
            Product Metadata Attributes
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
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: { lg: 6, md: 5, sm: 4, xs: 3 },
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
                Foot Type
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "white",
                  fontSize: { lg: "14px", md: "14px", sm: "13px", xs: "12px" },
                  fontWeight: 600,
                }}
              >
                {data.footType}
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
                Foot Distance
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "white",
                  fontSize: { lg: "14px", md: "14px", sm: "13px", xs: "12px" },
                  fontWeight: 600,
                }}
              >
                {data.footDistance}
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
                Technology
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "white",
                  fontSize: { lg: "14px", md: "14px", sm: "13px", xs: "12px" },
                  fontWeight: 600,
                }}
              >
                {data.technology}
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: { lg: 6, md: 5, sm: 4, xs: 3 },
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
                Height
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "white",
                  fontSize: { lg: "14px", md: "14px", sm: "13px", xs: "12px" },
                  fontWeight: 600,
                }}
              >
                {data.height}
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
                Hardware
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "white",
                  fontSize: { lg: "14px", md: "14px", sm: "13px", xs: "12px" },
                  fontWeight: 600,
                }}
              >
                {data.hardware}
              </Typography>
            </Box>
            <Box></Box>
          </Box>
        </Box>
      </Collapse>
    </Box>
  )
}
