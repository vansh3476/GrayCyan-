import { useState } from "react";
import productoption from "../assets/productoption.svg";
import { Box, Typography, IconButton, Chip, Collapse } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CloseIcon from "@mui/icons-material/Close";

const ColorOption = ({ color, ...props }) => (
  <Box
    sx={{
      width: 38,
      height: 38,
      borderRadius: "12px",
      backgroundColor: color,
      cursor: "pointer",
      transition: "all 0.2s ease",
      "&:hover": {
        transform: "scale(1.1)",
        boxShadow: "0 4px 12px rgba(255, 255, 255, 0.3)",
      },
    }}
    {...props}
  />
);

const DimensionChip = ({ height, width, unit }) => (
  <Chip
    label={
      <Box sx={{ display: "flex", alignItems: "center", gap: 0.75 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.375 }}>
          <Typography
            sx={{ color: "white", fontSize: "14px", fontWeight: 600 }}
          >
            {height}
          </Typography>
          <Typography
            sx={{ color: "#C6CCFF", fontSize: "12px", fontWeight: 600 }}
          >
            H
          </Typography>
        </Box>
        <CloseIcon sx={{ fontSize: 7, color: "white" }} />
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.375 }}>
          <Typography
            sx={{ color: "white", fontSize: "14px", fontWeight: 600 }}
          >
            {width}
          </Typography>
          <Typography
            sx={{ color: "#C6CCFF", fontSize: "12px", fontWeight: 600 }}
          >
            W
          </Typography>
        </Box>
        <Typography
          sx={{ color: "white", fontSize: "10px", fontWeight: 600, ml: 1 }}
        >
          ({unit})
        </Typography>
      </Box>
    }
    sx={{
      backgroundColor: "rgba(255, 255, 255, 0.10)",
      border: "0.5px solid #BFBFBF",
      borderRadius: "5px",
      padding: "6px",
      height: "auto",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "rgba(255, 255, 255, 0.15)",
      },
      "& .MuiChip-label": {
        padding: 0,
      },
    }}
  />
);

const ControlChip = ({ label }) => (
  <Chip
    label={label}
    sx={{
      backgroundColor: "rgba(255, 255, 255, 0.10)",
      border: "0.5px solid #BFBFBF",
      borderRadius: "5px",
      padding: "6px",
      color: "white",
      fontSize: "14px",
      fontWeight: 600,
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "rgba(255, 255, 255, 0.15)",
      },
    }}
  />
);

const OptionSection = ({ title, children }) => (
  <Box
    sx={{
      padding: "12px 16px 16px 16px",
      backgroundColor: "#2F323C",
      borderRadius: "8px",
      boxShadow: "0 0 10px 0 rgba(255, 255, 255, 0.12)",
      display: "flex",
      flexDirection: "column",
      gap: 2,
    }}
  >
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{
          color: "white",
          fontSize: { xs: "14px", sm: "16px" },
          fontWeight: 600,
        }}
      >
        {title}
      </Typography>

      <IconButton
        sx={{
          width: { xs: 24, sm: 28 },
          height: { xs: 24, sm: 28 },
          borderRadius: "7px",
          background: "linear-gradient(180deg, #C346DD 0%, #6C42FC 100%)",
          "&:hover": {
            background: "linear-gradient(180deg, #C346DD 0%, #6C42FC 100%)",
            opacity: 0.9,
          },
        }}
      >
        <EditIcon sx={{ fontSize: { xs: 12, sm: 15 }, color: "white" }} />
      </IconButton>
    </Box>

    {children}
  </Box>
);

const ProductOptions = () => {
  const [expanded, setExpanded] = useState(true);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const colors = ["#95462B", "#1B2150", "#D0CDFF", "#EB413B", "#FCBE7C"];

  const dimensions = [
    { height: "12.4", width: "18.4", unit: "cm" },
    { height: "22.4", width: "28.4", unit: "cm" },
    { height: "42.4", width: "48.6", unit: "cm" },
  ];

  const controls = ["WeCan", "WeCanX"];

  return (
    <Box
      sx={{
        padding: { xs: "12px 16px", sm: "12px 16px 16px 16px" },
        backgroundColor: "#2F323C",
        borderRadius: "8px",
        boxShadow: "0 0 3px 0 rgba(255, 255, 255, 0.74)",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: expanded ? 3 : 0,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <img src={productoption} alt="productoption" />{" "}
          <Typography
            variant="h6"
            sx={{
              color: "white",
              fontSize: { xs: "14px", sm: "16px" },
              fontWeight: 600,
            }}
          >
            Product Options
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <IconButton
            sx={{
              width: { xs: 24, sm: 28 },
              height: { xs: 24, sm: 28 },
              borderRadius: "7px",
              background: "linear-gradient(180deg, #C346DD 0%, #6C42FC 100%)",
              "&:hover": {
                background: "linear-gradient(180deg, #C346DD 0%, #6C42FC 100%)",
                opacity: 0.9,
              },
            }}
          >
            <AddIcon sx={{ fontSize: { xs: 12, sm: 15 }, color: "white" }} />
          </IconButton>

          <IconButton
            onClick={handleToggle}
            sx={{
              color: "white",
              transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.3s ease",
            }}
          >
            <ExpandMoreIcon sx={{ fontSize: { xs: 12, sm: 14 } }} />
          </IconButton>
        </Box>
      </Box>

      <Collapse in={expanded}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
          <OptionSection title="Colors*">
            <Box sx={{ display: "flex", alignItems: "center", gap: 2.25 }}>
              {colors.map((color, index) => (
                <ColorOption key={index} color={color} />
              ))}
            </Box>
          </OptionSection>

          <OptionSection title="Dimensions*">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                flexWrap: "wrap",
              }}
            >
              {dimensions.map((dimension, index) => (
                <DimensionChip
                  key={index}
                  height={dimension.height}
                  width={dimension.width}
                  unit={dimension.unit}
                />
              ))}
            </Box>
          </OptionSection>

          <OptionSection title="Control">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                flexWrap: "wrap",
              }}
            >
              {controls.map((control, index) => (
                <ControlChip key={index} label={control} />
              ))}
            </Box>
          </OptionSection>
        </Box>
      </Collapse>
    </Box>
  );
};

export default ProductOptions;
