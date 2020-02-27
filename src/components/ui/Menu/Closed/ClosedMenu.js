import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { AppBar, Toolbar, IconButton, Typography, Drawer, Divider, List, ListItem, ListItemText, Avatar, makeStyles, Collapse } from '@material-ui/core';
import './ClosedMenu.css'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import MenuIcon from '@material-ui/icons/Menu';
import { ExpandLess, ExpandMore, Face } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  root: {
    height: '64px',
    position: 'relative',
    zIndex: '99'
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  logo: {
    display: 'flex',
    alignItems: 'center'
  },
  appBar: {
    zIndex: 999,
    transition: 'width 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms,margin 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms!important'
  },
  appBarShift: {
    width: 'calc(100% - 240px)!important',
    transition: 'width 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms,margin 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms!important',
    marginLeft: '240px!important'
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
    height: '63px'
  },
  listItemIcon: {
    color: 'rgba(0, 0, 0, 0.54)',
    display: 'inline-flex',
    minWidth: '56px'
  },
  dNone: {
    display: 'none'
  },
  username: {
    marginLeft: '10px'
  }
}))

const ClosedMenu = ( props ) => {

  const classes = useStyles();
  const [ menuOpen, setMenuOpen ] = React.useState({})
  const [ drawer, setDrawer ] = React.useState(false)
  const [ schema, setSchema ] = React.useState( props.schema )

  React.useEffect(() => {
    schema.forEach(link => {
      if (link.submenu) {
        setMenuOpen(prev => ({ ...prev, [link.label]: false }))
      }
    });
  }, [ setMenuOpen, schema ])

  const closeSubmenus = React.useCallback(() => {
    if (drawer) {
      let keys = Object.keys(menuOpen)
      keys.map(key => menuOpen[key] = false)
    }
  }, [ drawer, menuOpen ])

  const handleDrawer = React.useCallback(() => {
    closeSubmenus()
    setDrawer(true)
  }, [ closeSubmenus ])

  const handleCloseDrawer = React.useCallback(() => {
    closeSubmenus()
    setDrawer(false)
  }, [ closeSubmenus ])

  const handleOpen = React.useCallback(e => {
    setMenuOpen(prev => {
      !prev[e.currentTarget.childNodes[1].textContent] && !drawer && handleDrawer()
      return ({ ...prev, [e.currentTarget.childNodes[1].textContent]: !prev[e.currentTarget.childNodes[1].textContent]})
    })
  }, [ drawer, handleDrawer ])

  return (
    <div className={ classes.root }>
      <AppBar position="fixed" className={ `${ classes.appBar } ${ drawer ? classes.appBarShift : '' }` }>
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={ handleDrawer } className={ drawer ? classes.dNone : ''}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={ classes.logo } >
            <Avatar alt="Profile" src={ `assets/img/${ process.env.REACT_APP_LOGO }` } style={{ marginRight: '15px' }} />
            { process.env.REACT_APP_COMPANY_NAME}
          </Typography>
          <div className={ classes.profileButton }>
            <Face />
            {/* <span className={ classes.username }>{ user && user.name }</span> */}
            {/* <IconButton onClick={ logout }>
              <ExitToApp />
            </IconButton> */}
          </div>
        </Toolbar>
      </AppBar>
      <Drawer open={ drawer } onClose={ handleCloseDrawer } >
        <div className={ classes.toolbar }>
          <IconButton onClick={ handleCloseDrawer }>
            { drawer ? <ChevronLeftIcon /> : <ChevronRightIcon /> }
          </IconButton>
        </div>
        <Divider />

        <List component="nav">
          { schema.map((link, index) => {
            if (link.submenu) {
              return (
                <div key={ index } >
                  <ListItem button onClick={ handleOpen } selected={ props.location.pathname.indexOf(link.to) > 0 }>
                    <div className={ classes.listItemIcon }> { link.icon } </div>
                    <ListItemText primary={ link.label } />
                    { menuOpen[ link.label ] ? <ExpandLess /> : <ExpandMore /> }
                  </ListItem>
                  <div onClick={ handleCloseDrawer } onKeyDown={ handleCloseDrawer }>
                    { link.submenu.map((sublink, i) => (
                      <Collapse in={ menuOpen[ link.label ] } timeout="auto" unmountOnExit key={ i } >
                        <List component="div" disablePadding>
                          <ListItem button key={ index } component={ Link } to={ sublink.to } className={ classes.nested } selected={ props.location.pathname === sublink.to } > 
                            <div className={ classes.listItemIcon }> { sublink.icon } </div>
                            <ListItemText primary={ sublink.label } />
                          </ListItem>
                        </List>
                      </Collapse>
                    )) }
                  </div>
                </div>
              )
            }

            return (
              <div onClick={ handleCloseDrawer } onKeyDown={ handleCloseDrawer } key={ index } >
                <ListItem button component={ Link } to={ link.to } selected={ props.location.pathname === link.to }>
                  <div className={ classes.listItemIcon }> { link.icon } </div>
                  <ListItemText primary={ link.label } />
                </ListItem>
              </div>
            )
          })}
        </List>
      </Drawer>
    </div>
  )
}

export default withRouter( ClosedMenu )