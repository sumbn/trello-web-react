import { experimental_extendTheme as extendTheme } from '@mui/material/styles'
import { teal, deepOrange, cyan, orange } from '@mui/material/colors'
import { colors } from '@mui/material'

// Create a theme instance.
const theme = extendTheme({
  trello:{
    appBarHeight: '58px',
    boardBarHeight: '60px'
  },
  colorSchemes: {
    // light: {
    //   palette: {
    //     primary: teal,
    //     secondary: deepOrange
    //   }
    // },
    // dark: {
    //   palette: {
    //     primary: cyan,
    //     secondary: orange
    //   }
    // }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          '*::-webkit-scrollbar': {
            width: '8px',
            height: '8px'
          },
          '*::-webkit-scrollbar-thumb': {
            backgroundColor: '#bdc3c7',
            borderRadius: '8px'
          },
          '*::-webkit-scrollbar-thumb:hover': {
            backgroundColor: 'white'
          }
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderWidth: '0.5px',
          '&:hover': { borderWidth: '0.5px' }
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        // root: ({ theme }) => ({
        //   // color: theme.palette.primary.main,
        //   fontSize: '0.875rem'
        // })
        root: { fontSize: '0.875rem' }
      }
    },

    MuiOutlinedInput: {
      styleOverrides: {
        // root: ({ theme }) => ({
        //   // color: theme.palette.primary.main,
        //   fontSize: '0.875rem',
        //   // '.MuiOutlinedInput-notchedOutline': {
        //   //   borderColor: theme.palette.primary.light
        //   // },
        //   // '&:hover': {
        //   //   '.MuiOutlinedInput-notchedOutline': {
        //   //     borderColor: theme.palette.primary.main
        //   //   }
        //   // },
        //   '& fieldSet': { borderWidth:'0.5px !important' },
        //   '&:hover fieldSet': { borderWidth:'1px !important' },
        //   '&.Mui-focused fieldSet': { borderWidth:'1px !important'}
        // })

        root: {
          fontSize: '0.875rem',
          '& fieldSet': { borderWidth:'0.5px !important' },
          '&:hover fieldSet': { borderWidth:'1px !important' },
          '&.Mui-focused fieldSet': { borderWidth:'1px !important' }
        }
      }
    }
  }
})

export default theme