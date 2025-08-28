import React from 'react'

import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import BarChart from '../../chart/BarChart';
import Donut from '../../chart/DonutChart';


// import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';


  

const DashboardPage = () => {

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Grid container spacing={3} sx={{p:3}}>
              <Grid item xs={2} md={4} size={4}>
                <Card sx={{ minHeight: 150,  boxShadow: 3 }}>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>Total Orders</Typography>
                    <Typography variant="h4" color="primary">1,245</Typography>
                  </CardContent>
                  
                  <CardActions>
                    <Button size="small">View Orders</Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12} md={4} size={4}>
                <Card sx={{ minHeight: 150, boxShadow: 3  }}>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>Total Products</Typography>
                    <Typography variant="h4" color="secondary">356</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Manage Products</Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12} md={4} size={4}>
                <Card sx={{ minHeight: 150, boxShadow: 3}}>
                  <CardContent >
                    <Typography variant="h6" gutterBottom>Customers</Typography>
                    <Typography variant="h4" color="success.main">890</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View Customers</Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={2} md={4} size={5}>
                <Card sx={{ minHeight: 250,  boxShadow: 3  }}>
                  <CardContent>

                    <BarChart/>

                  </CardContent>
                  
                </Card>
              </Grid>
              <Grid item xs={12} md={4} size={5}>
                <Card sx={{ minHeight: 265, boxShadow: 3 }}>
                  <Donut/>
                </Card>
              </Grid>
              <Grid item xs={12} md={4} size={2}>
                <Card sx={{ minHeight: 265, boxShadow: 3}}>
                  <CardContent >
                    <Typography variant="h6" gutterBottom>Customers</Typography>
                    <Typography variant="h4" color="success.main">890</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View Customers</Button>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
  )
}

export default DashboardPage
