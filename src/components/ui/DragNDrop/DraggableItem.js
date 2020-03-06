import React from 'react'
import { Draggable } from 'react-beautiful-dnd';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  draggable: {
    padding: '5px'
  }
}))

const DraggableItem = ({ item, index, renderItem, draggableId, itemClass }) => {

  const classes = useStyles()

  return (
    <Draggable draggableId={ draggableId } index={ index } className={ classes.draggable } >
      { provided => (
        <div { ...provided.draggableProps } { ...provided.dragHandleProps } ref={ provided.innerRef } className={ itemClass } >
          { renderItem(item) }
          { provided.placeholder }
        </div>
      ) }
    </Draggable>
  )
}

export default DraggableItem