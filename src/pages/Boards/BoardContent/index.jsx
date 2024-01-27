import Box from '@mui/material/Box'

const COLUMN_HEADER_HEIGHT ='50px'
const COLUMN_FOOTER_HEIGHT ='50px'

function BoardContent() {
  return (
    <Box sx={{
      backgroundColor: 'primary.main',
      width: '100%',
      height: (theme) => `calc(100vh - ${theme.trello.appBarHeight} - ${theme.trello.boardBarHeight})`,
      display: 'flex',
      bgcolor:(theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#3498db')
    }}>
      <Box
        sx={{
          minWidth: '300px',
          maxWidth: '300px',
          bgcolor:(theme) => (theme.palette.mode === 'dark' ? '#2c3e50' : '#2980b9'),
          ml: 2,
          borderRadius:'6px'
        }}>
        <Box sx={{}}>
            Header
        </Box>
        <Box sx={{}}>
            Content
        </Box>
        <Box sx={{}}>
            Footer
        </Box>
      </Box>
    </Box>
  )
}

export default BoardContent