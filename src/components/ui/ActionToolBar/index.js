import React from 'react'
import { makeStyles, Paper, Typography } from '@material-ui/core'

const useStyle = makeStyles( theme => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 15px',
    marginBottom: '15px',
    minHeight: '48px'
  },
  buttonsContainer: {
    '& button': {
      marginLeft: '5px'
    }
  }
}))

const ActionToolBar = ({ title, ...props }) => {

  const classes = useStyle()

  return (
    <Paper className={ classes.root } elevation={ 4 }>
      <Typography variant='h6'> { title } </Typography>
      <div className={ classes.buttonsContainer }>
        { props.children }
      </div>
    </Paper>
  )
}

export default ActionToolBar