import React, { useContext } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Button,
  Divider,
  Snackbar,
  Alert,
} from "@mui/material";
import { Add, Remove, Delete } from "@mui/icons-material";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    getTotal,
  } = useContext(CartContext);

  const navigate = useNavigate();
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const total = getTotal();

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty! Add some items before checking out.");
      return;
    }
    // Navigate to payment page and pass total via state
    navigate("/payment", { state: { total } });
  };

  return (
    <Box sx={{ maxWidth: 1000, mx: "auto", p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Your Cart
      </Typography>

      {cartItems.length === 0 ? (
        <Typography>Your cart is empty.</Typography>
      ) : (
        <>
          <Grid container spacing={3}>
            {cartItems.map((item) => (
              <Grid item xs={12} key={item.id}>
                <Card sx={{ display: "flex", alignItems: "center", p: 2 }}>
                  {item.imageUrl && (
                    <CardMedia
                      component="img"
                      image={item.imageUrl}
                      alt={item.name}
                      sx={{ width: 120, height: 100, mr: 2 }}
                    />
                  )}
                  <CardContent sx={{ flex: 1 }}>
                    <Typography variant="h6">{item.name}</Typography>
                    <Typography color="text.secondary">
                      KES {item.price.toFixed(2)} × {item.quantity}
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                      <IconButton onClick={() => decreaseQuantity(item.id)}>
                        <Remove />
                      </IconButton>
                      <Typography sx={{ mx: 2 }}>{item.quantity}</Typography>
                      <IconButton onClick={() => increaseQuantity(item.id)}>
                        <Add />
                      </IconButton>
                      <IconButton
                        color="error"
                        onClick={() => removeFromCart(item.id)}
                        sx={{ ml: 2 }}
                      >
                        <Delete />
                      </IconButton>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Divider sx={{ my: 4 }} />

          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h6">Total: KES {total.toFixed(2)}</Typography>
            <Box>
              <Button
                variant="outlined"
                color="error"
                onClick={clearCart}
                sx={{ mr: 2 }}
              >
                Clear Cart
              </Button>
              <Button variant="contained" color="primary" onClick={handleCheckout}>
                Checkout
              </Button>
            </Box>
          </Box>
        </>
      )}

      <Snackbar
        open={openSnackbar}
        autoHideDuration={4000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          Checkout successful! Thank you for your purchase.
        </Alert>
      </Snackbar>
    </Box>
  );
}
