import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Box,
} from '@mui/material';

const GadgetCard = ({ gadget }) => {
  const handleClick = () => {
    // You can route to product page or open modal
    alert(`Clicked on ${gadget.name}`);
  };

  return (
    <Card
      onClick={handleClick}
      sx={{
        maxWidth: 280,
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        cursor: 'pointer',
        mx: 'auto',
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: 6,
        },
      }}
    >
      <CardMedia
        component="img"
        height="80"
        image={gadget.image}
        alt={gadget.name}
        sx={{ objectFit: 'contain', p: 2 }}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" fontWeight="bold">
          {gadget.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {gadget.description}
        </Typography>
        <Typography variant="h6" color="primary" mt={1}>
          Ksh {gadget.price.toLocaleString()}
        </Typography>
      </CardContent>
      <CardActions>
        <Box sx={{ flexGrow: 1 }} />
        <Button size="small" variant="contained" sx={{ borderRadius: 2 }}>
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default GadgetCard;
