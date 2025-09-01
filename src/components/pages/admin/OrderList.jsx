import React from "react";
import { Box, Grid, Typography, Paper, Divider } from "@mui/material";
import EventIcon from "@mui/icons-material/Event";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ReplayIcon from "@mui/icons-material/Replay";
import PaymentIcon from "@mui/icons-material/Payment";
import Avatar from '@mui/material/Avatar';

// import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

// import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import TextField from '@mui/material/TextField';

// import Paper from '@mui/material/Paper';

const stats = [
  { value: 56, label: "Pending Payment", icon: <EventIcon />, color: "#6b7280" },
  { value: "12,689", label: "Completed", icon: <CheckCircleIcon />, color: "#16a34a" },
  { value: 124, label: "Refunded", icon: <ReplayIcon />, color: "#f59e0b" },
  { value: 32, label: "Failed", icon: <PaymentIcon />, color: "#ef4444" },
];



const columns = [
  { field: "id", headerName: "Order ID", width: 120 },
  {
    field: "image",
    headerName: "Product",
    width: 100,
    renderCell: (params) => (
      <Avatar variant="rounded" src={params.value} alt="product" />
    ),
  },
  { field: "product", headerName: "Product Name", width: 200 },
  { field: "customer", headerName: "Customer", width: 180 },
  { field: "price", headerName: "Price ($)", type: "number", width: 120 },
  {
    field: "status",
    headerName: "Status",
    width: 140,
    renderCell: (params) => {
      const status = params.value;
      const color =
        status === "Completed"
          ? "green"
          : status === "Pending"
          ? "orange"
          : status === "Refunded"
          ? "blue"
          : "red";
      return <span style={{ color, fontWeight: "bold" }}>{status}</span>;
    },
  },
  { field: "date", headerName: "Date", width: 150 },
];

const rows = [
  {
    id: 1001,
    image: "https://via.placeholder.com/50",
    product: "Gold Necklace",
    customer: "Jon Snow",
    price: 499,
    status: "Completed",
    date: "2024-08-10",
  },
  {
    id: 1002,
    image: "https://via.placeholder.com/50",
    product: "Diamond Ring",
    customer: "Arya Stark",
    price: 999,
    status: "Pending",
    date: "2024-08-12",
  },
  {
    id: 1003,
    image: "https://via.placeholder.com/50",
    product: "Silver Bracelet",
    customer: "Cersei Lannister",
    price: 299,
    status: "Refunded",
    date: "2024-08-13",
  },
  {
    id: 1004,
    image: "https://via.placeholder.com/50",
    product: "Pearl Earrings",
    customer: "Daenerys Targaryen",
    price: 199,
    status: "Failed",
    date: "2024-08-14",
  },
];

const paginationModel = { page: 0, pageSize: 5 };




const StatsRow = () => {
  const [searchText, setSearchText] = React.useState('');
   const filteredRows = rows.filter((row) =>
    Object.values(row)
      .join(' ')
      .toLowerCase()
      .includes(searchText.toLowerCase())
  );
  return (
    <>
    <Paper
      elevation={0}
      sx={{
        p: 2,
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        borderRadius: 2,
        boxShadow: "0px 2px 6px rgba(0,0,0,0.2)",
        marginTop:2
      }}
    >
      <Grid container spacing={2} gap={10}>
        {stats.map((item, index) => (
          <React.Fragment key={index}>
            <Grid item xs={12} sm={6} md={2} lg={2} textAlign="center">
              <Box display="flex" flexDirection="column" alignItems="center" gap={1}>
                <Box
                  sx={{
                    bgcolor: "#f3f4f6",
                    p: 1.2,
                    borderRadius: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {item.icon}
                </Box>
                <Typography variant="h6" fontWeight="bold">
                  {item.value}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.label}
                </Typography>
              </Box>
            </Grid>
            {index < stats.length - 1 && (
              <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />
            )}
          </React.Fragment>
        ))}
      </Grid>
    </Paper>
    <Paper sx={{  marginTop:2, p: 2 ,boxShadow: "0px 2px 6px rgba(0,0,0,0.2)",}}>
        {/* Search box */}
        <Box sx={{ mb: 2 }}>
          <TextField
            label="Search orders..."
            variant="outlined"
            size="small"
            fullWidth
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </Box>

        <DataGrid
          rows={filteredRows}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          sx={{ border: 0 }}
        />
      </Paper>
    </>
  );
};

export default StatsRow;
