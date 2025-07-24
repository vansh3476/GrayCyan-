import { useState } from "react";
import producttracking from "../assets/producttracking.svg";
import { Box, Typography, IconButton, Avatar, Collapse } from "@mui/material";
import {
  Edit as EditIcon,
  ExpandMore as ExpandMoreIcon,
} from "@mui/icons-material";

export default function ProductTrackingDetails({ trackingData = [] }) {
  const [expanded, setExpanded] = useState(true);

  const handleToggle = () => setExpanded(!expanded);

  const defaultData = [
    { batchNumber: "2873416", serialNumber: "1124532" },
    { batchNumber: "2873416", serialNumber: "1124532" },
    { batchNumber: "2873416", serialNumber: "1124532" },
    { batchNumber: "2873416", serialNumber: "1124532" },
    { batchNumber: "0903499", serialNumber: "5524432" },
  ];

  const data = trackingData.length > 0 ? trackingData : defaultData;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 0,
        borderRadius: "7px",
        backgroundColor: "#2F323C",
        boxShadow: "0 0 3px 0 rgba(255, 255, 255, 0.74)",
        mt: { xs: 1, sm: 2 },
        mb: expanded ? 2 : 0,
        px: { xs: 1.5, sm: 2 },
        py: { xs: 1.5, sm: 2 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 1,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Avatar
            sx={{
              width: { xs: 28, sm: 32 },
              height: { xs: 28, sm: 32 },
              background: "linear-gradient(180deg, #C346DD 0%, #6C42FC 100%)",
            }}
          >
            <img src={producttracking} alt="producttracking" />
          </Avatar>
          <Typography
            variant="h6"
            sx={{
              color: "white",
              fontWeight: 600,
              fontSize: { xs: "14px", sm: "16px" },
            }}
          >
            Product Tracking Details
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <IconButton
            sx={{
              width: { xs: 24, sm: 28 },
              height: { xs: 24, sm: 28 },
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
                width: { xs: 14, sm: 15 },
                height: { xs: 14, sm: 15 },
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
                width: { xs: 16, sm: 20 },
                height: { xs: 16, sm: 20 },
              }}
            />
          </IconButton>
        </Box>
      </Box>

      <Collapse in={expanded}>
        <Box sx={{ pt: { xs: 1.5, sm: 2 } }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",     
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)", 
                lg: "repeat(4, 1fr)", 
              },
              gap: 1.5,
              mb: { xs: 1.5, sm: 2 },
            }}
          >
            {data.map((item, index) => (
              <Box
                key={index}
                sx={{
                  p: { xs: 1, sm: 1.5 },
                  backgroundColor: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  borderRadius: "4px",
                }}
              >
                <Box sx={{ display: "flex", justifyContent: "space-between", gap: 2 }}>
                  <Box>
                    <Typography
                      variant="caption"
                      sx={{
                        color: "white",
                        fontSize: { xs: "10px", sm: "11px" },
                        mb: 0.5,
                        display: "block",
                      }}
                    >
                      Batch Number
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "white",
                        fontSize: { xs: "12px", sm: "13px" },
                        fontWeight: 600,
                      }}
                    >
                      {item.batchNumber}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      variant="caption"
                      sx={{
                        color: "white",
                        fontSize: { xs: "10px", sm: "11px" },
                        mb: 0.5,
                        display: "block",
                      }}
                    >
                      Serial Number
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "white",
                        fontSize: { xs: "12px", sm: "13px" },
                        fontWeight: 600,
                      }}
                    >
                      {item.serialNumber}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Collapse>
    </Box>
  );
}
