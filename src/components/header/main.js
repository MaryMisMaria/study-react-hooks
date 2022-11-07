import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItemText from '@mui/material/ListItemText'
import ListItemButton from '@mui/material/ListItemButton'
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
    { listText: 'useLayoutEffect', path: '/useLayoutEffect' },
  ]

  return (
    <>
      <Box
        sx={{
          width: '220px',
          background: 'white',
          border: '1px solid',
          height: 'calc(100vh - 66px)',
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
