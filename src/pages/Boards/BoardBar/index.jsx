import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Tooltip from '@mui/material/Tooltip'
import Button from '@mui/material/Button'
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const CHIP_STYLE = {
  color: 'primary.main',
  bgcolor: 'white',
  border: 'none',
  paddingX:'5px',
  borderRadius:'4px',
  '& .MuiSvgIcon-root': {
    color: 'primary.main'
  },
  '&:hover':{
    bgcolor:'primary.50'
  }
}

function BoardBar() {
  return (
    <Box sx={{
      width: '100%',
      height: (theme) => theme.trello.boardBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingX: 2,
      gap: 2,
      overflowX: 'auto',
      borderTop: '1px solid #00bfa5'
    }}>
      <Box sx={{ display:'flex', alignItems:'center', gap: 2 }} >
        <Chip
          sx={CHIP_STYLE}
          icon={<DashboardIcon />}
          label="Sumbn Mern Stack"
          clickable
          // onclick={() => {}}
        />

        <Chip
          sx={CHIP_STYLE}
          icon={<VpnLockIcon />}
          label="Public/Private Workspace"
          clickable
          // onclick={() => {}}
        />

        <Chip
          sx={CHIP_STYLE}
          icon={<AddToDriveIcon />}
          label="Add To Google Drive"
          clickable
          // onclick={() => {}}
        />
        <Chip
          sx={CHIP_STYLE}
          icon={< BoltIcon/>}
          label="Automation"
          clickable
          // onclick={() => {}}
        />
        <Chip
          sx={CHIP_STYLE}
          icon={<FilterListIcon />}
          label="Filter"
          clickable
          // onclick={() => {}}
        />
      </Box>
      <Box sx={{ display:'flex', alignItems:'center', gap: 2 }} >
        <Button variant="outlined" startIcon = {<PersonAddIcon/>}>Invite</Button>
        <AvatarGroup
          max={4}
          sx={{
            '& .MuiAvatar-root': {
              width: 34,
              height: 34,
              fontSize: 16
            }
          }}
        >
          <Tooltip title="sum bui">
            <Avatar
              alt="sumbn"
              src="https://nuocngot57.files.wordpress.com/2014/12/wqrsf.jpg" />
          </Tooltip>
          <Tooltip title="sum bui">
            <Avatar
              alt="sumbn"
              src= "https://i.pinimg.com/736x/06/eb/c5/06ebc50cb4aecee261c340de62277231.jpg" />
          </Tooltip>
          <Tooltip title="sum bui">
            <Avatar
              alt="sumbn"
              src="https://cdnb.artstation.com/p/assets/images/images/037/933/141/large/th-vinh-ph-m-ecb57810-3d4e-41ce-8562-3f0f077a8ac5.jpg?1621706022" />
          </Tooltip>
          <Tooltip title="sum bui">
            <Avatar
              alt="sumbn"
              src="https://cdnb.artstation.com/p/assets/images/images/037/933/141/large/th-vinh-ph-m-ecb57810-3d4e-41ce-8562-3f0f077a8ac5.jpg?1621706022" />
          </Tooltip>
          <Tooltip title="sum bui">
            <Avatar
              alt="sumbn"
              src="https://cdnb.artstation.com/p/assets/images/images/037/933/141/large/th-vinh-ph-m-ecb57810-3d4e-41ce-8562-3f0f077a8ac5.jpg?1621706022" />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar