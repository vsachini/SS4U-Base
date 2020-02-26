import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    fontSize: '.8em',
    textDecoration: 'none',
    color: theme.palette.primary.text.color,
    '&:hover': {
      color: theme.palette.secondary.main
    }
  }
}))

const Link = ({ label, href, ...props }) => {

  const classes = useStyles()

  return (
    <a href={ href } className={ classes.root } > { label } </a>
  )
}

export default Link