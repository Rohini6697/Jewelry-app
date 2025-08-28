// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import CssBaseline from '@mui/material/CssBaseline';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import List from '@mui/material/List';
// import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
// import CardContent from '@mui/material/CardContent';
// import Grid from '@mui/material/Grid';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import PeopleIcon from '@mui/icons-material/People';
// import CollectionsIcon from '@mui/icons-material/Collections';


// import CategoryIcon from '@mui/icons-material/Category';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import PaymentIcon from '@mui/icons-material/Payment';
// import SettingsIcon from '@mui/icons-material/Settings';
// import TrendingUpIcon from '@mui/icons-material/TrendingUp';

// import Avatar from '@mui/material/Avatar';
// import Stack from '@mui/material/Stack';
// // import UploadAvatars from './UploadAvatars';
// // import Avatar from '@mui/material/Avatar';
// // import ButtonBase from '@mui/material/ButtonBase';

// import DashboardIcon from '@mui/icons-material/Dashboard';
// import InventoryIcon from '@mui/icons-material/Inventory';
// // import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// // import PeopleIcon from '@mui/icons-material/People';
// // import PaymentIcon from '@mui/icons-material/Payment';
// // import TrendingUpIcon from '@mui/icons-material/TrendingUp';
// // import SettingsIcon from '@mui/icons-material/Settings';




// // const items = [
// //   { text: "Orders", icon: <CategoryIcon /> },
// //   { text: "Products", icon: <ShoppingCartIcon /> },
// //   { text: "Customers", icon: <PeopleIcon /> },
// //   { text: "Collections", icon: <CollectionsIcon /> },
// // ];



// const items = [
//   { text: "Dashboard", icon: <DashboardIcon />, path: '/admin/dashboard'},
//   { text: "Products", icon: <InventoryIcon />, path: '/admin/products' },
//   { text: "Order", icon: <ShoppingCartIcon />, path: '/admin/orders' },
//   { text: "Customers", icon: <PeopleIcon />, path: '/admin/customers' },
//   { text: "Return/Refunds", icon: <PaymentIcon/> , path: '/admin/return'},
//   { text: 'Analytics', icon: <TrendingUpIcon /> , path: '/admin/analytics' },
//   { text: "Settings", icon: <SettingsIcon /> , path: '/admin/settings'},
// ]



// const listItems = [
//   { text: 'Analytics', icon: <TrendingUpIcon /> },
//   { text: "Settings", icon: <SettingsIcon />},
//   { text: "Return/Refunds", icon: <PaymentIcon/>},
// ]

// // import * as React from 'react';


// const ImageAvatars = () => {
//   return (
//     <Stack direction="row" spacing={2} sx={{marginLeft:'auto'}}>
//       <Avatar alt="Remy Sharp" src='https://media.istockphoto.com/id/1018078858/photo/gorgeous-ginger-cat-on-isolated-black-background.jpg?s=612x612&w=0&k=20&c=47yGoaN8LMsLCMKhScisycwaGnZdKTNvdTq61mHTLBo='/>
//     </Stack>
//   );
// }


// const drawerWidth = 200;
// export default function DashboardWithSideDrawer() {
//   const [open, setOpen] = React.useState(false);
//   const toggleDrawer = () => {
//     setOpen(!open);
//   };
//   return (
//     <Box sx={{ display: 'flex' }}>
//       <CssBaseline />
//       <AppBar
//         position="fixed"
//         sx={{
//           width: open ? `calc(100% - ${drawerWidth}px)` : '100%',
//           ml: open ? `${drawerWidth}px` : 0,
//           transition: 'all 0.3s ease',
//           bgcolor:'#424242'
//         }}
//       >
//         <Toolbar>
//           <IconButton
//             edge="start"
//             color="inherit"
//             aria-label="menu"
//             onClick={toggleDrawer}
//             sx={{ mr: 2 }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" noWrap component="div">
//             Dashboard
//           </Typography>
//           <ImageAvatars/>
//         </Toolbar>
        
