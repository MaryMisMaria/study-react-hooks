import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import { AppBar, Box, IconButton, Link, Menu, MenuItem, Toolbar, Typography } from '@mui/material'

const Header = () => {
  const [anchor, setAnchor] = useState(null)
  const open = Boolean(anchor)
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
          <IconButton
            edge='start'
            aria-label='menu'
            onClick={({ currentTarget }) => setAnchor(currentTarget)}
            sx={{ background: 'white', '&:hover': { background: 'silver' } }}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            open={open}
            anchorEl={anchor}
            onclick={() => setAnchor(null)}
            onClose={() => setAnchor(null)}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            KeepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <MenuItem
              component={Link}
              onClick={() => setAnchor(null)}
            >
              <Typography variant='h6'>Правила використання</Typography>
            </MenuItem>
            <MenuItem
              component={Link}
              onClick={() => setAnchor(null)}
            >
              <Typography variant='h6'>Створення хуків</Typography>
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
