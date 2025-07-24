import { useState } from 'react';
import productacc from "../assets/productacc.svg";
import { Box,  Typography, IconButton, Grid,Card,CardMedia,Collapse} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Dual from '../assets/Dual.png';
import HandsFree from '../assets/handFree.png';
import Scanlock from '../assets/Scanlock.png';
import Single from '../assets/Single.png';
import CoreR from '../assets/Core-R.png';
import CoreS from '../assets/Core-S.png';

const accessoryProducts = [
  {
    id: 1,
    name: 'Dual',
    image: Dual
  },
  {
    id: 2,
    name: 'Hands free',
    image: HandsFree
  },
  {
    id: 3,
    name: 'Scanlock',
    image: Scanlock  },
  {
    id: 4,
    name: 'Single',
    image: Single
  },
  {
    id: 5,
    name: 'Core-R',
    image: CoreR
  },
  {
    id: 6,
    name: 'Core-S',
    image: CoreS
  }
];

const ProductCard = ({ product, isVisible = true }) => (
  <Card
    sx={{
      backgroundColor: 'rgba(255, 255, 255, 0.04)',
      boxShadow: '0 0 3px 0 rgba(255, 255, 255, 0.42)',
      borderRadius: '4px',
      padding: '11px 9px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 1.5,
      height: '100px',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      opacity: isVisible ? 1 : 0.005,
      '&:hover': {
        backgroundColor: isVisible ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.04)',
        boxShadow: isVisible ? '0 0 6px 0 rgba(255, 255, 255, 0.6)' : '0 0 3px 0 rgba(255, 255, 255, 0.42)'
      }
    }}
  >
    <Box
      sx={{
        width: '74.375px',
        height: '47.813px',
        backgroundColor: '#FFF',
        borderRadius: '2px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}
    >
      <CardMedia
        component="img"
        image={product.image}
        alt={product.name}
        sx={{
          width: '74px',
          height: '48px',
          objectFit: 'cover'
        }}
      />
    </Box>
    
    <Typography
      sx={{
        color: 'white',
        fontSize: '10px',
        fontWeight: 400,
        textAlign: 'center',
        lineHeight: '100%'
      }}
    >
      {product.name}
    </Typography>
  </Card>
);

const ProductAccessories = () => {
  const [expanded, setExpanded] = useState(true);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <Box
      sx={{
        padding: { xs: '12px 16px', sm: '12px 16px 16px 16px' },
        backgroundColor: '#2F323C',
        borderRadius: '8px',
        boxShadow: '0 0 3px 0 rgba(255, 255, 255, 0.74)',
        width: '100%'
      }}
    >
      <Box 
        sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          mb: expanded ? 2.5 : 0
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <img src={productacc} alt="productacc" />
          <Typography 
            variant="h6" 
            sx={{ 
              color: 'white',
              fontSize: { xs: '14px', sm: '16px' },
              fontWeight: 600
            }}
          >
            Product Accessories
          </Typography>
        </Box>
        
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <IconButton
            sx={{
              width: { xs: 24, sm: 28 },
              height: { xs: 24, sm: 28 },
              borderRadius: '7px',
              background: 'linear-gradient(180deg, #C346DD 0%, #6C42FC 100%)',
              '&:hover': {
                background: 'linear-gradient(180deg, #C346DD 0%, #6C42FC 100%)',
                opacity: 0.9
              }
            }}
          >
            <EditIcon sx={{ fontSize: { xs: 12, sm: 15 }, color: 'white' }} />
          </IconButton>
          
          <IconButton 
            onClick={handleToggle}
            sx={{ 
              color: 'white',
              transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.3s ease'
            }}
          >
            <ExpandMoreIcon sx={{ fontSize: { xs: 12, sm: 14 } }} />
          </IconButton>
        </Box>
      </Box>

      <Collapse in={expanded}>
        <Grid container spacing={2}>
          {accessoryProducts.map((product, index) => (
            <Grid 
              item 
              xs={6} 
              sm={4} 
              md={3} 
              lg={2.4}
              xl={2}
              key={product.id}
            >
              <ProductCard 
                product={product} 
                isVisible={index < 6} 
              />
            </Grid>
          ))}
        </Grid>
      </Collapse>
    </Box>
  );
};

export default ProductAccessories;
