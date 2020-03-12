import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Menu } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  menuList: {
    marginTop: '2.2em'
  },
}));

const DropdownMenu = ({ buttonLabel, ...props }) => {

  const classes = useStyles()
  const [anchorDropdown, setAnchorDropdown] = React.useState(null);

  const handleDropdown = event => {
    setAnchorDropdown(event.currentTarget);
  };

  const handleDropdownClose = () => {
    setAnchorDropdown(null);
  }

  return (
    <div className={ props.className }>
      <Button onClick={ handleDropdown } >
        { buttonLabel }
      </Button>
      <Menu id="simple-menu" anchorEl={ anchorDropdown } keepMounted open={ Boolean(anchorDropdown) } onClose={ handleDropdownClose } className={ classes.menuList } >
        { props.children }
      </Menu>
    </div>
  );
}

export default DropdownMenu;