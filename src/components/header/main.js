import { Box, List, ListItemButton, ListItemText } from '@mui/material'
/*
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
*/

const Main = () => {
  /*const { pathname } = useLocation()
	const [path, setPath] = useState(pathname)*/

  const listItems = [
    { listText: 'useState', path: '/useState' },
    { listText: 'useEffect', path: '/useEffect' },
    { listText: 'useRef', path: '/useRef' },
    { listText: 'useMemo', path: '/useMemo' },
    { listText: 'useCallback', path: '/useCallback' },
    { listText: 'useEffectLayout', path: '/useEffectLayout' },
  ]

  return (
    <>
      <Box
        sx={{
          width: '30%',
          background: 'white',
          height: 'calc(100vh - 60px)',
          border: '1px solid',
        }}
      >
        <List sx={{ width: '100%' }}>
          {listItems.map((listItem, index) => (
            <ListItemButton
              divider
              key={index}
              href={listItem.path}
              sx={{ display: 'flex', textAlign: 'center' }}
            >
              <ListItemText primary={listItem.listText} />
            </ListItemButton>
          ))}
        </List>
      </Box>
    </>
  )
}

export default Main
