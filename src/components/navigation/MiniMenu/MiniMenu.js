import React from 'react';
import clsx from 'clsx';
import { withRouter, Link } from 'react-router-dom';
import { Avatar, Button, Menu, MenuItem, makeStyles, CssBaseline, AppBar, Toolbar, IconButton, Drawer, Divider, List, ListItem, ListItemIcon, ListItemText, Hidden } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import { KeyboardArrowDown } from '@material-ui/icons';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  appBar: {
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
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
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
    height: '3em'
  },
  username: {
    marginLeft: '1rem'
  },
  iconSelected: {
    color: theme.palette.primary
  },
  menuList: {
    marginTop: '2.2em'
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  }
}));

const MiniMenu = ({ schema, logo, companyName, user, handleLogout, ...props }) => {

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

  const onLogout = () => {
    handleLogout()
    handleDropdownClose()
  }

  return (
    <div className={ classes.root }>
      <CssBaseline />
      <AppBar color='inherit' position="fixed" className={ clsx(classes.appBar, { [classes.appBarShift]: open, }) } >
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer" onClick={ handleDrawerOpen } edge="start" className={ clsx(classes.menuButton, { [classes.hide]: open }) } >
            <MenuIcon />
          </IconButton>
          <img alt="Logo" src={ logo } className={ classes.logo } />
          <div className={ classes.profileButton }>
            <Button onClick={ handleDropdown }> 
              <Hidden smDown>
                <Avatar alt="Profile" src={ user.picture } style={{ marginRight: '15px' }} />
              </Hidden>

              { user.name }

              <KeyboardArrowDown />
            </Button>
            <Menu id="simple-menu" anchorEl={ anchorDropdown } keepMounted open={ Boolean(anchorDropdown) } onClose={ handleDropdownClose } className={ classes.menuList } >
              <MenuItem onClick={ onLogout }> Logout </MenuItem>
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
          { schema.map((link, index) => {
            return (
              <ListItem button component={ Link } to={ link.to } selected={ props.location.pathname === link.to } key={ index } >
                <ListItemIcon>{ link.icon }</ListItemIcon>
                <ListItemText className={ classes.text } primary={ link.label } />
              </ListItem>
            )
          })}
        </List>
      </Drawer>

      <main className={classes.content}>
        <div className={classes.toolbar} />
        { props.children }
      </main>
    </div>
  );
}

export default withRouter( MiniMenu )