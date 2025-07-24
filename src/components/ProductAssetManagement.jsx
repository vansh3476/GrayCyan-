import { useState } from "react";
import productasset from "../assets/productasset.svg";
import {
  Box,
  Typography,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Link,
  Collapse,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import LaunchIcon from "@mui/icons-material/Launch";
import CoreR from "../assets/Core-R.png";
import blackView from "../assets/blackView.png";
import LeftAngleView from "../assets/LeftAngleView.png";

const assetData = [
  {
    id: 1,
    image: CoreR,
    imageInfo: "Front view",
    imageUrl:
      "https://Company.widen.net/s/hlwxsxtcjg/field-series-exploded-view-2",
  },
  {
    id: 2,
    image: blackView,
    imageInfo: "Back View",
    imageUrl:
      "https://Company.widen.net/s/hlwxsxtcjg/field-series-exploded-view-2",
  },
  {
    id: 3,
    image: CoreR,
    imageInfo: "Top angle view",
    imageUrl:
      "https://Company.widen.net/s/hlwxsxtcjg/field-series-exploded-view-2",
  },
  {
    id: 4,
    image: blackView,
    imageInfo: "Bottom angle View",
    imageUrl:
      "https://Company.widen.net/s/hlwxsxtcjg/field-series-exploded-view-2",
  },
  {
    id: 5,
    image: LeftAngleView,
    imageInfo: "Left angle View",
    imageUrl:
      "https://Company.widen.net/s/hlwxsxtcjg/field-series-exploded-view-2",
  },
];

const ProductAssetManagement = () => {
  const [expanded, setExpanded] = useState(true);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

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
          mb: expanded ? 2 : 0,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <img src={productasset} alt="productasset" />
          <Typography
            variant="h6"
            sx={{
              color: "white",
              fontSize: { xs: "14px", sm: "16px" },
              fontWeight: 600,
            }}
          >
            Product Asset Management
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
        <TableContainer
          component={Paper}
          sx={{
            backgroundColor: "transparent",
            boxShadow: "none",
          }}
        >
          <Table>
            <TableHead>
              <TableRow
                sx={{
                  background:
                    "linear-gradient(168deg, #53498C 8.61%, #40386C 107.59%)",
                  border: "1px solid rgba(146, 130, 237, 0.70)",
                  borderBottom: "2px solid rgba(146, 130, 237, 0.70)",
                  boxShadow: "0 7px 15px 0 rgba(0, 0, 0, 0.61)",
                }}
              >
                <TableCell
                  sx={{
                    color: "white",
                    fontWeight: 600,
                    fontSize: { xs: "12px", sm: "16px" },
                    padding: "12px 10px",
                    borderRight: "0.5px solid #7F7F7F",
                    textAlign: "center",
                    width: 60,
                  }}
                >
                  S.No.
                </TableCell>
                <TableCell
                  sx={{
                    color: "white",
                    fontWeight: 600,
                    fontSize: { xs: "12px", sm: "16px" },
                    padding: "12px 10px",
                    borderRight: "0.5px solid #7F7F7F",
                    textAlign: "center",
                    width: 150,
                  }}
                >
                  Image
                </TableCell>
                <TableCell
                  sx={{
                    color: "white",
                    fontWeight: 600,
                    fontSize: { xs: "12px", sm: "16px" },
                    padding: "12px 10px",
                    borderRight: "0.5px solid #7F7F7F",
                    textAlign: "center",
                    width: 193,
                  }}
                >
                  Image Info
                </TableCell>
                <TableCell
                  sx={{
                    color: "white",
                    fontWeight: 600,
                    fontSize: { xs: "12px", sm: "16px" },
                    padding: "12px 10px",
                    borderRight: "0.5px solid #7F7F7F",
                    textAlign: "center",
                    flex: 1,
                  }}
                >
                  Image URL
                </TableCell>
                <TableCell
                  sx={{
                    color: "white",
                    fontWeight: 600,
                    fontSize: { xs: "12px", sm: "16px" },
                    padding: "12px 10px",
                    textAlign: "center",
                    width: 100,
                  }}
                >
                  Action
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {assetData.map((asset, index) => (
                <TableRow
                  key={asset.id}
                  sx={{
                    backgroundColor:
                      index % 2 === 0 ? "rgba(255, 255, 255, 0.06)" : "#50526A",
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                    },
                  }}
                >
                  <TableCell
                    sx={{
                      color: "white",
                      fontSize: { xs: "12px", sm: "14px" },
                      padding: "12px 16px",
                      borderRight: "0.5px solid #7F7F7F",
                      textAlign: "center",
                      fontWeight: 600,
                    }}
                  >
                    {asset.id}
                  </TableCell>
                  <TableCell
                    sx={{
                      padding: "12px 16px",
                      borderRight: "0.5px solid #7F7F7F",
                      textAlign: "center",
                    }}
                  >
                    <img
                      src={asset.image}
                      alt={`Asset ${asset.id}`}
                      style={{
                        width: 45,
                        height: 30,
                        borderRadius: 2,
                        objectFit: "cover",
                      }}
                    />
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "white",
                      fontSize: { xs: "12px", sm: "14px" },
                      padding: "12px 16px",
                      borderRight: "0.5px solid #7F7F7F",
                      textAlign: "center",
                      fontWeight: 600,
                    }}
                  >
                    {asset.imageInfo}
                  </TableCell>
                  <TableCell
                    sx={{
                      padding: "12px 16px",
                      borderRight: "0.5px solid #7F7F7F",
                      textAlign: "center",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 0.5,
                      }}
                    >
                      <Link
                        href={asset.imageUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          color: "white",
                          fontSize: { xs: "10px", sm: "14px" },
                          fontWeight: 600,
                          textDecoration: "underline",
                          textDecorationThickness: "0.49px",
                          textUnderlineOffset: "2.59px",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                          maxWidth: { xs: "150px", sm: "300px" },
                        }}
                      >
                        {asset.imageUrl}
                      </Link>
                      <LaunchIcon
                        sx={{ fontSize: 9, color: "white", ml: 0.5 }}
                      />
                    </Box>
                  </TableCell>
                  <TableCell
                    sx={{
                      padding: "12px 10px",
                      textAlign: "center",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 1,
                      }}
                    >
                      <IconButton
                        size="small"
                        sx={{
                          width: 24,
                          height: 24,
                          border: "0.733px solid white",
                          borderRadius: "2.933px",
                          padding: "5.867px",
                          "&:hover": {
                            backgroundColor: "rgba(255, 255, 255, 0.1)",
                          },
                        }}
                      >
                        <EditIcon sx={{ fontSize: 12, color: "white" }} />
                      </IconButton>

                      <IconButton
                        size="small"
                        sx={{
                          width: 26,
                          height: 26,
                          border: "0.867px solid #FC7B7D",
                          borderRadius: "4px",
                          padding: "6.933px",
                          "&:hover": {
                            backgroundColor: "rgba(252, 123, 125, 0.1)",
                          },
                        }}
                      >
                        <DeleteIcon sx={{ fontSize: 12, color: "#FC7B7D" }} />
                      </IconButton>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Collapse>
    </Box>
  );
};

export default ProductAssetManagement;
