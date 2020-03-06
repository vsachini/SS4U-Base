import React from 'react'
import DraggableItem from './DraggableItem';
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { Paper, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  droppable: {
    display: 'flex',
    flexDirection: 'column',
    '& > div': {
      padding: '5px 25px'
    },
    minHeight: '4em'
  },
  noBoxShadow: {
    boxShadow: 'none'
  },
  title: {
    textAlign: 'center'
  }
}))

const DragNDrop = ({ droppableList = [], renderItem, horizontal, boxShadow = true, ...props }) => {

  const classes = useStyles()

  const handleDragEnd = result => {
    if (!result.destination || (result.source.droppableId === result.destination.droppableId && result.source.index === result.destination.index)) return null

    const origin = droppableList.find(item => item.id === result.source.droppableId)
    const destination = droppableList.find(item => item.id === result.destination.droppableId)
    if (origin.id === destination.id) {
      origin.items.splice(result.destination.index, 0, origin.items.splice(result.source.index, 1)[0]);
    } else {
      destination.items.splice(result.destination.index, 0, origin.items[result.source.index])
      origin.items.splice(result.source.index, 1)
    }
  }

  return (
    <div { ...props }>
      <DragDropContext onDragEnd={ handleDragEnd }>
        <Grid container spacing={ 3 }>
          { droppableList.map((droppable, i) => (
            <Grid item xs key={ i } >
              <Typography variant='body1' className={ classes.title }> { droppable.title } </Typography>
              <Droppable droppableId={ droppable.id } direction={ horizontal ? 'horizontal' : 'vertical'} >
                { provided => (
                  <Paper { ...provided.droppableProps } ref={ provided.innerRef } className={ ` ${classes.droppable} ${( !boxShadow && classes.noBoxShadow )}` } >
                    { droppable.items.map((item, x) => (
                      <DraggableItem item={ item } index={ x } draggableId={ `${ droppable.id } ${ x }` } renderItem={ renderItem } key={ x } itemClass={ droppable.classes } />
                    ))}
                    { provided.placeholder }
                  </Paper>
                )}
              </Droppable>
            </Grid>
          )) }
        </Grid>
      </DragDropContext>
    </div>
  )
}

export default DragNDrop