//       </AppBar>
//       <Drawer
//         variant="persistent"
//         anchor="left"
//         open={open}
//         sx={{
//           // width: drawerWidth,
//           flexShrink: 0,
//           // '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box',bgcolor:'#757575',color:'white' },
//         }}
        
//       >
//         <Toolbar />
//         <Typography variant="h3" align='center' gutterBottom>Dennel</Typography>
//         <Divider />
        
//         <List>
//         {items.map((item) => (
//           <ListItem key={item.text} disablePadding>
//             <ListItemButton>
//               <ListItemIcon sx={{color:'white'}}>{item.icon}</ListItemIcon>
//               <ListItemText primary={item.text} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//         {/* <Divider /> */}
//         <List>
//         {listItems.map((listItems) => (
//           <ListItem key={listItems.text} disablePadding>
//             <ListItemButton>
//               <ListItemIcon sx={{color:'white'}}>{listItems.icon}</ListItemIcon>
//               <ListItemText primary={listItems.text} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//         </List>
//       </Drawer>
//       <Box
//         component="main"
//         sx={{
//           flexGrow: 1,
//           p: .3,
//           ml: open ? `${drawerWidth}px` : 0,
//           transition: 'all 0.3s ease',
//         }}
//       >
//         <Toolbar />
//         {/* <Grid container spacing={3}>
//           <Grid item xs={2} md={4} size={8}>
//             <Card sx={{ minHeight: 150,  boxShadow: 3 }}>
//               <CardContent>
//                 <Typography variant="h6" gutterBottom>Total Orders</Typography>
//                 <Typography variant="h4" color="primary">1,245</Typography>
//               </CardContent>
              
//               <CardActions>
//                 <Button size="small">View Orders</Button>
//               </CardActions>
//             </Card>
//           </Grid>
//           <Grid item xs={12} md={4} size={4}>
//             <Card sx={{ minHeight: 150, boxShadow: 3  }}>
//               <CardContent>
//                 <Typography variant="h6" gutterBottom>Total Products</Typography>
//                 <Typography variant="h4" color="secondary">356</Typography>
//               </CardContent>
//               <CardActions>
//                 <Button size="small">Manage Products</Button>
//               </CardActions>
//             </Card>
//           </Grid>
//           <Grid item xs={12} md={4} size={4}>
//             <Card sx={{ minHeight: 150, boxShadow: 3}}>
//               <CardContent >
//                 <Typography variant="h6" gutterBottom>Customers</Typography>
//                 <Typography variant="h4" color="success.main">890</Typography>
//               </CardContent>
//               <CardActions>
//                 <Button size="small">View Customers</Button>
//               </CardActions>
//             </Card>
//           </Grid>
//           <Grid item xs={2} md={4} size={8}>
//             <Card sx={{ minHeight: 150,  boxShadow: 3  }}>
//               <CardContent>
//                 <Typography variant="h6" gutterBottom>Total Orders</Typography>
//                 <Typography variant="h4" color="primary">1,245</Typography>
//               </CardContent>
//               <CardActions>
//                 <Button size="small">View Orders</Button>
//               </CardActions>
//             </Card>
//           </Grid>
//           <Grid item xs={12} md={4} size={6}>
//             <Card sx={{ minHeight: 150, boxShadow: 3 }}>
//               <CardContent>
//                 <Typography variant="h6" gutterBottom>Total Products</Typography>
//                 <Typography variant="h4" color="secondary">356</Typography>
//               </CardContent>
//               <CardActions>
//                 <Button size="small">Manage Products</Button>
//               </CardActions>
//             </Card>
//           </Grid>
//           <Grid item xs={12} md={4} size={6}>
//             <Card sx={{ minHeight: 150, boxShadow: 3}}>
//               <CardContent >
//                 <Typography variant="h6" gutterBottom>Customers</Typography>
//                 <Typography variant="h4" color="success.main">890</Typography>
//               </CardContent>
//               <CardActions>
//                 <Button size="small">View Customers</Button>
//               </CardActions>
//             </Card>
//           </Grid>
//         </Grid> */}
//       </Box>
//     </Box>
//   );
// }









