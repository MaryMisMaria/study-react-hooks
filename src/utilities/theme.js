import { createTheme } from '@mui/material'

export const theme = createTheme({
  components: {
    MuiListItemText: {
      styleOverrides: {
        root: {
          padding: 5,
          fontSize: 16,
          lineHeight: 3,
          color: '#999999',
          fontFamily: 'Roboto',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontStyle: 'normal',
          fontFamily: 'Roboto',
        },
      },
    },
  },
},
)
