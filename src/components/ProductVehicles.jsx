import { useState } from "react"
import provehi from "../assets/provehi.svg"
import {Box, Typography, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Collapse} from "@mui/material"
import AddIcon from "@mui/icons-material/Add"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"

const vehicleData = [
  {
    id: 29,
    make: "BMW",
    model: "3 Series",
    year: 2025,
    trim: "M340i",
    trimDescription: "M340i 4dr Sedan (3.0L 6cyl Turbo gas/electric mild hybrid 8A)",
  },
  {
    id: 26,
    make: "Toyota",
    model: "3 Series",
    year: 2025,
    trim: "T340i",
    trimDescription: "M340i 4dr Sedan (3.0L 6cyl Turbo gas/electric mild hybrid 8A)",
  },
  {
    id: 29,
    make: "BMW",
    model: "3 Series",
    year: 2025,
    trim: "M340i",
    trimDescription: "M340i 4dr Sedan (3.0L 6cyl Turbo gas/electric mild hybrid 8A)",
  },
  {
    id: 26,
    make: "Toyota",
    model: "3 Series",
    year: 2025,
    trim: "T340i",
    trimDescription: "M340i 4dr Sedan (3.0L 6cyl Turbo gas/electric mild hybrid 8A)",
  },
  {
    id: 29,
    make: "BMW",
    model: "3 Series",
    year: 2025,
    trim: "M340i",
    trimDescription: "M340i 4dr Sedan (3.0L 6cyl Turbo gas/electric mild hybrid 8A)",
  },
  {
    id: 26,
    make: "Toyota",
    model: "3 Series",
    year: 2025,
    trim: "T340i",
    trimDescription: "M340i 4dr Sedan (3.0L 6cyl Turbo gas/electric mild hybrid 8A)",
  },
  {
    id: 29,
    make: "BMW",
    model: "3 Series",
    year: 2025,
    trim: "M340i",
    trimDescription: "M340i 4dr Sedan (3.0L 6cyl Turbo gas/electric mild hybrid 8A)",
  },
  {
    id: 26,
    make: "Toyota",
    model: "3 Series",
    year: 2025,
    trim: "T340i",
    trimDescription: "M340i 4dr Sedan (3.0L 6cyl Turbo gas/electric mild hybrid 8A)",
  },
  {
    id: 29,
    make: "BMW",
    model: "3 Series",
    year: 2025,
    trim: "M340i",
    trimDescription: "M340i 4dr Sedan (3.0L 6cyl Turbo gas/electric mild hybrid 8A)",
  },
  {
    id: 26,
    make: "Toyota",
    model: "3 Series",
    year: 2025,
    trim: "T340i",
    trimDescription: "M340i 4dr Sedan (3.0L 6cyl Turbo gas/electric mild hybrid 8A)",
  },
]

const ProductVehicles = () => {
  const [expanded, setExpanded] = useState(true)

  const handleToggle = () => {
    setExpanded(!expanded)
  }

  return (
    <Box
      sx={{
        padding: { xs: "12px 16px", sm: "12px 16px 16px 16px" },
        backgroundColor: "#2F323C",
        borderRadius: "8px",
        boxShadow: "0 0 3px 0 rgba(255, 255, 255, 0.74)",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: expanded ? 2 : 0,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <img src={provehi || "/placeholder.svg"} alt="provehi" />
          <Typography
            variant="h6"
            sx={{
              color: "white",
              fontSize: { xs: "14px", sm: "16px" },
              fontWeight: 600,
            }}
          >
            Product Vehicles
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
            <ExpandMoreIcon sx={{ fontSize: { md: 12, xs: 12, sm: 14 } }} />
          </IconButton>
        </Box>
      </Box>

      <Collapse in={expanded}>
        <TableContainer
          component={Paper}
          sx={{
            backgroundColor: "transparent",
            boxShadow: "none",
            "& .MuiTable-root": {
              minWidth: { xs: 800, sm: "unset" },
            },
          }}
        >
          <Table size="small">
            <TableHead>
              <TableRow
                sx={{
                  background: "linear-gradient(168deg, #53498C 8.61%, #40386C 107.59%)",
                  border: "1px solid rgba(146, 130, 237, 0.70)",
                  borderBottom: "2px solid rgba(146, 130, 237, 0.70)",
                  boxShadow: "0 7px 15px 0 rgba(0, 0, 0, 0.61)",
                }}
              >
                {["Identifier", "Make", "Model", "Year", "Trim", "Trim Description"].map((header, index) => (
                  <TableCell
                    key={index}
                    sx={{
                      color: "white",
                      fontWeight: 600,
                      fontSize: { xs: "10px", sm: "12px", md: "14px" },
                      padding: { xs: "8px 4px", sm: "12px 8px" },
                      borderRight: index < 5 ? "0.5px solid #7F7F7F" : "none",
                      textAlign: "center",
                      whiteSpace: "nowrap",
                      minWidth: header === "Trim Description" ? "200px" : "auto",
                    }}
                  >
                    {header}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {vehicleData.map((vehicle, index) => (
                <TableRow
                  key={`${vehicle.id}-${index}`}
                  sx={{
                    backgroundColor: index % 2 === 0 ? "#252832" : "#50526A",
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                    },
                  }}
                >
                  <TableCell
                    sx={{
                      color: "white",
                      fontSize: { xs: "10px", sm: "12px" },
                      padding: { xs: "8px 4px", sm: "12px 8px" },
                      borderRight: "0.5px solid #7F7F7F",
                      textAlign: "center",
                      fontWeight: 600,
                    }}
                  >
                    {vehicle.id}
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "white",
                      fontSize: { xs: "10px", sm: "12px" },
                      padding: { xs: "8px 4px", sm: "12px 8px" },
                      borderRight: "0.5px solid #7F7F7F",
                      textAlign: "center",
                      fontWeight: 600,
                    }}
                  >
                    {vehicle.make}
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "white",
                      fontSize: { xs: "10px", sm: "12px" },
                      padding: { xs: "8px 4px", sm: "12px 8px" },
                      borderRight: "0.5px solid #7F7F7F",
                      textAlign: "center",
                      fontWeight: 600,
                    }}
                  >
                    {vehicle.model}
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "white",
                      fontSize: { xs: "10px", sm: "12px" },
                      padding: { xs: "8px 4px", sm: "12px 8px" },
                      borderRight: "0.5px solid #7F7F7F",
                      textAlign: "center",
                      fontWeight: 600,
                    }}
                  >
                    {vehicle.year}
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "white",
                      fontSize: { xs: "10px", sm: "12px" },
                      padding: { xs: "8px 4px", sm: "12px 8px" },
                      borderRight: "0.5px solid #7F7F7F",
                      textAlign: "center",
                      fontWeight: 600,
                    }}
                  >
                    {vehicle.trim}
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "white",
                      fontSize: { xs: "10px", sm: "12px" },
                      padding: { xs: "8px 4px", sm: "12px 8px" },
                      textAlign: "center",
                      fontWeight: 600,
                    }}
                  >
                    {vehicle.trimDescription}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Collapse>
    </Box>
  )
}

export default ProductVehicles
