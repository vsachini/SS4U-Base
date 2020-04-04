import React from 'react'
import Tooltip  from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    '&:hover': {
      color: theme.palette.primary.main
    }
  }
}))

const TableButton = ({ icon, title, onClicked, ...args }) => {

  const classes = useStyles()

  return (
    <Tooltip title={ title } { ...args } >
      <IconButton onClick={ args.type !== 'submit' ? onClicked : null } className={ classes.root } type={ args.type ? args.type : 'button' } >
        { icon } { title }
      </IconButton>
    </Tooltip>
  )
}

export default TableButton;