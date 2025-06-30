import React, { useEffect, useState, useContext } from "react";
import { ref, onValue } from "firebase/database";
import { database1 } from "../firebase";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Button,
  Stack,
  Modal,
  Fade,
  Backdrop,
  Divider,
  CircularProgress,
} from "@mui/material";
import { CartContext } from "../context/CartContext";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const productsRef = ref(database1, "products");

    const unsubscribe = onValue(productsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const loadedProducts = Object.entries(data).map(([id, product]) => ({
          id,
          ...product,
        }));
        setProducts(loadedProducts);
      } else {
        setProducts([]);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedProduct(null);
  };

  return (
    <Box sx={{ maxWidth: 1200, mx: "auto", p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Available Gadgets
      </Typography>

      {loading ? (
        <Box sx={{ textAlign: "center", mt: 4 }}>
          <CircularProgress />
          <Typography>Loading products...</Typography>
        </Box>
      ) : products.length === 0 ? (
        <Typography>No gadgets available at the moment.</Typography>
      ) : (
        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id} display="flex">
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                {product.imageUrl && (
                  <CardMedia
                    component="img"
                    height="180"
                    image={product.imageUrl}
                    alt={product.name}
                    sx={{ objectFit: "contain", p: 1 }}
                  />
                )}
                <CardContent>
                  <Typography variant="h6">{product.name}</Typography>
                  {product.price && (
                    <Typography variant="body2" color="text.secondary">
                      Price: ${product.price}
                    </Typography>
                  )}
                  {product.stock !== undefined && (
                    <Typography
                      variant="body2"
                      color={product.stock > 0 ? "green" : "red"}
                    >
                      {product.stock > 0
                        ? `In Stock: ${product.stock} units`
                        : "Out of Stock"}
                    </Typography>
                  )}
                </CardContent>
                <Stack
                  direction="row"
                  spacing={2}
                  justifyContent="center"
                  sx={{ pb: 2 }}
                >
                  <Button
                    variant="outlined"
                    onClick={() => handleViewDetails(product)}
                  >
                    View Details
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleAddToCart(product)}
                    disabled={product.stock === 0}
                  >
                    Add to Cart
                  </Button>
                </Stack>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}

      <Modal
        open={openModal}
        onClose={handleCloseModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
      >
        <Fade in={openModal}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: { xs: "90%", sm: 500 },
              maxHeight: "90vh",
              overflowY: "auto",
              bgcolor: "background.paper",
              boxShadow: 24,
              p: 4,
              borderRadius: 2,
            }}
          >
            {selectedProduct && (
              <>
                <Typography variant="h5" gutterBottom>
                  {selectedProduct.name}
                </Typography>
                {selectedProduct.imageUrl && (
                  <Box sx={{ mb: 2, textAlign: "center" }}>
                    <img
                      src={selectedProduct.imageUrl}
                      alt={selectedProduct.name}
                      style={{
                        maxWidth: "100%",
                        maxHeight: "300px",
                        objectFit: "contain",
                      }}
                    />
                  </Box>
                )}
                <Typography variant="body1" color="text.secondary" paragraph>
                  {selectedProduct.description}
                </Typography>
                <Divider sx={{ my: 2 }} />
                {selectedProduct.price && (
                  <Typography variant="h6" color="primary" paragraph>
                    Price: ${selectedProduct.price}
                  </Typography>
                )}
                {selectedProduct.stock !== undefined && (
                  <Typography
                    variant="body2"
                    color={selectedProduct.stock > 0 ? "green" : "red"}
                  >
                    {selectedProduct.stock > 0
                      ? `In Stock: ${selectedProduct.stock} units`
                      : "Out of Stock"}
                  </Typography>
                )}
                {selectedProduct.specs && (
                  <Box sx={{ mt: 2 }}>
                    {selectedProduct.specs.RAM && (
                      <Typography variant="body2">
                        RAM: {selectedProduct.specs.RAM}
                      </Typography>
                    )}
                    {selectedProduct.specs.Storage && (
                      <Typography variant="body2">
                        Storage: {selectedProduct.specs.Storage}
                      </Typography>
                    )}
                    {selectedProduct.specs.Battery && (
                      <Typography variant="body2">
                        Battery: {selectedProduct.specs.Battery}
                      </Typography>
                    )}
                    {selectedProduct.specs.Camera && (
                      <Typography variant="body2">
                        Camera: {selectedProduct.specs.Camera}
                      </Typography>
                    )}
                  </Box>
                )}
                <Stack
                  direction="row"
                  spacing={2}
                  justifyContent="flex-end"
                  sx={{ mt: 3 }}
                >
                  <Button
                    variant="outlined"
                    onClick={handleCloseModal}
                    color="secondary"
                  >
                    Close
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      handleAddToCart(selectedProduct);
                      handleCloseModal();
                    }}
                    disabled={selectedProduct.stock === 0}
                  >
                    Add to Cart
                  </Button>
                </Stack>
              </>
            )}
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
}
