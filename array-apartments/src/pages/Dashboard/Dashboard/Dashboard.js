import MailIcon from "@mui/icons-material/Mail";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import PropTypes from "prop-types";
import * as React from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import AdminRoute from "../../Login/AdminRoute/AdminRoute";
import AddPackages from "../AddPackages/AddPackages";
import AdminManagePackages from "../AdminManagePackages/AdminManagePackages.js/AdminManagePackages.js";
import MakeAdmin from "../MakeAdmin/MakeAdmin.js";
import MyBookings from "../MyBookings/MyBookings";
import Payment from "../Payment/Payment";
import Reviews from "../Reviews/Reviews/Reviews";
import TotalBookings from "../TotalBookings/TotalBookings";

const drawerWidth = 200;

// main function starts here
function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  let { path, url } = useRouteMatch();
  const { admin } = useAuth();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />

      {/* Nesting area  */}
      {!admin && (
        <Box>
          <Link to={`${url}/payment`}>
            <Button color="secondary">Payment</Button>
          </Link>
          <Link to={`${url}/myBookings`}>
            <Button color="secondary">My Bookings</Button>
          </Link>
          <Link to={`${url}/reviews`}>
            <Button color="secondary">Reviews</Button>
          </Link>
        </Box>
      )}
      {admin && (
        <Box>
          <Link to={`${url}/makeAdmin`}>
            <Button color="secondary">Make Admin</Button>
          </Link>
          <Link to={`${url}/addPackages`}>
            <Button color="secondary">Add Packages</Button>
          </Link>
          <Link to={`${url}/adminManagePackages`}>
            <Button color="secondary">Manage All Packages</Button>
          </Link>
          <Link to={`${url}/totalBookings`}>
            <Button color="secondary">Total Bookings</Button>
          </Link>
        </Box>
      )}
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {/* Dashboard Routing  */}
        <Switch>
          <Route exact path={`${url}/payment`}>
            <Payment></Payment>
          </Route>
          <Route exact path={`${url}/myBookings`}>
            <MyBookings></MyBookings>
          </Route>
          <Route exact path={`${url}/reviews`}>
            <Reviews></Reviews>
          </Route>

          {/* Admin Route  */}
          <AdminRoute path={`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>
          </AdminRoute>

          <AdminRoute path={`${path}/addPackages`}>
            <AddPackages></AddPackages>
          </AdminRoute>

          <AdminRoute path={`${path}/adminManagePackages`}>
            <AdminManagePackages></AdminManagePackages>
          </AdminRoute>

          <AdminRoute path={`${path}/totalBookings`}>
            <TotalBookings></TotalBookings>
          </AdminRoute>
        </Switch>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
