import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  MenuItem,
  Paper,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const categories = ["Rings", "Earrings", "Bracelets", "Neckaces"];

function AddProduct() {
  const [product, setProduct] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
    description: "",
    info: "",
    returnPolicy: "",
    shippingPolicy: "",
    addedDate: "",
    image: null,
  });

  const [preview, setPreview] = useState(null);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProduct((prev) => ({ ...prev, image: file }));
      setPreview(URL.createObjectURL(file));
    }
  };

  const validate = () => {
    let temp = {};
    temp.name = product.name ? "" : "Product name is required";
    temp.category = product.category ? "" : "Category is required";
    temp.price =
      product.price && !isNaN(product.price) ? "" : "Valid price required";
    temp.stock =
      product.stock && !isNaN(product.stock) ? "" : "Valid stock required";
    temp.description = product.description ? "" : "Description is required";
    temp.addedDate = product.addedDate ? "" : "Added Date is required";
    temp.info = product.info ? "" : "Additional info is required";
    temp.returnPolicy = product.returnPolicy
      ? ""
      : "Return policy is required";
    temp.shippingPolicy = product.shippingPolicy
      ? ""
      : "Shipping policy is required";

    setErrors(temp);
    return Object.values(temp).every((x) => x === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    console.log("Product submitted:", product);
    alert("Product added successfully ✅");

    // Reset
    setProduct({
      name: "",
      category: "",
      price: "",
      stock: "",
      description: "",
      info: "",
      returnPolicy: "",
      shippingPolicy: "",
      addedDate: "",
      image: null,
    });
    setPreview(null);
  };

  const handleReset = () => {
    setProduct({
      name: "",
      category: "",
      price: "",
      stock: "",
      description: "",
      info: "",
      returnPolicy: "",
      shippingPolicy: "",
      addedDate: "",
      image: null,
    });
    setPreview(null);
    setErrors({});
  };

  return (
    <Box sx={{ maxWidth: 800, mx: "auto", mt: 3 }}>
      <Paper sx={{ p: 4, borderRadius: 3, boxShadow: 3 }}>
        <Typography variant="h5" gutterBottom>
          Add New Product
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            {/* Product Name */}
            <Grid item xs={12} sm={6} size={4}>
              <TextField
                fullWidth
                label="Product Name"
                name="name"
                value={product.name}
                onChange={handleChange}
                error={!!errors.name}
                helperText={errors.name}
              />
            </Grid>

            {/* Price */}
            <Grid item xs={12} sm={6} size={4}>
              <TextField
                fullWidth
                label="Price ($)"
                name="price"
                value={product.price}
                onChange={handleChange}
                error={!!errors.price}
                helperText={errors.price}
              />
            </Grid>

            {/* Stock */}
            <Grid item xs={12} sm={6} size={4}>
              <TextField
                fullWidth
                label="Stock"
                name="stock"
                value={product.stock}
                onChange={handleChange}
                error={!!errors.stock}
                helperText={errors.stock}
              />
            </Grid>

            {/* Category */}
            <Grid item xs={12} sm={6} size={2.5}>
              <TextField
                select
                fullWidth
                label="Category"
                name="category"
                value={product.category}
                onChange={handleChange}
                error={!!errors.category}
                helperText={errors.category}
              >
                {categories.map((cat) => (
                  <MenuItem key={cat} value={cat}>
                    {cat}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            {/* Added Date */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                type="date"
                label="Added Date"
                name="addedDate"
                InputLabelProps={{ shrink: true }}
                value={product.addedDate}
                onChange={handleChange}
                error={!!errors.addedDate}
                helperText={errors.addedDate}
              />
            </Grid>

            {/* Description */}
            <Grid item xs={12} size={6.4}>
              <TextField
                fullWidth
                multiline
                rows={3}
                label="Description"
                name="description"
                value={product.description}
                onChange={handleChange}
                error={!!errors.description}
                helperText={errors.description}
              />
            </Grid>

            {/* Info */}
            <Grid item xs={12} size={4}>
              <TextField
                fullWidth
                multiline
                rows={2}
                label="Additional Info"
                name="info"
                value={product.info}
                onChange={handleChange}
                error={!!errors.info}
                helperText={errors.info}
              />
            </Grid>

            {/* Return Policy */}
            <Grid item xs={12} size={4}>
              <TextField
                fullWidth
                multiline
                rows={2}
                label="Return Policy"
                name="returnPolicy"
                value={product.returnPolicy}
                onChange={handleChange}
                error={!!errors.returnPolicy}
                helperText={errors.returnPolicy}
              />
            </Grid>

            {/* Shipping Policy */}
            <Grid item xs={12} size={4}>
              <TextField
                fullWidth
                multiline
                rows={2}
                label="Shipping Policy"
                name="shippingPolicy"
                value={product.shippingPolicy}
                onChange={handleChange}
                error={!!errors.shippingPolicy}
                helperText={errors.shippingPolicy}
              />
            </Grid>

            {/* Image Upload */}
            <Grid item xs={12}>
              <Button
                variant="outlined"
                component="label"
                startIcon={<CloudUploadIcon />}
              >
                Upload Image
                <input type="file" hidden onChange={handleImageChange} />
              </Button>
              {preview && (
                <Box mt={2}>
                  <img
                    src={preview}
                    alt="Preview"
                    style={{ width: "150px", borderRadius: "8px" }}
                  />
                </Box>
              )}
            </Grid>

            {/* Buttons */}
            <Grid item xs={12} sx={{ textAlign: "right" }}>
              <Button
                variant="outlined"
                color="secondary"
                onClick={handleReset}
                sx={{ mr: 2 }}
              >
                Reset
              </Button>
              <Button variant="contained" type="submit" color="primary">
                Add Product
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
}

export default AddProduct;
