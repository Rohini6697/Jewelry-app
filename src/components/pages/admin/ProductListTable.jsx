import React, { useState } from "react";
import {
  Box,
  TextField,
  Select,
  MenuItem,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
  Typography,
  Switch,
  Menu,
  TablePagination,   // 👈 import pagination
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import AddIcon from "@mui/icons-material/Add";
import PrintIcon from "@mui/icons-material/Print";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import GridOnIcon from "@mui/icons-material/GridOn";
import TableChartIcon from "@mui/icons-material/TableChart";
import { useNavigate } from "react-router-dom";
import { Allproducts } from "../../../data/AllProducts";

export default function ProductDashboard() {
  const [products, setProducts] = useState(
    Allproducts.map((p) => ({
      ...p,
      stock: true,
      qty: Math.floor(Math.random() * 100) + 1,
      sku: "SKU-" + p.id,
    }))
  );

  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("Status");
  const [stockFilter, setStockFilter] = useState("Stock");

  // 👇 pagination states
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(7);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleExportClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleStockToggle = (index) => {
    const updated = [...products];
    updated[index].stock = !updated[index].stock;
    setProducts(updated);
  };

  const filteredProducts = products.filter((p) => {
    const matchSearch =
      p.product.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase());

    const matchStatus =
      statusFilter === "Status"
        ? true
        : statusFilter === "Active"
        ? p.stock
        : !p.stock;

    const matchStock =
      stockFilter === "Stock"
        ? true
        : stockFilter === "In Stock"
        ? p.stock
        : !p.stock;

    return matchSearch && matchStatus && matchStock;
  });

  // 👇 pagination handlers
  const handleChangePage = (event, newPage) => setPage(newPage);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Box sx={{ p: 2 }}>
      {/* Top controls (search, filters, buttons) */}
      {/* ... your existing top controls code ... */}

      {/* Products table */}
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell>Stock</TableCell>
              <TableCell>SKU</TableCell>
              <TableCell>QTY</TableCell>
              <TableCell>Price ($)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredProducts
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((p, i) => (
                <TableRow key={p.id}>
                  <TableCell>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      <Avatar
                        variant="rounded"
                        src={p.image}
                        alt={p.product}
                        sx={{ width: 40, height: 40 }}
                      />
                      <Box>
                        <Typography variant="body2">{p.product}</Typography>
                        <Typography variant="caption" color="text.secondary">
                          {p.description.slice(0, 50)}...
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Switch
                      checked={p.stock}
                      onChange={() => handleStockToggle(i)}
                    />
                  </TableCell>
                  <TableCell>{p.sku}</TableCell>
                  <TableCell>{p.qty}</TableCell>
                  <TableCell>{p.price.toFixed(2)}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* 👇 Pagination bar with count */}
      <TablePagination
        component="div"
        count={filteredProducts.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={[5, 7, 10, 20]}
      />
    </Box>
  );
}
