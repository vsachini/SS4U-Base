import React from 'react'
import { Paper, makeStyles } from '@material-ui/core'

const useStyles = makeStyles( theme => ({
  root: {
    padding: '15px'
  }
}))

const Container = ({ elevation = 4, className, ...props }) => {

  const classes = useStyles()

  return (
    <Paper elevation={ elevation } className={ `${ className } ${ classes.root }` }>
      { props.children }
    </Paper>
  )
}

export default Container