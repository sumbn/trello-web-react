import { useColorScheme } from '@mui/material/styles'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'
import Box from '@mui/material/Box'

function ModeSelect() {
  const { mode, setMode } = useColorScheme()
  const handleChange = (event) => {
    // setAge(event.target.value);
    setMode(event.target.value)
  }

  return (
    <FormControl size="small" sx={{ minWidth: '120px' }}>
      <InputLabel
        id="label-mode"
        sx={{
          color: 'white',
          '&.Mui-focused': { color: 'white' }
        }}
      >Mode</InputLabel>
      <Select
        labelId="label-id-mode"
        id="id-mode"
        value={mode}
        label="Mode"
        onChange={handleChange}
        sx={{ color:'white',
          '.MuiOutlinedInput-notchedOutline':{ borderColor: ' white' },
          '&:hover .MuiOutlinedInput-notchedOutline':{ borderColor: ' white' },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline':{ borderColor: ' white' },
          '.MuiSvgIcon-root .MuiOutlinedInput-notchedOutline':{ color: ' white' }
        }}
      >
        <MenuItem value="light">
          <div style={{ display: 'flex', alignItems: 'center', gap:'8px' }}>
            <LightModeIcon fontSize="small"/> Light
          </div>
        </MenuItem>
        <MenuItem value="dark">
          <Box sx={{ display: 'flex', alignItems: 'center', gap:1 }}>
            <DarkModeOutlinedIcon fontSize="small"/> Dark
          </Box>
        </MenuItem>
        <MenuItem value="system">
          <Box sx={{ display: 'flex', alignItems: 'center', gap:1 }}>
            <SettingsBrightnessIcon fontSize="small"/> System
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  )
}

export default ModeSelect