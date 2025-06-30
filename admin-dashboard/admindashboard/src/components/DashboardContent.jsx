import React, { useEffect, useState } from "react";
import { ref, push, onValue, set, update, remove } from "firebase/database";
import { database1 } from "../firebase";
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Stack,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";

export default function DashboardContent() {
  const [products, setProducts] = useState([]);
  const [newProductName, setNewProductName] = useState("");
  const [newProductPrice, setNewProductPrice] = useState("");
  const [newProductBrand, setNewProductBrand] = useState("");
  const [newProductDesc, setNewProductDesc] = useState("");
  const [newProductImage, setNewProductImage] = useState("");
  const [newProductSpecs, setNewProductSpecs] = useState({
    RAM: "",
    Storage: "",
    Battery: "",
    Camera: "",
  });
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    const productsRef = ref(database1, "products");
    const unsubscribe = onValue(productsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const loadedProducts = Object.entries(data).map(([id, product]) => ({
          id,
          ...product,
          quantity: product.quantity || 1,
        }));
        setProducts(loadedProducts);
      } else {
        setProducts([]);
      }
    });
    return () => unsubscribe();
  }, []);

  const addProduct = async () => {
    if (!newProductName.trim() || !newProductPrice) {
      alert("Please enter product name and price.");
      return;
    }
    setUploading(true);
    try {
      const productsRef = ref(database1, "products");
      const newProductRef = push(productsRef);
      await set(newProductRef, {
        name: newProductName.trim(),
        brand: newProductBrand.trim(),
        price: parseFloat(newProductPrice),
        description: newProductDesc.trim(),
        imageUrl: newProductImage.trim(),
        specs: newProductSpecs,
        quantity: 1,
      });
      setNewProductName("");
      setNewProductBrand("");
      setNewProductPrice("");
      setNewProductDesc("");
      setNewProductImage("");
      setNewProductSpecs({ RAM: "", Storage: "", Battery: "", Camera: "" });
    } catch (error) {
      console.error("Failed to add product:", error);
      alert(`Error: ${error.message}`);
    } finally {
      setUploading(false);
    }
  };

  const updateQuantity = async (id, newQty) => {
    const productRef = ref(database1, `products/${id}`);
    await update(productRef, { quantity: newQty });
  };

  const deleteProduct = async (id) => {
    const productRef = ref(database1, `products/${id}`);
    await remove(productRef);
  };

  return (
    <Box sx={{ p: 4, backgroundColor: "#f7fafc", minHeight: "100vh" }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
        <Typography variant="h4" gutterBottom>
          Admin Dashboard
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={4}>
          Add and manage your product listings.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6">Add New Product</Typography>
        <Stack spacing={2} sx={{ mt: 2 }}>
          <TextField label="Product Name" value={newProductName} onChange={(e) => setNewProductName(e.target.value)} fullWidth />
          <TextField label="Brand" value={newProductBrand} onChange={(e) => setNewProductBrand(e.target.value)} fullWidth />
          <TextField label="Price" type="number" value={newProductPrice} onChange={(e) => setNewProductPrice(e.target.value)} fullWidth />
          <TextField label="Description" value={newProductDesc} onChange={(e) => setNewProductDesc(e.target.value)} fullWidth multiline rows={3} />
          <TextField label="Image URL" value={newProductImage} onChange={(e) => setNewProductImage(e.target.value)} fullWidth />

          <Divider sx={{ my: 2 }} />
          <Typography variant="subtitle1">Specs</Typography>
          <TextField label="RAM" value={newProductSpecs.RAM} onChange={(e) => setNewProductSpecs({ ...newProductSpecs, RAM: e.target.value })} fullWidth />
          <TextField label="Storage" value={newProductSpecs.Storage} onChange={(e) => setNewProductSpecs({ ...newProductSpecs, Storage: e.target.value })} fullWidth />
          <TextField label="Battery" value={newProductSpecs.Battery} onChange={(e) => setNewProductSpecs({ ...newProductSpecs, Battery: e.target.value })} fullWidth />
          <TextField label="Camera" value={newProductSpecs.Camera} onChange={(e) => setNewProductSpecs({ ...newProductSpecs, Camera: e.target.value })} fullWidth />

          <Button variant="contained" onClick={addProduct} disabled={uploading}>
            {uploading ? "Adding..." : "Add Product"}
          </Button>
        </Stack>

        <Divider sx={{ my: 4 }} />
        <Typography variant="h6" gutterBottom>
          Product List
        </Typography>

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Brand</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Qty</TableCell>
                <TableCell>Specs</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.brand}</TableCell>
                  <TableCell>${product.price.toFixed(2)}</TableCell>
                  <TableCell>
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <IconButton
                        onClick={() =>
                          updateQuantity(product.id, Math.max(1, product.quantity - 1))
                        }
                      >
                        <RemoveIcon />
                      </IconButton>
                      <Typography>{product.quantity}</Typography>
                      <IconButton
                        onClick={() => updateQuantity(product.id, product.quantity + 1)}
                      >
                        <AddIcon />
                      </IconButton>
                    </Stack>
                  </TableCell>
                  <TableCell>
                    RAM: {product.specs?.RAM}, Storage: {product.specs?.Storage},<br />
                    Battery: {product.specs?.Battery}, Camera: {product.specs?.Camera}
                  </TableCell>
                  <TableCell>
                    <IconButton color="error" onClick={() => deleteProduct(product.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}
