import React from "react";
import { Box, Grid, Typography, Paper, Divider } from "@mui/material";
import EventIcon from "@mui/icons-material/Event";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ReplayIcon from "@mui/icons-material/Replay";
import PaymentIcon from "@mui/icons-material/Payment";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

const stats = [
  { value: 56, label: "Pending Payment", icon: <EventIcon />, color: "#6b7280" },
  { value: "12,689", label: "Completed", icon: <CheckCircleIcon />, color: "#16a34a" },
  { value: 124, label: "Refunded", icon: <ReplayIcon />, color: "#f59e0b" },
  { value: 32, label: "Failed", icon: <PaymentIcon />, color: "#ef4444" },
];

const StatsRow = () => {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 2,
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        borderRadius: 2,
        boxShadow: "0px 2px 6px rgba(0,0,0,0.05)",
      }}
    >
      <Grid container spacing={2} alignItems="center" justifyContent="space-around">
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
  );
};

export default StatsRow;
