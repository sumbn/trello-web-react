import { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import ListColumns from './ListColumns/ListColumns'
import { mapOrder } from '~/utils/sorts'
import { DndContext, PointerSensor, useSensor, useSensors, MouseSensor, TouchSensor } from '@dnd-kit/core'
import { arrayMove } from '@dnd-kit/sortable'

function BoardContent({ board }) {
  // const pointerSensor = useSensor(PointerSensor, { activationConstraint: { distance: 10 } })
  const mouseSensor = useSensor(MouseSensor, { activationConstraint: { distance: 10 } })
  const touchSensor = useSensor(TouchSensor, { activationConstraint: { delay: 250, tolerance: 200 } })
  // const sensors = useSensors(pointerSensor)
  const sensors = useSensors(mouseSensor, touchSensor)
  const [orderedColumn, setOrderedColumn] = useState([])

  useEffect(() => {
    setOrderedColumn(mapOrder(board?.columns, board?.columnOrderIds, '_id'))
  }, [board])

  const handleDragEnd = (event) => {
    // console.log('handle', event)
    const { active, over } = event
    if (!over) return

    if (active.id !== over.id) {
      const oldIndex = orderedColumn.findIndex(c => c._id === active.id)
      const newIndex = orderedColumn.findIndex(c => c._id === over.id)
      const dndOrderedCollumn = arrayMove(orderedColumn, oldIndex, newIndex)
      const dndOrderedColumnIds = dndOrderedCollumn.map(c => c._id)
      setOrderedColumn(dndOrderedCollumn)

    }
  }
  return (
    <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
      <Box sx={{
        width: '100%',
        height: (theme) => theme.trello.boardContentHeight,
        bgcolor:(theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#3498db'),
        p:'10px 0'
      }}>
        <ListColumns columns = {orderedColumn} />
      </Box>
    </DndContext>
  )
}

export default BoardContent