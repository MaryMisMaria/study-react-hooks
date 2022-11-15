import { useState } from 'react'
// material
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import List from '@mui/material/List'
import { Button } from '@mui/material'
import Divider from '@mui/material/Divider'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import ListItemText from '@mui/material/ListItemText'
// images
import BackgroundImage from '../../images/1.png'
// icons material
import FavoriteIcon from '@mui/icons-material/Favorite'
import ThumbDownIcon from '@mui/icons-material/ThumbDown'

const HooksUseState = () => {
  const [count, setCount] = useState(0)
  const [iconTwoColor, setIconTwoColor] = useState('green')

  const PurpleColor = () => {
    setIconTwoColor('purple')
  }

  const BlackColor = () => {
    setIconTwoColor('black')
  }

  return (
    <Box align='center'>
      <Typography pt={3} variant='h5' fontStyle='Roboto'> useState - хук стану </Typography>
      <Box m={5} sx={{ width: '80%', bgcolor: 'background.paper', borderRadius: '8px' }}>
        <List p={3} sx={{ width: '100%' }}>
          <Typography variant='subtitle1'>
						All about hook useState
          </Typography>
          <ListItemText>
						Єдиним аргументом для useState є початкове значення стану.
						Початкове значення аргументу використовується тільки під час першого рендера.
          </ListItemText>
          <Divider />
          <ListItemText>
						Ми викликаємо його для того, щоб надати внутрішній стан нашому компоненту.
						React буде зберігати цей стан між повторними рендерами. Виклик useState повертає дві речі:
						поточне значення стану та функцію, яка дозволяє оновлювати цей стан.
          </ListItemText>
          <Divider />
          <ListItemText>
						Ви можете викликати цю функцію де завгодно, наприклад, в обробнику події.
          </ListItemText>
        </List>
      </Box>
      <Box width='80%' display='flex' bgcolor='background.paper'>
        <Card pb={4} sx={{ width: '50%', height: '50%' }}>
          <CardMedia
            height='200px'
            component='img'
            sx={{ backgroundImage: `url(${BackgroundImage})` }}
          />
          <CardContent>
            <Typography variant='body2' color='text.secondary'>
							const [state, setState] = useState(initialState);
							Повертає значення стану та функцію, що оновлює його.
							Під час початкового рендеру повернутий стан (state) співпадає зі значенням,
							переданим у першому аргументі (initialState).
							Функція setState використовується для оновлення стану.
							Вона приймає значення нового стану і ставить у чергу повторний рендер компонента.
							setState(newState);
							Упродовж наступних повторних рендерів, перше значення, повернуте useState,
							завжди буде в актуальному стані при здійсненні оновлень.
            </Typography>
          </CardContent>
        </Card>
        <Box width='50%' textAlign='center'>
          <Typography>Ви натиснули {count} разів</Typography>
          <Box mt={5} display='flex' justifyContent='space-evenly'>
            <Button
              variant='outlined'
              onClick={() => setCount(count - 1)}
              sx={{ bgcolor: '#081627', color: 'white', borderRadius: '3px' }}
            >
							Increase value
            </Button>
            <Button
              variant='outlined'
              onClick={() => setCount(count + 1)}
              sx={{ bgcolor: '#081627', height: '50%', color: 'white', borderRadius: '3px' }}
            >
							Reduce value
            </Button>
          </Box>
          <Typography mt={3}>При кліку змінюється колір</Typography>
          <Box mt={5} display='flex' justifyContent='space-evenly'>
            <button
              style={{ color: iconTwoColor }}
              onClick={PurpleColor}
            >
              <FavoriteIcon />
            </button>
            <button
              style={{ color: iconTwoColor }}
              onClick={BlackColor}
            >
              <ThumbDownIcon />
            </button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default HooksUseState
