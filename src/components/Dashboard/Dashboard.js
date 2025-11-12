import { Box, Typography, Card, CardMedia, CardContent, CardActions, Button } from '@mui/material';
import React from 'react';
import './Dashboard.css';
import Jeans from '../Images/Jeans.jpg';
import Jacket from '../Images/Jacket.webp';
import Shoes from '../Images/Shoes.jpg';

const Dashboard = () => {
  return (
    <Box 
      className="flex-container" 
      sx={{ display: 'flex',  flexWrap: 'wrap', justifyContent: 'space-evenly' }}
    >
      {/* Card 1 */}
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="200"
          image={Jeans}
          alt="Jeans"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Jeans
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Jeans are a type of pants or trousers, typically made from denim or dungaree cloth.
          </Typography>
        </CardContent>
        <CardActions>
<Button size="small">Click Here</Button>
        </CardActions>
      </Card>

      {/* Card 2 */}
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="200"
          image={Jacket}
          alt="Jeans"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Jacket
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Jackets are typically worn on the upper body and have sleeves.
          </Typography>
        </CardContent>
        <CardActions>
<Button size="small">Click Here</Button>
        </CardActions>
      </Card>

      {/* Card 3 */}
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="200"
          image={Shoes}
          alt="Jeans"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Shoes
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Shoes are a type of footwear designed to protect and comfort the human foot.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Click Here</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default Dashboard;
