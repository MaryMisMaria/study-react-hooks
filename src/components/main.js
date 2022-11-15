import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItemText from '@mui/material/ListItemText'
import ListItemButton from '@mui/material/ListItemButton'
import { Divider, Link, Typography } from '@mui/material'

const Main = ({ children }) => {

  const listItems = [
    { listText: 'useState', path: '/' },
    { listText: 'useEffect', path: '/useEffectHook' },
    { listText: 'useRef', path: '/useRefHook' },
    { listText: 'useCallback', path: '/useCallbackHook' },
    { listText: 'useLayoutEffect', path: '/useLayoutHook' },
    { listText: 'useMemo', path: '/useMemoHook' },
    { listText: 'useContext', path: '/useContextHook' },
  ]

  return (
    <Box sx={{ width: '100%', display: 'flex', height: 'calc(90vh - 60px)' }}>
      <Box
        sx={{
          width: '30%',
          color: 'white',
          height: '100%',
          border: '1px solid',
          background: '#081627',
        }}
      >
        <Typography mt={5} mb={2} align='center'>List Hooks</Typography>
        <Divider color='white' />
        <List sx={{ width: '100%' }}>
          {listItems.map((listItem, index) => (
            <ListItemButton
              divider
              key={index}
              component={Link}
              to={listItem.path}
              sx={{ display: 'flex', textAlign: 'center', '&:hover': { background: '#f3e5f5' } }}
            >
              <ListItemText primary={listItem.listText} />
            </ListItemButton>
          ))}
        </List>

      </Box>
      <Box>{children}</Box>
    </Box>
  )
}

export default Main
