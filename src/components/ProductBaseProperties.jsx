import { useState } from "react"
import toolsicon from "../assets/toolsicon.svg"
import surfacemount from "../assets/surfacemount.svg";
import qrc from "../assets/qrc.png";
import shareicon from "../assets/shareicon.svg"
import { Box, Typography, IconButton, Grid, Chip, Avatar, Paper, Collapse } from "@mui/material"
import { Edit as EditIcon, Schedule as ScheduleIcon, ExpandMore as ExpandMoreIcon } from "@mui/icons-material"

export default function ProductBaseProperties() {
  const [expanded, setExpanded] = useState(true)

  const handleToggle = () => {
    setExpanded(!expanded)
  }

  return (
    <Box
      sx={{
        display: "flex",
        padding: {
          lg: "14px 16px",
          md: "14px 16px",
          sm: "14px 16px",
          xs: "12px",
        },
        flexDirection: "column",
        gap: 0,
        borderRadius: "7px",
        backgroundColor: "#2F323C",
        boxShadow: "0 0 3px 0 rgba(255, 255, 255, 0.74)",
        mt: { lg: 1, md: 1, sm: 1, xs: 0.5 },
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
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: { lg: 1, md: 1, sm: 1, xs: 0.5 },
          }}
        >
          <Avatar
            sx={{
              width: { lg: 32, md: 32, sm: 32, xs: 28 },
              height: { lg: 32, md: 32, sm: 32, xs: 28 },
              background: "linear-gradient(180deg, #C346DD 0%, #6C42FC 100%)",
            }}
          >
            <img src={toolsicon} alt="toolsicon" />
          </Avatar>
          <Typography
            variant="h6"
            sx={{
              color: "white",
              fontWeight: 600,
              fontSize: { lg: "16px", md: "16px", sm: "16px", xs: "14px" },
            }}
          >
            Product Base Properties
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
          <ScheduleIcon
            sx={{
              color: "white",
              width: { lg: 24, md: 24, sm: 24, xs: 20 },
              height: { lg: 24, md: 24, sm: 24, xs: 20 },
              display: { lg: "block", md: "block", sm: "block", xs: "none" },
            }}
          />
          <img src={shareicon} alt="shareicon" />
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
          <Grid container spacing={{ lg: 3, md: 3, sm: 3, xs: 2 }}>
            <Grid item lg={3} md={3} sm={4} xs={12}>
              <Paper
                sx={{
                  padding: { lg: 2, md: 2, sm: 2, xs: 1.5 },
                  backgroundColor: "rgba(255, 255, 255, 0.04)",
                  boxShadow: "0 0 4.8px 0 rgba(255, 255, 255, 0.25)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: { lg: 2, md: 2, sm: 2, xs: 1.5 },
                  borderRadius: 2,
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: { lg: 130, md: 130, sm: 115, xs: 100 },
                    padding: { lg: 2, md: 2, sm: 2, xs: 1 },
                    borderRadius: 2,
                    border: "0.882px solid #D1D1D1",
                    backgroundColor: "#FEFEFE",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box
                    component="img"
                    src={surfacemount}
                    alt="Surface Mount Component"
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      borderRadius: 1,
                      opacity: 0.81,
                    }}
                  />
                </Box>
                <Typography
                  variant="h6"
                  sx={{
                    color: "white",
                    fontWeight: 600,
                    fontSize: {
                      lg: "16px",
                      md: "16px",
                      sm: "16px",
                      xs: "14px",
                    },
                    textAlign: "center",
                  }}
                >
                  Surface Mount
                </Typography>
              </Paper>
            </Grid>

            <Grid item lg={9} md={9} sm={8} xs={12}>
              <Grid container spacing={{ lg: 3, md: 3, sm: 2, xs: 2 }}>
                
                <Grid item lg={4} md={4} sm={4} xs={12}>
                  <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                    <Box>
                      <Typography
                        variant="caption"
                        sx={{
                          color: "white",
                          fontSize: { lg: "12px", md: "12px", sm: "11px", xs: "11px" },
                          mb: 0.5,
                          display: "block",
                        }}
                      >
                        Inventory Class*
                      </Typography>
                      <Chip
                        label="Pre Production"
                        sx={{
                          backgroundColor: "rgba(11, 147, 163, 0.40)",
                          border: "0.8px solid #0B93A3",
                          color: "white",
                          fontSize: { lg: "12px", md: "12px", sm: "11px", xs: "11px" },
                          height: { lg: 24, md: 24, sm: 22, xs: 20 },
                        }}
                      />
                    </Box>

                    <Box>
                      <Typography
                        variant="caption"
                        sx={{
                          color: "white",
                          fontSize: { lg: "12px", md: "12px", sm: "11px", xs: "11px" },
                          mb: 0.5,
                          display: "block",
                        }}
                      >
                        Part Number*
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "white",
                          fontWeight: 600,
                          fontSize: { lg: "14px", md: "14px", sm: "13px", xs: "13px" },
                        }}
                      >
                        022134
                      </Typography>
                    </Box>

                    <Box>
                      <Typography
                        variant="caption"
                        sx={{
                          color: "white",
                          fontSize: { lg: "12px", md: "12px", sm: "11px", xs: "11px" },
                          mb: 0.5,
                          display: "block",
                        }}
                      >
                        Line*
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "white",
                          fontWeight: 600,
                          fontSize: { lg: "14px", md: "14px", sm: "13px", xs: "13px" },
                        }}
                      >
                        Carbide
                      </Typography>
                    </Box>

                    <Box>
                      <Typography
                        variant="caption"
                        sx={{
                          color: "white",
                          fontSize: { lg: "12px", md: "12px", sm: "11px", xs: "11px" },
                          mb: 1,
                          display: "block",
                        }}
                      >
                        QR Code
                      </Typography>
                      <Box
                        sx={{
                          width: { lg: 50, md: 50, sm: 45, xs: 40 },
                          height: { lg: 52, md: 52, sm: 47, xs: 42 },
                          backgroundColor: "white",
                          borderRadius: 1,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                    <img src={qrc} alt="qr code" className="p-1"  />
                      </Box>
                    </Box>
                  </Box>
                </Grid>

                <Grid item lg={4} md={4} sm={4} xs={12}>
                  <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                
                    <Box>
                      <Typography
                        variant="caption"
                        sx={{
                          color: "white",
                          fontSize: { lg: "12px", md: "12px", sm: "11px", xs: "11px" },
                          mb: 0.5,
                          display: "block",
                        }}
                      >
                        SKU(ID)
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "white",
                          fontWeight: 600,
                          fontSize: { lg: "14px", md: "14px", sm: "13px", xs: "13px" },
                        }}
                      >
                        2876512
                      </Typography>
                    </Box>

                    <Box>
                      <Typography
                        variant="caption"
                        sx={{
                          color: "white",
                          fontSize: { lg: "12px", md: "12px", sm: "11px", xs: "11px" },
                          mb: 0.5,
                          display: "block",
                        }}
                      >
                        Category*
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "white",
                          fontWeight: 600,
                          fontSize: { lg: "14px", md: "14px", sm: "13px", xs: "13px" },
                        }}
                      >
                        Lighting
                      </Typography>
                    </Box>

                    <Box>
                      <Typography
                        variant="caption"
                        sx={{
                          color: "white",
                          fontSize: { lg: "12px", md: "12px", sm: "11px", xs: "11px" },
                          mb: 0.5,
                          display: "block",
                        }}
                      >
                        Series
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "white",
                          fontWeight: 600,
                          fontSize: { lg: "14px", md: "14px", sm: "13px", xs: "13px" },
                        }}
                      >
                        Surface Mount
                      </Typography>
                    </Box>
                  </Box>
                </Grid>

                <Grid item lg={4} md={4} sm={4} xs={12}>
                  <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                    <Box>
                      <Typography
                        variant="caption"
                        sx={{
                          color: "white",
                          fontSize: { lg: "12px", md: "12px", sm: "11px", xs: "11px" },
                          mb: 0.5,
                          display: "block",
                        }}
                      >
                        Product Type*
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "white",
                          fontWeight: 600,
                          fontSize: { lg: "14px", md: "14px", sm: "13px", xs: "13px" },
                        }}
                      >
                        Spare Part
                      </Typography>
                    </Box>

                    <Box>
                      <Typography
                        variant="caption"
                        sx={{
                          color: "white",
                          fontSize: { lg: "12px", md: "12px", sm: "11px", xs: "11px" },
                          mb: 0.5,
                          display: "block",
                        }}
                      >
                        Family*
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "white",
                          fontWeight: 600,
                          fontSize: { lg: "14px", md: "14px", sm: "13px", xs: "13px" },
                        }}
                      >
                        Illumination
                      </Typography>
                    </Box>

                    <Box>
                      <Typography
                        variant="caption"
                        sx={{
                          color: "white",
                          fontSize: { lg: "12px", md: "12px", sm: "11px", xs: "11px" },
                          mb: 0.5,
                          display: "block",
                        }}
                      >
                        Warranty
                      </Typography>
                      <Box sx={{ display: "flex", alignItems: "baseline", gap: 0.5, flexWrap: "wrap" }}>
                        <Typography
                          variant="body2"
                          sx={{
                            color: "white",
                            fontWeight: 600,
                            fontSize: { lg: "14px", md: "14px", sm: "13px", xs: "13px" },
                          }}
                        >
                          05 Years
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{
                            color: "#C6CCFF",
                            fontSize: { lg: "12px", md: "12px", sm: "11px", xs: "11px" },
                          }}
                        >
                          10WAR-02
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: { lg: 2, md: 2, sm: 1.5, xs: 1.5 },
              mt: { lg: 3, md: 3, sm: 2.5, xs: 2 },
            }}
          >
            <Box>
              <Typography
                variant="caption"
                sx={{
                  color: "white",
                  fontSize: { lg: "12px", md: "12px", sm: "11px", xs: "11px" },
                  mb: 0.5,
                  display: "block",
                }}
              >
                Description
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "white",
                  fontWeight: 600,
                  fontSize: { lg: "14px", md: "14px", sm: "13px", xs: "13px" },
                  lineHeight: 1.2,
                }}
              >
                Lorem ipsum dolor sit amet. Et molestiae fuga id consequatur quia qui aliquid volupta.
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="caption"
                sx={{
                  color: "white",
                  fontSize: { lg: "12px", md: "12px", sm: "11px", xs: "11px" },
                  mb: 0.5,
                  display: "block",
                }}
              >
                Long Description
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "white",
                  fontWeight: 600,
                  fontSize: { lg: "14px", md: "14px", sm: "13px", xs: "13px" },
                  lineHeight: 1.3,
                }}
              >
                Lorem ipsum dolor sit amet. Et molestiae fuga id consequatur quia qui aliquid voluptas. Aut praesentium
                corrupti est consequatur eligendi rem ratione officia est consequuntur Quis ut sint unde.
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="caption"
                sx={{
                  color: "white",
                  fontSize: { lg: "12px", md: "12px", sm: "11px", xs: "11px" },
                  mb: 0.5,
                  display: "block",
                }}
              >
                Marketing Description
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "white",
                  fontWeight: 600,
                  fontSize: { lg: "14px", md: "14px", sm: "13px", xs: "13px" },
                  lineHeight: 1.3,
                }}
              >
                Lorem ipsum dolor sit amet. Et molestiae fuga id consequatur quia qui aliquid voluptas. Aut praesentium
                corrupti est consequatur eligendi rem ratione officia est consequuntur Quis ut sint unde.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Collapse>
    </Box>
  )
}
