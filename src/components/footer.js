import { Box, Link, Typography } from '@mui/material'

const Footer = () => {
  return (
    <Box sx={{
      width: '100%',
      height: '100px',
      display: 'flex',
      alignItems: 'center',
      background: '#081627',
      justifyContent: 'center',
    }}
    >
      <Link href='https://uk.reactjs.org/docs/hooks-effect.html'>
        <Typography color='white' variant='h6'>Links on documentation</Typography>
      </Link>
    </Box>
  )
}

export default Footer
