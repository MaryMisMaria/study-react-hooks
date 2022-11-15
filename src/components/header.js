import { AppBar, Box, Toolbar, Typography } from '@mui/material'

const Header = () => {

  return (
    <Box height='60px'>
      <AppBar>
        <Toolbar
          sx={{
            height: '60px',
            display: 'flex',
            background: '#081627',
            justifyContent: 'space-between',
          }}
        >
          <Typography
            variant='h5'
            component='p'
            color='white'
          >
						Learn React Hooks
          </Typography>

        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
