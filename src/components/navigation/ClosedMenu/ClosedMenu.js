import React from 'react'
import clsx from 'clsx';
import { withRouter, Link } from 'react-router-dom'
import { AppBar, Toolbar, IconButton, Typography, Drawer, Divider, List, ListItem, ListItemText, Avatar, makeStyles, Hidden, Button, Menu, MenuItem, ListItemIcon } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import MenuIcon from '@material-ui/icons/Menu';
import { KeyboardArrowDown } from '@material-ui/icons';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    height: '64px',
    position: 'relative',
    zIndex: '99'
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  drawer: {
    width: `${drawerWidth}px`,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  logo: {
    display: 'flex',
    alignItems: 'center'
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  profileButton: {
    position: 'absolute',
    right: '2em',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 1em',
    height: '63px',
  },
  listItemIcon: {
    display: 'inline-flex',
    minWidth: '56px'
  },
  drawerPaper: {
    width: drawerWidth,
  }
}))

const ClosedMenu = ({ schema, logo, companyName, user, ...props }) => {

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
      <AppBar color='inherit' position="fixed" className={ clsx(classes.appBar, { [classes.appBarShift]: open, }) } >
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={ handleDrawerOpen } className={ clsx(classes.menuButton, { [classes.hide]: open }) } >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={ classes.logo } >
            <Avatar alt="Logo" src={ logo } style={{ marginRight: '15px' }} />
            <Hidden smDown>
              { companyName }
            </Hidden>
          </Typography>
          <div className={ classes.profileButton }>
            <Button onClick={ handleDropdown }> 
              <Hidden smDown>
                <Avatar alt="Profile" src={ user.profilePicture } style={{ marginRight: '15px' }} />
              </Hidden>

              { user.name }

              <KeyboardArrowDown />
            </Button>
            <Menu id="simple-menu" anchorEl={ anchorDropdown } keepMounted open={ Boolean(anchorDropdown) } onClose={ handleDropdownClose } className={ classes.menuList } >
              <MenuItem onClick={ handleDropdownClose }> Logout </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer open={ open } className={ classes.drawer } classes={{ paper: classes.drawerPaper }} >
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
                <ListItemText primary={ link.label } primaryTypographyProps={{ color: 'inherit' }} />
              </ListItem>
            )
          })}
        </List>
      </Drawer>
    </div>
  )
}

export default withRouter( ClosedMenu )