import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { withRouter } from 'react-router-dom';
import { Avatar, Link, Button, Menu, MenuItem, Hidden } from '@material-ui/core';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    backgroundColor: theme.palette.menu.appBar.background,
    color: theme.palette.menu.appBar.text,
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    backgroundColor: theme.palette.menu.drawer.background,
    color: theme.palette.menu.drawer.text,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    backgroundColor: theme.palette.menu.drawer.background,
    color: theme.palette.menu.drawer.text,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(7) + 1,
    },
  },
  profileButton: {
    position: 'absolute',
    right: '2em',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    display: 'flex',
    alignItems: 'center'
  },
  username: {
    marginLeft: '1rem'
  },
  icon: {
    color: theme.palette.menu.drawer.icon
  },
  iconSelected: {
    color: theme.palette.secondary.main
  },
  text: {
    color: theme.palette.menu.drawer.text
  },
  menuList: {
    marginTop: '2.2em'
  }
}));

const MiniMenu = props => {
  const classes = useStyles();
  const [open, setOpen] = React.useState( false );
  const [anchorDropdown, setAnchorDropdown] = React.useState(null);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleDropdown = event => {
    setAnchorDropdown(event.currentTarget);
  };

  const handleDropdownClose = () => {
    setAnchorDropdown(null);
  }

  return (
    <div className={ classes.root }>
      <CssBaseline />
      <AppBar position="fixed" className={ clsx(classes.appBar, { [classes.appBarShift]: open, }) } >
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer" onClick={ handleDrawerOpen } edge="start" className={ clsx(classes.menuButton, { [classes.hide]: open }) } >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={ classes.logo } >
            <Avatar alt="Logo" src={ `assets/img/${ process.env.REACT_APP_LOGO }` } style={{ marginRight: '15px' }} />
            <Hidden smDown>
              { process.env.REACT_APP_COMPANY_NAME }
            </Hidden>
          </Typography>
          <div className={ classes.profileButton }>
            <Button onClick={ handleDropdown }> 
              <Hidden smDown>
                <Avatar alt="Profile" src={ `assets/img/${ process.env.REACT_APP_LOGO }` } style={{ marginRight: '15px' }} />
              </Hidden>
              Julien Carr
            </Button>
            <Menu id="simple-menu" anchorEl={ anchorDropdown } keepMounted open={ Boolean(anchorDropdown) } onClose={ handleDropdownClose } className={ classes.menuList } >
              <MenuItem onClick={ handleDropdownClose }> Logout </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" className={ clsx(classes.drawer, { [classes.drawerOpen]: open, [classes.drawerClose]: !open, })} classes={{ paper: clsx({ [classes.drawerOpen]: open, [classes.drawerClose]: !open, }), }} >
        <div className={ classes.toolbar }>
          <IconButton onClick={ handleDrawerClose } className={ classes.icon } >
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List component="nav">
          { props.schema.map((link, index) => {
            return (
              <ListItem button component={ Link } to={ link.to } selected={ props.location.pathname === link.to } key={ index } >
                <ListItemIcon className={ props.location.pathname === link.to ? classes.iconSelected : classes.icon }> { link.icon } </ListItemIcon>
                <ListItemText className={ classes.text } primary={ link.label } />
              </ListItem>
            )
          })}
        </List>

      </Drawer>
    </div>
  );
}

export default withRouter( MiniMenu)