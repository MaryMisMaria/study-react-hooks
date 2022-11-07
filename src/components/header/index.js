import { AppBar, Toolbar, Typography } from '@mui/material'
import * as R from 'ramda'
import { useState } from 'react'
import Additional from './additional'
import Main from './main'
import ToggleButtons from './toggle-buttons'

const Header = () => {
  const toggleSettings = {
    MAIN_HOOKS: 0,
    ADDITIONAL_HOOKS: 1,
  }
  const [value, setValue] = useState(toggleSettings.MAIN_HOOKS)

  return (
    <>
      <AppBar position='static' color='secondary' sx={{ width: '100%' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant='h6' color='white'>
            React hooks
          </Typography>
          <ToggleButtons value={value} setValue={setValue} toggleSettings={toggleSettings} />
        </Toolbar>
      </AppBar>
      {
        R.equals(value, toggleSettings.MAIN_HOOKS)
          ? <Main />
          : <Additional />
      }
    </>
  )
}
export default Header
