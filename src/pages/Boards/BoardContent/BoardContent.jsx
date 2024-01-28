import Box from '@mui/material/Box'
import ListColumns from './ListColumns/ListColumns'
import { mapOrder } from '~/utils/sorts'

function BoardContent({ board }) {
  const orderedColumn = mapOrder(board?.columns, board?.columnOrderIds, '_id')
  return (
    <Box sx={{
      width: '100%',
      height: (theme) => theme.trello.boardContentHeight,
      bgcolor:(theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#3498db'),
      p:'10px 0'
    }}>
      <ListColumns columns = {orderedColumn} />
    </Box>
  )
}

export default BoardContent